"use client";

import "./ScrollStage.css";

export default function ThreeDNavBar() {
    const scrollTo = (targetZ: number) => {
        if (typeof window !== "undefined") {
            window.dispatchEvent(
                new CustomEvent("3d-scroll-to", { detail: targetZ })
            );
        }
    };

    return (
        <nav className="nav-overlay">
            <div className="nav-logo" onClick={() => scrollTo(10)}>
                SeongYeon Kim
            </div>
            <div className="nav-links">
                <button className="nav-btn" onClick={() => scrollTo(10)}>
                    Home
                </button>
                <button className="nav-btn" onClick={() => scrollTo(-35)}>
                    Portfolio
                </button>
                <button className="nav-btn" onClick={() => scrollTo(-105)}>
                    Outsource
                </button>
                <button className="nav-btn" onClick={() => scrollTo(-145)}>
                    Experience
                </button>
                <button className="nav-btn" onClick={() => scrollTo(-185)}>
                    Skills
                </button>
                <button className="nav-btn" onClick={() => scrollTo(-225)}>
                    Profile
                </button>
            </div>
        </nav>
    );
}

