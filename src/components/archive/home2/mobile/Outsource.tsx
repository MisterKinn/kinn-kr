import "@/styles/home/portfolio.css";

export default function Outsource() {
    return (
        <div className="m-portfolio-3d">
            <h2 id="m-list" data-aos="fade-up">
                Outsource
            </h2>
            <h3 id="m-explain" data-aos="fade-up">
                Building extraordinary outsourcing
                <br />
                results that pleases the clients.
                <br />
                Click the card to see the detail.
            </h3>

            <div className="m-portfolio-grid">
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
                        <div className="m-card-info" id="compressed">
                            <h3>Nova Law Firm</h3>
                            <p>
                                Made Official Web Page of NovaLaw,
                                <br />
                                which is Law Firm in Incheon, Songdo.
                            </p>
                            <span className="m-date">24. 07. 11.</span>
                        </div>
                    </div>
                </a>
            </div>

            <div className="m-blank"></div>
        </div>
    );
}
