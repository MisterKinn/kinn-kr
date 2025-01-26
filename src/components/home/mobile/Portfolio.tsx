import "../../../styles/home/mobile/portfolio.css";

function Portfolio() {
    return (
        <div id="Portfolio" className="m-portfolio-3d">
            <h2 id="m-list" data-aos="fade-up">
                Portfolio
            </h2>
            <h3 id="m-explain" data-aos="fade-up">
                Crafting innovative and user-centric
                <br />
                Frontend Web projects,
                <br />
                transforming creative ideas into
                <br />
                seamless and captivating
                <br />
                digital experiences
                <br />
                which leave a lasting impression.
                <br />
                Click the card to see the detail.
            </h3>

            <div className="m-portfolio-grid">
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
                                Making a Web UX Analyze service which dissects
                                Web Page and gives feedback.
                            </p>
                            <span className="m-date">24. 10. 20~</span>
                        </div>
                    </div>
                </a>

                <a
                    href="https://novalaw.kr"
                    target="_blank"
                    title="Nova Law Firm"
                    className="m-portfolio-item"
                >
                    <div className="m-portfolio-card" data-aos="fade-up">
                        <div className="m-card-preview">
                            <img
                                loading="lazy"
                                src="img/novalaw.jpg"
                                alt="Nova Law Firm Preview"
                            />
                        </div>
                        <div className="m-card-info">
                            <h3>Nova Law Firm</h3>
                            <p>
                                Made Official Web Page of NovaLaw, which is Law
                                Firm in Incheon, Songdo.
                            </p>
                            <span className="m-date">24. 07. 11~</span>
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
                                Operating TodayLunch Web Page & Instagram
                                Account, which informs school meal.
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
                                Operating RoadMap, which is Web Development
                                Circle of my school.
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
                                Making a QR Code Generate Service, which
                                generates & downloads QR Code.
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
                                Making My Own Discord Bot, which has server
                                management & utility features.
                            </p>
                            <span className="m-date">21. 02. 07~</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Portfolio;
