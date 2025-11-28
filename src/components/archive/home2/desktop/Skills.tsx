"use client";

import { useEffect, useState } from "react";
import "@/styles/home/skills.css";
import MobileSkills from "@/components/archive/home2/mobile/Skills";

function Skills() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const updateIsMobile = () => setIsMobile(window.innerWidth <= 900);

        updateIsMobile();
        window.addEventListener("resize", updateIsMobile);
        return () => window.removeEventListener("resize", updateIsMobile);
    }, []);

    if (isMobile) {
        return <MobileSkills />;
    }

    return (
        <div className="desktop-skills">
            <h2 id="list" data-aos="fade-up">
                Skills
            </h2>
            <h3 id="explain" data-aos="fade-up">
                Creating immersive web experiences with cutting-edge
                technologies.
            </h3>
            <div className="container" data-aos="fade-up">
                <div className="spec2">
                    <div className="card-container2">
                        <div>
                            <div className="column-center">
                                <img
                                    loading="lazy"
                                    src="img/html.png"
                                    className="card-img2"
                                />
                                <span className="card-title2">
                                    <strong>HTML</strong>
                                </span>
                            </div>
                            <div className="card-footer2">
                                <strong>
                                    <br />
                                    20. 07. 09~
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="spec2">
                    <div className="card-container2">
                        <div>
                            <div className="column-center">
                                <img
                                    loading="lazy"
                                    src="img/css.png"
                                    className="card-img2"
                                />
                                <span className="card-title2">
                                    <strong>CSS</strong>
                                </span>
                            </div>
                            <div className="card-footer2">
                                <strong>
                                    <br />
                                    20. 08. 16~
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="spec2">
                    <div className="card-container2">
                        <div>
                            <div className="column-center">
                                <img
                                    loading="lazy"
                                    src="img/js.png"
                                    className="card-img2"
                                />
                                <span className="card-title2">
                                    <strong>JavaScript</strong>
                                </span>
                            </div>
                            <div className="card-footer2">
                                <strong>
                                    <br />
                                    21. 01. 13~
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" data-aos="fade-up">
                <div className="spec2">
                    <div className="card-container2">
                        <div>
                            <div className="column-center">
                                <img
                                    loading="lazy"
                                    src="img/React.png"
                                    className="card-img2"
                                />
                                <span className="card-title2">
                                    <strong>React</strong>
                                </span>
                            </div>
                            <div className="card-footer2">
                                <strong>
                                    <br />
                                    23. 05. 12~
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="spec2">
                    <div className="card-container2">
                        <div>
                            <div className="column-center">
                                <img
                                    loading="lazy"
                                    src="img/Nextjs.png"
                                    className="card-img2"
                                />
                                <span className="card-title2">
                                    <strong>Next.js</strong>
                                </span>
                            </div>
                            <div className="card-footer2">
                                <strong>
                                    <br />
                                    24. 02. 17~
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blank"></div>
        </div>
    );
}

export default Skills;
