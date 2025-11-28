import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "F1 Strategy Explorer",
    description: "Learn about Formula 1 and its tire strategies",
    icons: {
        icon: "img/f1-logo.png",
    },
    other: {
        url: "img/f1.jpg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
