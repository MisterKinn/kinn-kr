import { useEffect } from "react";
import "../../styles/style.css";
import { handlePortfolio } from "../../app/handleText.js";
import AOS from "aos";
import "../../styles/aos.css";

function Portfolio() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    useEffect(() => {
        handlePortfolio();

        if (window.performance) {
            if (performance.navigation.type === 1) {
                // Detect Refresh
                handlePortfolio();
            }
        }
        window.addEventListener("resize", handlePortfolio);

        return () => {
            window.removeEventListener("resize", handlePortfolio);
        };
    });

    return (
        <div id="Portfolio" className="body">
            <h2 className="list" data-aos="fade-up">
                Portfolio
            </h2>

            <div className="container" data-aos="fade-up">
                <a
                    href="https://gmsh.kr"
                    target="_blank"
                    title="RoadMap"
                    className="spec"
                >
                    <div className="card-container">
                        <div>
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
                                which is Web Club of my high school.
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

                <a href=" " target="_blank" title="Ileonang" className="spec">
                    <div className="card-container">
                        <div>
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
                                up user
                                <br /> by sending risky message to someone.
                            </span>
                            <div className="card-footer">
                                <br />
                                <strong>24. 02. 17 ~ 24. 02. 18.</strong>
                            </div>
                        </div>
                    </div>
                </a>

                <a
                    href="/qr"
                    target="_blank"
                    title="QR Crafter"
                    className="spec"
                >
                    <div className="card-container">
                        <div>
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
                                <strong>QR Code Generate Service</strong>
                                ,
                                <br />
                                which generates & downloads QR Code.
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
                    <div className="card-container">
                        <div>
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
                                Making an
                                <strong>
                                    Exchange Rate Conversion Service
                                </strong>
                                ,
                                <br />
                                which calculates by the actual Exchange Rate.
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
                    <div className="card-container">
                        <div>
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
                            Made a official Web Page <strong>Promise</strong>
                            ,
                            <br />
                            which was Web Club of my high school.
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
                    <div className="card-container">
                        <div>
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
                            <br />
                            <strong>[ .마침이 ]</strong>.
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
