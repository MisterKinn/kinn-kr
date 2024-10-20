function Manage() {
    return (
        <div id="Manage">
            <h2 className="mobile-list" data-aos="fade-up">
                MANAGE
            </h2>
            <div className="container" data-aos="fade-up">
                <div className="spec">
                    <div className="mobile-card-container">
                        <div>
                            <div className="column-center">
                                <img src="img/clean.png" className="card-img" />
                                <span className="card-title">
                                    <strong>청소</strong>
                                </span>
                            </div>
                        </div>
                        <div className="mobile-card-text">
                            <span className="white">[ /clean (숫자) ]</span>{" "}
                            (으)로 사용이
                            <br />
                            가능하며, 해당 메시지를 제외한
                            <br />
                            (숫자)만큼의 메시지가 삭제됩니다!
                        </div>
                    </div>
                </div>

                <div className="spec">
                    <div className="mobile-card-container">
                        <div>
                            <div className="column-center">
                                <img src="img/slow.png" className="card-img" />
                                <span className="card-title">
                                    <strong>슬로우</strong>
                                </span>
                            </div>
                        </div>
                        <div className="mobile-card-text">
                            <span className="white">[ /slow (숫자) ]</span>{" "}
                            (으)로 사용이 <br />
                            가능하며, (숫자)초 만큼 채널에
                            <br />
                            슬로우가 적용됩니다!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Manage;
