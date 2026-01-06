import Link from "next/link";

export default function NotFound() {
    return (
        <main
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                padding: "2rem",
                textAlign: "center",
            }}
        >
            <h1>Page not found</h1>
            <p>The page you&apos;re looking for doesn&apos;t exist.</p>
            <Link
                href="/"
                style={{
                    textDecoration: "underline",
                }}
            >
                Go back home
            </Link>
        </main>
    );
}

