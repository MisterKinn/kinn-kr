import "@/styles/home/portfolio.css";

function Portfolio() {
    return (
        <div className="portfolio-3d">
            <h2 id="list" data-aos="fade-up">
                Portfolio
            </h2>
            <h3 id="explain" data-aos="fade-up">
                Crafting impactful Frontend projects that deliver ecstatic
                experience for lasting impressions.
                <br />
                Click the card to try captivating project.
            </h3>

            <div className="portfolio-grid" data-aos="fade-up">
                <a
                    href="/f1strategy"
                    target="_blank"
                    className="portfolio-item"
                >
                    <div className="portfolio-card">
                        <div className="card-preview-small">
                            <img
                                loading="lazy"
                                src="img/f1-logo.png"
                                alt="F1 Strategy Explorer"
                                id="compressed"
                            />
                        </div>
                        <div className="card-info">
                            <h3>F1 Strategy Explorer</h3>
                            <p>
                                Making a Formula 1 Tire Strategy Simulter
                                <br />
                                which rates user's race tire strategy.
                            </p>
                            <span className="date">25. 07. 15~</span>
                        </div>
                    </div>
                </a>

                <a href="/unimatch" target="_blank" className="portfolio-item">
                    <div className="portfolio-card">
                        <div className="card-preview-small">
                            <img
                                loading="lazy"
                                src="img/unimatch.png"
                                alt="UniMatch"
                            />
                        </div>
                        <div className="card-info">
                            <h3>UniMatch</h3>
                            <p>
                                Making an University Suggestion Service
                                <br />
                                for High School Students based on SAT scores.
                            </p>
                            <span className="date">25. 03.24~</span>
                        </div>
                    </div>
                </a>

                <a href="/uxinsight" target="_blank" className="portfolio-item">
                    <div className="portfolio-card">
                        <div className="card-preview-small">
                            <img
                                loading="lazy"
                                src="img/ux.png"
                                alt="UX Insight"
                            />
                        </div>
                        <div className="card-info">
                            <h3>UX Insight</h3>
                            <p>
                                Making a Web UX Analyze service
                                <br />
                                which dissects Web Page and gives feedback.
                            </p>
                            <span className="date">24. 10. 20~</span>
                        </div>
                    </div>
                </a>

                <a
                    href="https://todaylun.ch"
                    target="_blank"
                    title="TodayLunch"
                    className="portfolio-item"
                >
                    <div className="portfolio-card">
                        <div className="card-preview">
                            <img
                                loading="lazy"
                                src="img/todaylunch.png"
                                alt="TodayLunch Preview"
                            />
                        </div>
                        <div className="card-info">
                            <h3>TodayLunch</h3>
                            <p>
                                Operating TodayLunch Web Page & Instagram
                                Account, which informs school meal.
                            </p>
                            <span className="date">24. 04. 11~</span>
                        </div>
                    </div>
                </a>

                <a
                    href="https://gmsh.kr"
                    target="_blank"
                    title="RoadMap"
                    className="portfolio-item"
                >
                    <div className="portfolio-card">
                        <div className="card-preview-small">
                            <img
                                loading="lazy"
                                src="img/road-map.png"
                                alt="RoadMap Preview"
                            />
                        </div>
                        <div className="card-info">
                            <h3>RoadMap</h3>
                            <p>
                                Founded and Operated RoadMap, which was
                                <br />
                                Web Development Circle of my high school.
                            </p>
                            <span className="date">24. 03. 08 - 25.11.23.</span>
                        </div>
                    </div>
                </a>

                <a
                    href="/qr"
                    target="_blank"
                    title="QR Crafter"
                    className="portfolio-item"
                >
                    <div className="portfolio-card">
                        <div className="card-preview-small">
                            <img
                                loading="lazy"
                                src="img/link.png"
                                alt="QR Crafter Preview"
                            />
                        </div>
                        <div className="card-info">
                            <h3>QR Crafter</h3>
                            <p>
                                Making a QR Code Generate Service,
                                <br />
                                which generates & downloads QR Code.
                            </p>
                            <span className="date">23. 12. 08~</span>
                        </div>
                    </div>
                </a>

                <a
                    href="/machim"
                    target="_blank"
                    title="Machim"
                    className="portfolio-item"
                >
                    <div className="portfolio-card">
                        <div className="card-preview-small2">
                            <img
                                loading="lazy"
                                src="img/Machim.png"
                                alt="Machim Preview"
                            />
                        </div>
                        <div className="card-info">
                            <h3>Machim</h3>
                            <p>
                                Making My Own Discord Bot, which has
                                <br />
                                server management & utility features.
                            </p>
                            <span className="date">21. 02. 07~</span>
                        </div>
                    </div>
                </a>
            </div>

            <div className="blank"></div>
        </div>
    );
}

export default Portfolio;
