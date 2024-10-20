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
                                    <strong>도움말</strong>
                                </span>
                            </div>
                        </div>
                        <div className="card-text">
                            <span className="white">[ /help ]</span> (으)로
                            사용이 가능하며,
                            <br />
                            <span className="white">.마침이</span> 봇의 도움말이
                            출력됩니다!
                        </div>
                    </div>
                </div>

                <div className="spec">
                    <div className="card-container">
                        <div>
                            <div className="column-center">
                                <img src="img/ping.png" className="card-img" />
                                <span className="card-title">
                                    <strong>핑</strong>
                                </span>
                            </div>
                        </div>
                        <div className="card-text">
                            <span className="white">[ /ping ]</span> (으)로
                            사용이 가능하며,
                            <br />
                            봇의 latency(반응속도)를 출력합니다!
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
                                    <strong>정보</strong>
                                </span>
                            </div>
                        </div>
                        <div className="card-text">
                            <span className="white">[ /info ]</span> (으)로
                            사용이 가능하며, <br />
                            이름과 태그, ID, 서버 닉네임, 프로필 사진, <br />
                            가입일 등 입력한{" "}
                            <span className="white">유저의 정보</span>를
                            출력합니다!
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
                                    <strong>서포트</strong>
                                </span>
                            </div>
                        </div>
                        <div className="card-text">
                            <span className="white">[ /support ]</span> (으)로
                            사용이 가능하며,
                            <br />
                            <span className="white">.마침이</span> 봇의 공식
                            웹과 공식 서버,
                            <br />봇 초대 링크 등을 출력합니다!
                        </div>
                    </div>
                </div>

                <div className="spec">
                    <div className="card-container">
                        <div>
                            <div className="column-center">
                                <img src="img/timer.png" className="card-img" />
                                <span className="card-title">
                                    <strong>타이머</strong>
                                </span>
                            </div>
                        </div>
                        <div className="card-text">
                            <span className="white">[ /timer (숫자)]</span>{" "}
                            (으)로 사용이 가능하며,
                            <br />
                            입력한 시간만큼 지난 뒤 맨션하여 알려줍니다!
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
                                    <strong>업타임</strong>
                                </span>
                            </div>
                        </div>
                        <div className="card-text">
                            <span className="white">[ /uptime ]</span> (으)로
                            사용이 가능하며,
                            <br />
                            <span className="white">.마침이</span> 봇이 가동된
                            시간을 출력합니다!
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
                                    <strong>날씨</strong>
                                </span>
                            </div>
                        </div>
                        <div className="card-text">
                            <span className="white">[ /weather (지역명) ]</span>{" "}
                            (으)로 사용이 가능하며,
                            <br />
                            <span className="white">입력된 지역의 날씨</span>를
                            OpenWeatherMap API를
                            <br />
                            활용하여 검색 후 출력합니다!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Utility;
