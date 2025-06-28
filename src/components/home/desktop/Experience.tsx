import "../../../styles/home/desktop/experience.css";

function Experience() {
    return (
        <div id="Experience">
            <div className="experience-header">
                <h2 id="list" data-aos="fade-up">
                    Experience
                </h2>
                <h3 id="explain" data-aos="fade-up">
                    Explore my journey of learning and growth through key
                    opportunities.
                    <br />
                    Click an entry to see the details.
                </h3>
            </div>

            <div className="page-container">
                <div className="content-wrapper">
                    <div className="timeline">
                        <div className="timeline-year" data-aos="fade-up">
                            2021
                        </div>
                        <div className="timeline-item" data-aos="fade-up">
                            <div className="timeline-marker"></div>
                            <a
                                href="experience/education"
                                target="_blank"
                                title="Gifted Education Center"
                                className="timeline-content"
                            >
                                <div className="experience-glow"></div>
                                <div className="timeline-header">
                                    <img
                                        loading="lazy"
                                        src="img/education.png"
                                        className="timeline-img"
                                    />
                                    <span className="experience-title">
                                        Gifted Education Center
                                    </span>
                                </div>
                                <div className="timeline-text">
                                    <span className="experience-description">
                                        Graduted a{" "}
                                        <strong>Gifted Education Center</strong>
                                        <br />
                                        hosted by Gyeonggi Goyang Office of
                                        Education.
                                    </span>
                                    <div className="experience-meta">
                                        <span>21. 09. 17 - 21. 11. 01</span>
                                        <span>Education</span>
                                    </div>
                                </div>
                                <div className="overlay">
                                    <span>
                                        Click to learn more about
                                        <br />
                                        Gifted Education Center
                                    </span>
                                </div>
                            </a>
                        </div>

                        <div className="timeline-year" data-aos="fade-up">
                            2024
                        </div>
                        <div className="timeline-item" data-aos="fade-up">
                            <div className="timeline-marker"></div>
                            <a
                                href="experience/highthon"
                                target="_blank"
                                title="Highthon"
                                className="timeline-content"
                            >
                                <div className="experience-glow"></div>
                                <div className="timeline-header">
                                    <img
                                        loading="lazy"
                                        src="img/trophy.png"
                                        className="timeline-img"
                                    />
                                    <span className="experience-title">
                                        Highthon
                                    </span>
                                </div>
                                <div className="timeline-text">
                                    <span className="experience-description">
                                        Secured a <strong>Grand Prize</strong>{" "}
                                        at <strong>Highthon</strong>,
                                        <br />a prestigious hackathon for high
                                        school students.
                                    </span>
                                    <div className="experience-meta">
                                        <span>24. 02. 17 - 24. 02. 18</span>
                                        <span>Hackathon</span>
                                    </div>
                                </div>
                                <div className="overlay">
                                    <span>
                                        Click to learn more about Highthon
                                    </span>
                                </div>
                            </a>
                        </div>

                        <div className="timeline-item" data-aos="fade-up">
                            <div className="timeline-marker"></div>
                            <a
                                href="https://gmsh.kr"
                                target="_blank"
                                title="RoadMap"
                                className="timeline-content"
                            >
                                <div className="experience-glow"></div>
                                <div className="timeline-header">
                                    <img
                                        loading="lazy"
                                        src="img/road-map.png"
                                        className="timeline-img"
                                    />
                                    <span className="experience-title">
                                        RoadMap
                                    </span>
                                </div>
                                <div className="timeline-text">
                                    <span className="experience-description">
                                        Founded and Operating{" "}
                                        <strong>RoadMap</strong>, which is
                                        <br />
                                        Web Development Circle of my high
                                        school.
                                    </span>
                                    <div className="experience-meta">
                                        <span>24. 03. 08 ~ </span>
                                        <span>Circle</span>
                                    </div>
                                </div>
                                <div className="overlay">
                                    <span>
                                        Click to learn more about RoadMap
                                    </span>
                                </div>
                            </a>
                        </div>

                        <div className="timeline-item" data-aos="fade-up">
                            <div className="timeline-marker"></div>
                            <a
                                href="experience/novalaw"
                                target="_blank"
                                title="NovaLaw Outsource"
                                className="timeline-content"
                            >
                                <div className="experience-glow"></div>
                                <div className="timeline-header">
                                    <img
                                        loading="lazy"
                                        src="img/outsource.png"
                                        className="timeline-img"
                                    />
                                    <span className="experience-title">
                                        NovaLaw Outsource
                                    </span>
                                </div>
                                <div className="timeline-text">
                                    <span className="experience-description">
                                        Made Official Web Page of{" "}
                                        <strong>NovaLaw</strong>,
                                        <br />
                                        which is Law firm in Incheon, Songdo.
                                    </span>
                                    <div className="experience-meta">
                                        <span>24. 03. 31 - 24. 08. 13</span>
                                        <span>Outsource</span>
                                    </div>
                                </div>
                                <div className="overlay">
                                    <span>
                                        Click to learn more about
                                        <br />
                                        NovaLaw Outsource
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
