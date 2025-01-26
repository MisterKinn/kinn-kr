import "../../../styles/home/desktop/experience.css";

function Experience() {
    return (
        <div id="Experience" data-aos="fade-up">
            <h2 id="list">Experience</h2>
            <h3 id="explain">
                Learn and grow through invaluable opportunity.
                <br />
                Click the card to see the detail.
            </h3>

            <div className="container">
                <a
                    href="/highthon"
                    target="_blank"
                    title="Highthon"
                    className="spec"
                >
                    <div className="card-container" data-aos="fade-up">
                        <div className="column-center">
                            <img
                                loading="lazy"
                                src="img/trophy.png"
                                className="card-img"
                            />
                            <span className="card-title">
                                <strong>Highthon</strong>
                            </span>
                        </div>
                        <div className="card-text">
                            <span className="highthon-element">
                                Got a <strong>Grand Prize</strong> at{" "}
                                <strong>Highthon</strong>,
                                <br />
                                which is hackathon of high school student.
                            </span>
                            <div className="card-footer">
                                <strong>
                                    <br />
                                    24. 02. 17~24. 02. 18.
                                </strong>
                            </div>
                        </div>

                        <div className="overlay">
                            <span>
                                Click the Card
                                <br />
                                to learn more
                                <br />
                                about Highthon
                            </span>
                        </div>
                    </div>
                </a>
            </div>

            <div className="blank"></div>
        </div>
    );
}

export default Experience;
