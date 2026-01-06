"use client";

import { useState, useEffect } from "react";
import "./ScrollStage.css";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const scrollTo = (targetZ: number) => {
        if (typeof window !== "undefined") {
            window.dispatchEvent(
                new CustomEvent("3d-scroll-to", { detail: targetZ })
            );
        }
        setIsOpen(false); // Close sidebar after navigation
    };

    // Only show sidebar on mobile
    if (!isMobile) {
        return null;
    }

    return (
        <>
            {/* Hamburger Menu Button */}
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

            {/* Sidebar Overlay */}
            {isOpen && (
                <div
                    className="sidebar-overlay"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`sidebar ${isOpen ? "open" : ""}`}>
                <div className="sidebar-header">
                    <div className="sidebar-logo" onClick={() => scrollTo(10)}>
                        SeongYeon Kim
                    </div>
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
                        onClick={() => scrollTo(10)}
                    >
                        Home
                    </button>
                    <button
                        className="sidebar-link"
                        onClick={() => scrollTo(-25)}
                    >
                        Portfolio
                    </button>
                    <button
                        className="sidebar-link"
                        onClick={() => scrollTo(-95)}
                    >
                        Outsource
                    </button>
                    <button
                        className="sidebar-link"
                        onClick={() => scrollTo(-125)}
                    >
                        Experience
                    </button>
                    <button
                        className="sidebar-link"
                        onClick={() => scrollTo(-165)}
                    >
                        Skills
                    </button>
                    <button
                        className="sidebar-link"
                        onClick={() => scrollTo(-215)}
                    >
                        Profile
                    </button>
                </nav>
            </aside>
        </>
    );
}

