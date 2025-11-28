import "@/styles/home/portfolio.css";

function Portfolio() {
    return (
        <div id="Portfolio" className="m-portfolio-3d">
            <h2 id="m-list" data-aos="fade-up">
                Portfolio
            </h2>
            <h3 id="m-explain" data-aos="fade-up">
                Crafting impactful Frontend projects
                <br />
                that deliver ecstatic experience
                <br />
                for lasting impressions.
                <br />
                Click the card to try captivating project.
            </h3>

            <div className="m-portfolio-grid">
                <a
                    href="/f1strategy"
                    target="_blank"
                    className="m-portfolio-item"
                >
                    <div className="m-portfolio-card" data-aos="fade-up">
                        <div className="m-card-preview-small">
                            <img
                                loading="lazy"
                                src="img/f1-logo.png"
                                alt="F1 Strategy Explorer"
                                id="m-compressed"
                            />
                        </div>
                        <div className="m-card-info">
                            <h3>F1 Strategy Explorer</h3>
                            <p>
                                Making a Formula 1 Tire Strategy Simulter
                                <br />
                                which rates user's race tire strategy.
                            </p>
                            <span className="m-date">25. 07. 15~</span>
                        </div>
                    </div>
                </a>

                <a
                    href="/unimatch"
                    target="_blank"
                    className="m-portfolio-item"
                >
                    <div className="m-portfolio-card" data-aos="fade-up">
                        <div className="m-card-preview-small">
                            <img
                                loading="lazy"
                                src="img/unimatch.png"
                                alt="UniMatch"
                            />
                        </div>
                        <div className="m-card-info" id="compressed">
                            <h3>UniMatch</h3>
                            <p>
                                Making an University Suggestion Service
                                <br />
                                for High School Students
                                <br />
                                based on Korean SAT scores.
                            </p>
                            <span className="m-date">25. 03.24~</span>
                        </div>
                    </div>
                </a>

                <a
                    href="/uxinsight"
                    target="_blank"
                    className="m-portfolio-item"
                >
                    <div className="m-portfolio-card" data-aos="fade-up">
                        <div className="m-card-preview-small">
                            <img
                                loading="lazy"
                                src="img/uxinsight_square.png"
                                alt="UX Insight Preview"
                            />
                        </div>
                        <div className="m-card-info" id="compressed">
                            <h3>UX Insight</h3>
                            <p>
                                Making a Web UX Analyze service
                                <br />
                                which dissects Web Page
                                <br />
                                and gives feedback.
                            </p>
                            <span className="m-date">24. 10. 20~</span>
                        </div>
                    </div>
                </a>

                <a
                    href="https://todaylun.ch"
                    target="_blank"
                    title="TodayLunch"
                    className="m-portfolio-item"
                >
                    <div className="m-portfolio-card" data-aos="fade-up">
                        <div className="m-card-preview">
                            <img
                                loading="lazy"
                                src="img/todaylunch.png"
                                alt="TodayLunch Preview"
                            />
                        </div>
                        <div className="m-card-info">
                            <h3>TodayLunch</h3>
                            <p>
                                Operating TodayLunch
                                <br />
                                Web Page & Instagram Account,
                                <br />
                                which informs school meal.
                            </p>
                            <span className="m-date">24. 04. 11~</span>
                        </div>
                    </div>
                </a>

                <a
                    href="https://gmsh.kr"
                    target="_blank"
                    title="RoadMap"
                    className="m-portfolio-item"
                >
                    <div className="m-portfolio-card" data-aos="fade-up">
                        <div className="m-card-preview-small">
                            <img
                                loading="lazy"
                                src="img/roadmap_square.png"
                                alt="RoadMap Preview"
                            />
                        </div>
                        <div className="m-card-info">
                            <h3>RoadMap</h3>
                            <p>
                                Operating RoadMap, which is
                                <br />
                                Web Development Circle
                                <br />
                                of my high school.
                            </p>
                            <span className="m-date">24. 03. 08~</span>
                        </div>
                    </div>
                </a>

                <a
                    href="/qr"
                    target="_blank"
                    title="QR Crafter"
                    className="m-portfolio-item"
                >
                    <div className="m-portfolio-card" data-aos="fade-up">
                        <div className="m-card-preview-small">
                            <img
                                loading="lazy"
                                src="img/qr_square.png"
                                alt="QR Crafter Preview"
                            />
                        </div>
                        <div className="m-card-info">
                            <h3>QR Crafter</h3>
                            <p>
                                Making a QR Code Generate Service,
                                <br />
                                which generates & downloads
                                <br />
                                QR Code.
                            </p>
                            <span className="m-date">23. 12. 08~</span>
                        </div>
                    </div>
                </a>

                <a
                    href="/machim"
                    target="_blank"
                    title="Machim"
                    className="m-portfolio-item"
                >
                    <div className="m-portfolio-card" data-aos="fade-up">
                        <div className="m-card-preview-small">
                            <img
                                loading="lazy"
                                src="img/machim_square.png"
                                alt="Machim Preview"
                            />
                        </div>
                        <div className="m-card-info">
                            <h3>Machim</h3>
                            <p>
                                Making My Own Discord Bot,
                                <br />
                                which has server management
                                <br />& utility features.
                            </p>
                            <span className="m-date">21. 02. 07~</span>
                        </div>
                    </div>
                </a>
            </div>

            <div className="blank"></div>
        </div>
    );
}

export default Portfolio;
