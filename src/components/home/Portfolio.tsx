import "@/styles/home/desktop/portfolio.css";

function Portfolio() {
    return (
        <div id="Portfolio" className="portfolio-3d">
            <h2 id="list" data-aos="fade-up">
                Portfolio
            </h2>
            <h3 id="explain" data-aos="fade-up">
                Crafting innovative and user-centric Frontend Web projects,
                <br />
                transforming creative ideas into seamless and captivating
                digital experiences which leave a lasting impression.
                <br />
                Click the card to see the detail.
            </h3>

            <div className="portfolio-grid" data-aos="fade-up">
                <a href="/uxinsight" target="_blank" className="portfolio-item">
                    <div className="portfolio-card">
                        <div className="card-preview-small">
                            <img
                                loading="lazy"
                                src="img/ux.png"
                                alt="UX Insight Preview"
                            />
                        </div>
                        <div className="card-info" id="compressed">
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
                    href="https://novalaw.kr"
                    target="_blank"
                    title="Nova Law Firm"
                    className="portfolio-item"
                >
                    <div className="portfolio-card">
                        <div className="card-preview">
                            <img
                                loading="lazy"
                                src="img/novalaw.jpg"
                                alt="Nova Law Firm Preview"
                            />
                        </div>
                        <div className="card-info">
                            <h3>Nova Law Firm</h3>
                            <p>
                                Made Official Web Page of NovaLaw,
                                <br />
                                which is Law Firm in Incheon, Songdo.
                            </p>
                            <span className="date">24. 07. 11~</span>
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
                                Operating RoadMap, which is
                                <br />
                                Web Development Circle of my high school.
                            </p>
                            <span className="date">24. 03. 08~</span>
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
        </div>
    );
}

export default Portfolio;
