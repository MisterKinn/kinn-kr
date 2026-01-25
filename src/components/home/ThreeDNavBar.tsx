"use client";

import "./ScrollStage.css";

export default function ThreeDNavBar() {
    const scrollTo = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="nav-overlay">
            <div className="nav-logo" onClick={() => scrollTo("Home")}>
                SeongYeon Kim
            </div>
            <div className="nav-links">
                <button className="nav-btn" onClick={() => scrollTo("Home")}>
                    Home
                </button>
                <button
                    className="nav-btn"
                    onClick={() => scrollTo("Portfolio")}
                >
                    Portfolio
                </button>
                <button
                    className="nav-btn"
                    onClick={() => scrollTo("Outsource")}
                >
                    Outsource
                </button>
                <button
                    className="nav-btn"
                    onClick={() => scrollTo("Experience")}
                >
                    Experience
                </button>
                <button className="nav-btn" onClick={() => scrollTo("Skills")}>
                    Skills
                </button>
                <button className="nav-btn" onClick={() => scrollTo("Profile")}>
                    Profile
                </button>
            </div>
        </nav>
    );
}
