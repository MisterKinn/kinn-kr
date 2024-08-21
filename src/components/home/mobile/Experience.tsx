function Experience() {
    return (
        <div id="Experience">
            <h2 className="mobile-list" data-aos="fade-up">
                Experience
            </h2>

            <div className="container">
                <a
                    href="https://www.instagram.com/p/C3fgDCfyijL/?img_index=1"
                    target="_blank"
                    title="Ileonang"
                    className="spec"
                >
                    <div className="mobile-card-container" data-aos="fade-up">
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
                                which is hackathon
                                <br />
                                of high school student.
                            </span>
                            <div className="card-footer">
                                <strong>
                                    <br />
                                    24. 02. 17~24. 02. 18.
                                </strong>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Experience;
