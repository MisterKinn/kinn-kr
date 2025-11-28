function Utility() {
    return (
        <div id="Utility">
            <h2 className="list" data-aos="fade-up">
                UTILITY
            </h2>
            <div className="container" data-aos="fade-up">
                <div className="spec">
                    <div className="card-container">
                        <div>
                            <div className="column-center">
                                <img src="img/help.png" className="card-img" />
                                <span className="card-title">
                                    <strong>Help</strong>
                                </span>
                            </div>
                        </div>
                        <div className="card-text">
                            You can use with <span className="white">[ /help ]</span>,
                            <br />
                            Machim prints the instructions!
                        </div>
                    </div>
                </div>

                <div className="spec">
                    <div className="card-container">
                        <div>
                            <div className="column-center">
                                <img src="img/ping.png" className="card-img" />
                                <span className="card-title">
                                    <strong>Ping</strong>
                                </span>
                            </div>
                        </div>
                        <div className="card-text">
                            You can use with <span className="white">[ /ping ]</span>,
                            <br />
                            Machim prints its latency!
                        </div>
                    </div>
                </div>

                <div className="spec">
                    <div className="card-container">
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
                        <div className="card-text">
                            You can use with <span className="white">[ /info ]</span>,
                            <br />
                            Machim prints the info of user, which is
                            <br />
                            Name, Tag, ID, Nickname, Profile Picture
                            <br />
                            and Join Date.
                        </div>
                    </div>
                </div>

                <div className="spec">
                    <div className="card-container">
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
                        <div className="card-text">
                            You can use with <span className="white">[ /support ]</span>,
                            <br />
                            Machim prints its support Web,
                            <br />
                            official server and invitation link!
                        </div>
                    </div>
                </div>

                <div className="spec">
                    <div className="card-container">
                        <div>
                            <div className="column-center">
                                <img src="img/timer.png" className="card-img" />
                                <span className="card-title">
                                    <strong>Timer</strong>
                                </span>
                            </div>
                        </div>
                        <div className="card-text">
                            You can use with <span className="white">[ /timer (number)]</span>,
                            <br />
                            Machim informs you after (number) seconds!
                        </div>
                    </div>
                </div>

                <div className="spec">
                    <div className="card-container">
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
                        <div className="card-text">
                            You can use with <span className="white">[ /uptime ]</span>,
                            <br />
                            Machim prints its running time!
                        </div>
                    </div>
                </div>

                <div className="spec">
                    <div className="card-container">
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
                        <div className="card-text">
                            You can use with <span className="white">[ /weather (region) ]</span>,
                            <br />
                            Machim prints the weather of (region)
                            <br />
                            using OpenWeatherMap API!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Utility;
