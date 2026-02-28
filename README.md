# Veriva — Next.js App

Landing page for Veriva, built with Next.js 14 App Router.

## Project Structure

```
app/
  layout.tsx          # Root layout — fonts, metadata, global CSS
  page.tsx            # Home page — composes all sections
  api/
    waitlist/
      route.ts        # POST /api/waitlist — email capture endpoint

components/
  Nav.tsx             # Fixed nav bar  [client]
  Hero.tsx            # Hero section   [server]
  HowItWorks.tsx      # 3-step grid    [server]
  ForWho.tsx          # Audience cards [server]
  TrustStrip.tsx      # Dark security strip [server]
  Waitlist.tsx        # Email capture form  [client]
  Footer.tsx          # Footer         [server]
  ScrollReveal.tsx    # IntersectionObserver scroll animations [client]

styles/
  globals.css         # All styles — CSS variables, layout, components
```

## Getting Started

```bash
npx create-next-app@latest veriva --typescript --app --no-tailwind
# Copy these files into the project, then:
npm run dev
```

## Wiring up the Waitlist

Edit `app/api/waitlist/route.ts` to persist emails. Recommended options:

**Option A — FastAPI backend (when ready)**
```ts
await fetch(`${process.env.NEXT_PUBLIC_API_URL}/waitlist`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email }),
})
```

**Option B — Supabase direct**
```ts
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!)
await supabase.from('waitlist').insert({ email })
```

**Option C — Resend / Mailchimp for now**
Drop in their SDK and collect emails directly without a database.

## Environment Variables

```env
NEXT_PUBLIC_API_URL=http://localhost:8000   # FastAPI backend URL
SUPABASE_URL=                               # If using Supabase directly
SUPABASE_KEY=                               # Supabase anon key
```
