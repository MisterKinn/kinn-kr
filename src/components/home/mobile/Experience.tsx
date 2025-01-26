import "../../../styles/home/mobile/experience.css";

function MobileExperience() {
    return (
        <div id="Experience" data-aos="fade-up">
            <h2 id="m-list">Experience</h2>
            <h3 id="m-explain">
                Learn and grow
                <br />
                through invaluable opportunity.
                <br />
                Click the card to see the detail.
            </h3>

            <div className="m-container">
                <a
                    href="/highthon"
                    target="_blank"
                    title="Highthon"
                    className="m-spec"
                >
                    <div className="m-card-container">
                        <div className="m-column-center">
                            <img
                                loading="lazy"
                                src="img/trophy.png"
                                className="m-card-img"
                            />
                            <span className="m-card-title">
                                <strong>Highthon</strong>
                            </span>
                        </div>
                        <div className="m-card-text">
                            <span className="m-highthon-element">
                                Got a <strong>Grand Prize</strong> at{" "}
                                <strong>Highthon</strong>,<br />
                                which is hackathon
                                <br />
                                of high school student.
                            </span>
                            <div className="m-card-footer">
                                <strong>24. 02. 17~24. 02. 18.</strong>
                            </div>
                        </div>

                        <div className="m-overlay">
                            <span>
                                Click the Card
                                <br />
                                to learn more about Highthon
                            </span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default MobileExperience;
