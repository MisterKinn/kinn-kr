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
                <div className="portfolio-card2"></div>

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
                            <span className="date">24. 07. 11.</span>
                        </div>
                    </div>
                </a>

                <div className="portfolio-card2"></div>
            </div>

            <div className="blank"></div>
        </div>
    );
}
