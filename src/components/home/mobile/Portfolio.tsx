function Portfolio() {
    return (
        <div id="Portfolio" className="body">
            <h2 className="list" data-aos="fade-up">
                Portfolio
            </h2>
            <h3 className="click-card" data-aos="fade-up">
                Click the Card to see the detail.
            </h3>

            <div className="container" data-aos="fade-up">
                <a
                    href="https://todaylunch.vercel.app"
                    target="_blank"
                    title="TodayLunch"
                    className="spec"
                >
                    <div className="mobile-card-container">
                        <div className="column-center">
                            <img
                                loading="lazy"
                                src="img/todaylunch.png"
                                className="card-img"
                            />
                            <span className="card-title">
                                <strong> TodayLunch</strong>
                            </span>
                        </div>
                        <div className="card-text">
                            <span className="roadmap-element">
                                Operating <strong>TodayLunch</strong>
                                <br />
                                Web Page & Instagram Account,
                                <br />
                                which informs school meal.
                            </span>
                            <div className="card-footer">
                                <strong>
                                    <br />
                                    24. 04. 11~
                                </strong>
                            </div>
                        </div>
                    </div>
                </a>

                <a
                    href="https://gmsh.kr"
                    target="_blank"
                    title="RoadMap"
                    className="spec"
                >
                    <div className="mobile-card-container">
                        <div className="column-center">
                            <img
                                loading="lazy"
                                src="img/road-map.png"
                                className="card-img"
                            />
                            <span className="card-title">
                                <strong>RoadMap</strong>
                            </span>
                        </div>
                        <div className="card-text">
                            <span className="roadmap-element">
                                Operating <strong>RoadMap</strong>
                                ,
                                <br />
                                which is Web Development Club
                                <br />
                                of my school.
                            </span>
                            <div className="card-footer">
                                <strong>
                                    <br />
                                    24. 03. 08~
                                </strong>
                            </div>
                        </div>
                    </div>
                </a>

                <span className="spec">
                    <div className="mobile-card-container">
                        <div className="column-center">
                            <img
                                loading="lazy"
                                src="img/ileonang.png"
                                className="card-img"
                            />
                            <span className="card-title">
                                <strong>Ileonang</strong>
                            </span>
                        </div>
                        <div className="card-text">
                            <span className="ileonang-element">
                                Made an <strong>Alarm App</strong>, which wakes
                                up user by sending
                                <br />
                                risky message to someone.
                            </span>
                            <div className="card-footer">
                                <br />
                                <strong>24. 02. 17 ~ 24. 02. 18.</strong>
                            </div>
                        </div>
                    </div>
                </span>

                <a
                    href="/qr"
                    target="_blank"
                    title="QR Crafter"
                    className="spec"
                >
                    <div className="mobile-card-container">
                        <div className="column-center">
                            <img
                                loading="lazy"
                                src="img/link.png"
                                className="card-img"
                            />
                            <span className="card-title">
                                <strong>QR Crafter</strong>
                            </span>
                        </div>
                        <div className="card-text">
                            <span className="qr-element">
                                Making a{" "}
                                <strong>QR Code Generate Service</strong>, which
                                generates
                                <br />& downloads QR Code.
                            </span>
                            <div className="card-footer">
                                <strong>
                                    <br />
                                    23. 12. 08~
                                </strong>
                            </div>
                        </div>
                    </div>
                </a>

                <a
                    href="/converter"
                    target="_blank"
                    title="Dynamic Converter"
                    className="spec"
                >
                    <div className="mobile-card-container">
                        <div className="column-center">
                            <img
                                loading="lazy"
                                src="img/converter.png"
                                className="card-img"
                            />
                            <span className="card-title converter">
                                <strong>Dynamic Converter</strong>
                            </span>
                        </div>
                        <div className="card-text">
                            <span className="converter-element">
                                Making an{" "}
                                <strong>
                                    Exchange Rate Conversion Service
                                </strong>
                                ,
                                <br />
                                which calculates by the actual
                                <br />
                                Exchange Rate.
                            </span>
                            <div className="card-footer">
                                <strong>
                                    <br />
                                    23. 12. 02~
                                </strong>
                            </div>
                        </div>
                    </div>
                </a>

                <a
                    href="https://gmsh.kr"
                    target="_blank"
                    title="RoadMap"
                    className="spec"
                >
                    <div className="mobile-card-container">
                        <div className="column-center">
                            <img
                                loading="lazy"
                                src="img/Promise.webp"
                                className="card-img"
                            />
                            <span className="card-title">
                                <strong>Promise</strong>
                            </span>
                        </div>
                        <div className="card-text">
                            Made a official Web Page of <strong>Promise</strong>
                            , which was
                            <br />
                            Web Development Club
                            <br />
                            of my high school.
                            <div className="card-footer">
                                <strong>
                                    <br />
                                    23. 11. 06 ~ 24. 03. 07.
                                </strong>
                            </div>
                        </div>
                    </div>
                </a>

                <a
                    href="/machim"
                    target="_blank"
                    title=".마침이"
                    className="spec"
                >
                    <div className="mobile-card-container">
                        <div className="column-center">
                            <img
                                loading="lazy"
                                src="img/Machim.png"
                                className="card-img"
                            />
                            <span className="card-title">
                                <strong>.마침이</strong>
                            </span>
                        </div>
                        <div className="card-text">
                            Making My Own <strong>Discord Bot</strong>,
                            <br /> which has server management
                            <br />& utility features.
                            <div className="card-footer">
                                <strong>
                                    <br />
                                    21. 02. 07~
                                </strong>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Portfolio;
