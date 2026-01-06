"use client";

import "../../styles/style.css";

export default function EnglishNavBar() {
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
    };

    return (
        <nav className="nav-overlay">
            <div className="nav-logo" onClick={() => scrollTo("intro")}>
                SeongYeon Kim
            </div>
            <div className="nav-links">
                <button
                    className="nav-btn"
                    onClick={() => scrollTo("intro")}
                ></button>
                <button
                    className="nav-btn"
                    onClick={() => scrollTo("principles")}
                >
                    핵심 원칙
                </button>
                <button className="nav-btn" onClick={() => scrollTo("reading")}>
                    Reading
                </button>
                <button className="nav-btn" onClick={() => scrollTo("writing")}>
                    Writing
                </button>
                <button
                    className="nav-btn"
                    onClick={() => scrollTo("speaking")}
                >
                    Speaking
                </button>
                <button
                    className="nav-btn"
                    onClick={() => scrollTo("listening")}
                >
                    Listening
                </button>
                <button className="nav-btn" onClick={() => scrollTo("results")}>
                    결과와 느낀 점
                </button>
                <button
                    className="nav-btn"
                    onClick={() => scrollTo("disclaimer")}
                >
                    Disclaimer
                </button>
                <button className="nav-btn" onClick={() => scrollTo("faq")}>
                    FAQ
                </button>
            </div>
        </nav>
    );
}
