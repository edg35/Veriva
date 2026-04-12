import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
    return (
        <div style={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center", background: "var(--color-paper, #f7f6f2)" }}>
            <SignIn routing="path" path="/sign-in" fallbackRedirectUrl="/dashboard" />
        </div>
    );
}
