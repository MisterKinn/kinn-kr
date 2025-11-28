import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "KJS' place",
    description: "Challenges of Startup Entrepreneur",
    icons: {
        icon: "img/kjs-icon.png",
    },
    other: {
        url: "img/black-banner.png",
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
