function Utility() {
    return (
        <div id="Utility">
            <h2 className="mobile-list" data-aos="fade-up">
                UTILITY
            </h2>
            <div className="container" data-aos="fade-up">
                <div className="spec">
                    <div className="mobile-card-container">
                        <div>
                            <div className="column-center">
                                <img src="img/help.png" className="card-img" />
                                <span className="card-title">
                                    <strong>Help</strong>
                                </span>
                            </div>
                        </div>
                        <div className="mobile-card-text">
                            You can use with <span className="white">[ /help ]</span>,
                            <br />
                            Machim prints the instructions!
                        </div>
                    </div>
                </div>

                <div className="spec">
                    <div className="mobile-card-container">
                        <div>
                            <div className="column-center">
                                <img src="img/ping.png" className="card-img" />
                                <span className="card-title">
                                    <strong>Ping</strong>
                                </span>
                            </div>
                        </div>
                        <div className="mobile-card-text">
                            You can use with <span className="white">[ /ping ]</span>,
                            <br />
                            Machim prints its latency!
                        </div>
                    </div>
                </div>

                <div className="spec">
                    <div className="mobile-card-container">
                        <div>
                            <div className="column-center">
                                <img
                                    src="img/information.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong>Information</strong>
                                </span>
                            </div>
                        </div>
                        <div className="mobile-card-text">
                            You can use with <span className="white">[ /info ]</span>,
                            <br />
                            Machim prints the info of user!
                        </div>
                    </div>
                </div>

                <div className="spec">
                    <div className="mobile-card-container">
                        <div>
                            <div className="column-center">
                                <img
                                    src="img/support.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong>Support</strong>
                                </span>
                            </div>
                        </div>
                        <div className="mobile-card-text">
                            You can use with <span className="white">[ /support ]</span>,
                            <br />
                            Machim prints its support Web,
                            <br />
                            official server and invitation link!
                        </div>
                    </div>
                </div>

                <div className="spec">
                    <div className="mobile-card-container">
                        <div>
                            <div className="column-center">
                                <img src="img/timer.png" className="card-img" />
                                <span className="card-title">
                                    <strong>Timer</strong>
                                </span>
                            </div>
                        </div>
                        <div className="mobile-card-text">
                            You can use with
                            <br />
                            <span className="white">[ /timer (number)]</span>,
                            <br />
                            Machim informs you after
                            <br />
                            (number) seconds!
                        </div>
                    </div>
                </div>

                <div className="spec">
                    <div className="mobile-card-container">
                        <div>
                            <div className="column-center">
                                <img
                                    src="img/uptime.png"
                                    className="card-img uptime"
                                />
                                <span className="card-title">
                                    <strong>Uptime</strong>
                                </span>
                            </div>
                        </div>
                        <div className="mobile-card-text">
                            You can use with <span className="white">[ /uptime ]</span>,
                            <br />
                            Machim prints its running time!
                        </div>
                    </div>
                </div>

                <div className="spec">
                    <div className="mobile-card-container">
                        <div>
                            <div className="column-center">
                                <img
                                    src="img/weather.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong>Weather</strong>
                                </span>
                            </div>
                        </div>
                        <div className="mobile-card-text">
                            You can use with
                            <br />
                            <span className="white">[ /weather (region) ]</span>,
                            <br />
                            Machim prints the weather
                            <br />
                            of (region)!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Utility;
