"use client";

import { useState, useEffect } from "react";
import "../../components/home/ScrollStage.css";

export default function EnglishSidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const scrollTo = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const yOffset = -80;
            const y =
                element.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
        setIsOpen(false);
    };

    if (!isMobile) {
        return null;
    }

    return (
        <>
            <button
                className="sidebar-toggle"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <span className={`hamburger ${isOpen ? "open" : ""}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </button>

            {isOpen && (
                <div
                    className="sidebar-overlay"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <aside className={`sidebar ${isOpen ? "open" : ""}`}>
                <div className="sidebar-header">
                    <a href="/" className="sidebar-logo">
                        SeongYeon Kim
                    </a>
                    <button
                        className="sidebar-close"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close menu"
                    >
                        ×
                    </button>
                </div>
                <nav className="sidebar-nav">
                    <button
                        className="sidebar-link"
                        onClick={() => scrollTo("intro")}
                    >
                        들어가며
                    </button>
                    <button
                        className="sidebar-link"
                        onClick={() => scrollTo("principles")}
                    >
                        핵심 원칙
                    </button>
                    <button
                        className="sidebar-link"
                        onClick={() => scrollTo("reading")}
                    >
                        Reading
                    </button>
                    <button
                        className="sidebar-link"
                        onClick={() => scrollTo("writing")}
                    >
                        Writing
                    </button>
                    <button
                        className="sidebar-link"
                        onClick={() => scrollTo("speaking")}
                    >
                        Speaking
                    </button>
                    <button
                        className="sidebar-link"
                        onClick={() => scrollTo("listening")}
                    >
                        Listening
                    </button>
                    <button
                        className="sidebar-link"
                        onClick={() => scrollTo("results")}
                    >
                        결과와 느낀 점
                    </button>
                    <button
                        className="sidebar-link"
                        onClick={() => scrollTo("disclaimer")}
                    >
                        Disclaimer
                    </button>
                    <button
                        className="sidebar-link"
                        onClick={() => scrollTo("faq")}
                    >
                        FAQ
                    </button>
                </nav>
            </aside>
        </>
    );
}
