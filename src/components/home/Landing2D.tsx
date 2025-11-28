"use client";

import { useState, useEffect } from "react";
import "./ScrollStage.css";

export default function Landing2D() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    return (
        <div className="landing-2d-container">
            <div className="landing-2d-content">
                <h1 className="landing-2d-title">SeongYeon Kim</h1>
                <p className="landing-2d-description">
                    I'm a student Frontend Developer{"\n"}
                    with a passion for crafting functional,{"\n"}
                    impactful experiences{"\n"}
                    that resonate with users.
                </p>
            </div>
            <div className="landing-2d-loading">
                <div className="loading-spinner"></div>
                <p className="loading-text">Loading 3D Experience...</p>
            </div>
        </div>
    );
}

