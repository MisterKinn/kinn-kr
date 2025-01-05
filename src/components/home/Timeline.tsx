import React from "react";
import "@/styles/timeline.css";

function TimeLine() {
    return (
        <section className="design-section">
            <div className="timeline">
                <div className="timeline-empty"></div>
                <div className="timeline-middle">
                    <div className="timeline-circle"></div>
                </div>
                <div className="timeline-component timeline-content">
                    <h3>Software Engineer</h3>
                    <p>Company Name - 2023-Present</p>
                    <p>Description of your role and achievements</p>
                </div>

                <div className="timeline-component timeline-content">
                    <h3>Frontend Developer</h3>
                    <p>Previous Company - 2021-2023</p>
                    <p>Description of your role and achievements</p>
                </div>
                <div className="timeline-middle">
                    <div className="timeline-circle"></div>
                </div>
                <div className="timeline-empty"></div>
            </div>
        </section>
    );
}

export default TimeLine;
