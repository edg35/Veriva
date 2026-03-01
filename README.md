# Veriva — Developer Onboarding Guide

> **Veriva** is a SaaS platform that lets landlords and property managers send tamper-proof income verification requests to rental applicants. Applicants connect their bank account via Plaid, and landlords receive an official verification report — no paystubs, no fraud.

---

## Table of Contents

1. [Tech Stack Overview](#tech-stack-overview)
2. [How the System Works](#how-the-system-works)
3. [Getting Started Locally](#getting-started-locally)
4. [Git & GitHub Basics](#git--github-basics)
5. [Docker & Docker Compose](#docker--docker-compose)
6. [CI/CD Pipeline](#cicd-pipeline)
7. [Project Structure](#project-structure)
8. [Environment Variables](#environment-variables)
9. [Useful Commands Cheatsheet](#useful-commands-cheatsheet)

---

## Tech Stack Overview

| Layer             | Technology              | Purpose                        |
| ----------------- | ----------------------- | ------------------------------ |
| Frontend          | Next.js 14              | UI for landlords & renters     |
| Backend           | FastAPI (Python)        | API server, business logic     |
| Database          | PostgreSQL via Supabase | Data storage                   |
| File Storage      | AWS S3 / MinIO (local)  | Report PDFs, documents         |
| Bank Connectivity | Plaid API               | Read-only bank account linking |
| Frontend Hosting  | Vercel                  | Auto-deploys from `main`       |
| Backend Hosting   | Railway / Render        | Backend service hosting        |
| CI/CD             | GitHub Actions          | Automated testing & deployment |
| Local Dev         | Docker Compose          | One-command local environment  |

---

## How the System Works

The core user flow is:

```
Landlord creates verification request
        ↓
Renter receives secure link via email
        ↓
Renter connects bank account via Plaid (read-only)
        ↓
Veriva pulls transaction history & income data
        ↓
System generates official verification report (PDF)
        ↓
Landlord receives report in their dashboard
```

**Important:** Plaid access is **read-only**. Veriva can never move, modify, or withdraw funds. Applicants must give explicit consent before any data is accessed.

---

## Getting Started Locally

### Prerequisites

Make sure you have these installed before anything else:

- [Git](https://git-scm.com/) — version control
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) — to run the local environment
- [Node.js](https://nodejs.org/) (v18+) — for the Next.js frontend
- [Python](https://www.python.org/) (v3.11+) — for the FastAPI backend

### First-time setup

```bash
# 1. Clone the repository
git clone https://github.com/your-org/veriva.git
cd veriva

# 2. Copy the example environment file and fill in your values
cp .env.example .env

# 3. Start the full local environment (database, backend, frontend)
docker compose up

# That's it. The app will be running at:
#   Frontend: http://localhost:3000
#   Backend:  http://localhost:8000
#   API Docs: http://localhost:8000/docs
```

> **New developer tip:** Step 3 is the only command you need to get a fully working local environment. Docker handles everything — the database, backend server, local S3 (MinIO), and the frontend.

---

## Git & GitHub Basics

Git is the version control system we use to track changes. GitHub is where the code lives and where our team collaborates.

### The Golden Rule

**Never commit directly to `main`.** Always work on a feature branch and open a Pull Request.

### Everyday Git Workflow

#### 1. Check what branch you're on

```bash
git branch
# The branch with * is your current branch
```

#### 2. Create a new branch for your work

Always branch off of `main` for new features. Use a descriptive name:

```bash
git checkout main          # switch to main first
git pull origin main       # get the latest changes
git checkout -b feature/income-summary-chart   # create and switch to your new branch
```

Branch naming conventions:

- `feature/` — new features (e.g., `feature/plaid-webhook-handler`)
- `fix/` — bug fixes (e.g., `fix/report-pdf-generation`)
- `chore/` — maintenance tasks (e.g., `chore/update-dependencies`)

#### 3. Make your changes, then stage them

```bash
git status              # see what files have changed
git diff                # see the actual line-by-line changes

git add filename.py     # stage a specific file
git add .               # stage ALL changed files in the current directory
```

> **Tip:** Use `git add .` carefully — always run `git status` first so you know exactly what you're staging.

#### 4. Commit your changes

```bash
git commit -m "Add income trend chart to verification report"
```

Write commit messages in the present tense and be descriptive. Bad: `"fix stuff"`. Good: `"Fix PDF export failing when income source has no name"`.

#### 5. Push your branch to GitHub

```bash
git push origin feature/income-summary-chart
```

The first time you push a new branch, Git may prompt you to set the upstream — just follow the prompt or run:

```bash
git push --set-upstream origin feature/income-summary-chart
```

#### 6. Open a Pull Request (PR)

Go to the GitHub repo in your browser. You'll see a banner offering to open a PR for your recently pushed branch. Click it, fill in a description of what you changed and why, and request a review from a teammate.

Once approved, the PR gets merged into `main` and the CI/CD pipeline deploys it automatically.

#### 7. Keep your branch up to date

If `main` has moved forward while you're working on your branch:

```bash
git checkout main
git pull origin main
git checkout feature/your-branch
git merge main            # merge main's changes into your branch
```

Or use rebase for a cleaner history:

```bash
git rebase main
```

### Other Useful Git Commands

```bash
# Undo staged changes (before committing)
git restore --staged filename.py

# Undo all unstaged changes in a file
git restore filename.py

# See commit history
git log --oneline

# See who last changed each line of a file
git blame filename.py

# Temporarily save work-in-progress without committing
git stash
git stash pop     # bring it back
```

---

## Docker & Docker Compose

Docker lets every developer run the exact same environment regardless of their operating system. You don't need to install Python, PostgreSQL, or MinIO separately — Docker handles all of it.

### Core Concepts

- **Image** — a blueprint for a container (like a recipe)
- **Container** — a running instance of an image (like the actual dish)
- **Volume** — persistent storage that survives container restarts
- **`docker-compose.yml`** — the file that defines all our services and how they connect

### Common Commands

```bash
# Start all services defined in docker-compose.yml
docker compose up

# Start in the background (detached mode)
docker compose up -d

# Stop all running services
docker compose down

# Stop and remove all data (volumes) — useful for a clean slate
docker compose down -v

# Rebuild images after changing a Dockerfile or dependencies
docker compose up --build

# View logs from all services
docker compose logs

# View logs from a specific service (e.g., the backend)
docker compose logs backend

# Follow logs in real-time
docker compose logs -f backend

# See what containers are currently running
docker compose ps
```

### Running Commands Inside a Container

Sometimes you need to run a command inside a running container — like a database migration or a Python script:

```bash
# Open an interactive shell inside the backend container
docker compose exec backend bash

# Run a specific command inside the backend container
docker compose exec backend python manage.py migrate

# Open a PostgreSQL shell in the database container
docker compose exec db psql -U postgres -d veriva
```

### Our `docker-compose.yml` Services

| Service    | Description                      | Local Port |
| ---------- | -------------------------------- | ---------- |
| `frontend` | Next.js dev server               | 3000       |
| `backend`  | FastAPI server with hot reload   | 8000       |
| `db`       | PostgreSQL database              | 5432       |
| `minio`    | Local S3-compatible file storage | 9000       |

### MinIO (Local S3)

In production we use AWS S3 for file storage. Locally, we use **MinIO** — an open-source drop-in replacement that behaves identically to S3. The MinIO dashboard is available at `http://localhost:9001` when Docker is running. Check your `.env` file for the local credentials.

---

## CI/CD Pipeline

We use **GitHub Actions** to automatically test and deploy code. The pipeline runs every time a PR is opened or code is merged into `main`.

### What Happens When You Push Code

1. **On any Pull Request** → GitHub Actions runs tests and linting. If tests fail, the PR cannot be merged.
2. **On merge to `main`** → Vercel automatically deploys the frontend. Railway/Render automatically deploys the backend.

You can see the status of pipeline runs in the **Actions** tab of the GitHub repo. A green checkmark ✅ means everything passed. A red ✗ means something failed — click into it to see the logs.

### You Don't Need to Trigger Deployments Manually

The pipeline is fully automatic. Just merge your PR and the deployment happens on its own within a few minutes.

---

## Project Structure

```
veriva/
├── frontend/               # Next.js 14 app
│   ├── app/                # App router pages & layouts
│   ├── components/         # Reusable UI components
│   ├── lib/                # Utilities, API client
│   └── public/             # Static assets
│
├── backend/                # FastAPI Python app
│   ├── routers/            # API route handlers
│   ├── models/             # Database models (SQLAlchemy)
│   ├── services/           # Business logic (Plaid, report generation)
│   ├── schemas/            # Pydantic request/response schemas
│   └── main.py             # App entrypoint
│
├── .github/
│   └── workflows/          # GitHub Actions CI/CD definitions
│
├── docker-compose.yml      # Local development environment
├── .env.example            # Template for required environment variables
└── README.md               # This file
```

---

## Environment Variables

Copy `.env.example` to `.env` and fill in your values. Never commit `.env` to git — it's in `.gitignore`.

```bash
cp .env.example .env
```

Key variables you'll need:

| Variable          | Description                                       |
| ----------------- | ------------------------------------------------- |
| `PLAID_CLIENT_ID` | Your Plaid API client ID                          |
| `PLAID_SECRET`    | Your Plaid API secret (use Sandbox for local dev) |
| `PLAID_ENV`       | `sandbox` for local, `production` for prod        |
| `DATABASE_URL`    | PostgreSQL connection string                      |
| `SUPABASE_URL`    | Supabase project URL                              |
| `SUPABASE_KEY`    | Supabase anon/service key                         |
| `S3_BUCKET`       | S3 bucket name for report storage                 |
| `S3_ENDPOINT`     | Use MinIO URL locally, AWS in prod                |

> **Plaid Sandbox:** For local development, always use `PLAID_ENV=sandbox`. Plaid's sandbox environment simulates real bank connections without touching real financial data. Use the test credentials from [Plaid's sandbox docs](https://plaid.com/docs/sandbox/).

---

## Useful Commands Cheatsheet

### Git

```bash
git status                          # What's changed?
git checkout -b feature/my-feature  # New branch
git add .                           # Stage all changes
git commit -m "Message"             # Commit
git push origin feature/my-feature  # Push to GitHub
git pull origin main                # Get latest from main
git log --oneline                   # View commit history
git stash / git stash pop           # Save/restore work-in-progress
```

### Docker

```bash
docker compose up              # Start everything
docker compose up -d           # Start in background
docker compose down            # Stop everything
docker compose down -v         # Stop + wipe data
docker compose up --build      # Rebuild after dependency changes
docker compose logs -f backend # Watch backend logs
docker compose exec backend bash   # Shell into backend container
docker compose ps              # See running containers
```

### Frontend (Next.js)

```bash
cd frontend
npm install          # Install dependencies
npm run dev          # Start dev server (if running outside Docker)
npm run build        # Build for production
npm run lint         # Run linter
```

### Backend (FastAPI / Python)

```bash
cd backend
pip install -r requirements.txt   # Install dependencies
uvicorn main:app --reload          # Start dev server (if running outside Docker)
pytest                             # Run tests
```

---

## Questions?

If something isn't working or isn't covered here, open an issue on GitHub or ask in the team Slack. And if you figured something out that should be in this doc — please update it!
