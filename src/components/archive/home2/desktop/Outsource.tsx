import "@/styles/home/portfolio.css";

export default function Outsource() {
    return (
        <div data-aos="fade-up">
            <h2 id="list">Outsource</h2>
            <h3 id="explain">
                Building extraordinary outsourcing results that pleases the
                clients.
                <br />
                Click the card to see the detail.
            </h3>

            <div className="portfolio-grid" data-aos="fade-up">
                <a
                    href="#"
                    target="_blank"
                    title="DongDong Service"
                    className="portfolio-item outsource-item"
                >
                    <div className="portfolio-card">
                        <div className="card-preview outsource-preview">
                            <img
                                loading="lazy"
                                src="img/dongdong.png"
                                alt="DongDong Service Preview"
                            />
                        </div>
                        <div className="card-info">
                            <h3>Accompany Service</h3>
                            <p>
                                Made Frontend part of 동반자동행 app,
                                <br />
                                which is an accompany service for seniors.
                            </p>
                            <span className="date">
                                25. 12. 20. - 25. 12. 29.
                            </span>
                        </div>
                    </div>
                </a>

                <a
                    href="https://uhak.prego.im"
                    target="_blank"
                    title="Prego Abroad"
                    className="portfolio-item outsource-item"
                >
                    <div className="portfolio-card">
                        <div className="card-preview outsource-preview">
                            <img
                                loading="lazy"
                                src="img/prego.png"
                                alt="Prego Abroad Preview"
                            />
                        </div>
                        <div className="card-info">
                            <h3>Prego Abroad</h3>
                            <p>
                                Made Official Web Page of Prego Abroad,
                                <br />
                                which is an overseas education consulting
                                service.
                            </p>
                            <span className="date">
                                25. 11. 21. - 26. 01. 12.
                            </span>
                        </div>
                    </div>
                </a>

                <a
                    href="https://novalaw.kr"
                    target="_blank"
                    title="Nova Law Firm"
                    className="portfolio-item outsource-item"
                >
                    <div className="portfolio-card">
                        <div className="card-preview outsource-preview">
                            <img
                                loading="lazy"
                                src="img/novalaw.png"
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
                            <span className="date">24. 07. 11.</span>
                        </div>
                    </div>
                </a>
            </div>

            <div className="blank"></div>
        </div>
    );
}
