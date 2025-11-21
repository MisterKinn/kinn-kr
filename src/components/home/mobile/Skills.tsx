import "@/styles/home/skills.css";

function MobileSkills() {
    return (
        <div id="Skills" className="mobile-skills" data-aos="fade-up">
            <h2 id="m-list">Skills</h2>
            <h3 id="m-explain">
                Creating immersive web experiences
                <br />
                with cutting-edge technologies.
            </h3>

            <div className="m-container2">
                <div className="m-spec">
                    <div className="m-card-container2">
                        <div className="m-column-center">
                            <div className="m-icon-title-group">
                                <img
                                    loading="lazy"
                                    src="img/html.png"
                                    className="m-card-img"
                                />
                                <span className="m-card-title">
                                    <strong>HTML</strong>
                                </span>
                            </div>
                            <div className="m-card-footer">
                                <strong>20. 07. 09~</strong>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="m-spec">
                    <div className="m-card-container2">
                        <div className="m-column-center">
                            <div className="m-icon-title-group">
                                <img
                                    loading="lazy"
                                    src="img/css.png"
                                    className="m-card-img"
                                />
                                <span className="m-card-title">
                                    <strong>CSS</strong>
                                </span>
                            </div>
                            <div className="m-card-footer">
                                <strong>20. 08. 16~</strong>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="m-spec">
                    <div className="m-card-container2">
                        <div className="m-column-center">
                            <div className="m-icon-title-group">
                                <img
                                    loading="lazy"
                                    src="img/js.png"
                                    className="m-card-img"
                                />
                                <span className="m-card-title">
                                    <strong>JavaScript</strong>
                                </span>
                            </div>
                            <div className="m-card-footer">
                                <strong>21. 01. 13~</strong>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="m-spec">
                    <div className="m-card-container2">
                        <div className="m-column-center">
                            <div className="m-icon-title-group">
                                <img
                                    loading="lazy"
                                    src="img/React.png"
                                    className="m-card-img"
                                />
                                <span className="m-card-title">
                                    <strong>React</strong>
                                </span>
                            </div>
                            <div className="m-card-footer">
                                <strong>23. 05. 12~</strong>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="m-spec">
                    <div className="m-card-container2">
                        <div className="m-column-center">
                            <div className="m-icon-title-group">
                                <img
                                    loading="lazy"
                                    src="img/Nextjs.png"
                                    className="m-card-img"
                                />
                                <span className="m-card-title">
                                    <strong>Next.js</strong>
                                </span>
                            </div>
                            <div className="m-card-footer">
                                <strong>24. 02. 17~</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MobileSkills;
