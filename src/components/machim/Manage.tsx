function Manage() {
    return (
        <div id="Manage">
            <h2 className="list" data-aos="fade-up">
                MANAGE
            </h2>
            <div className="container" data-aos="fade-up">
                <div className="spec">
                    <div className="card-container">
                        <div>
                            <div className="column-center">
                                <img src="img/clean.png" className="card-img" />
                                <span className="card-title">
                                    <strong>청소</strong>
                                </span>
                            </div>
                        </div>
                        <div className="card-text">
                            <span className="white">[ /clean (숫자) ]</span>{" "}
                            (으)로 사용이 가능하며, <br />
                            해당 메시지를 제외한 (숫자)만큼의 <br />
                            메시지가 삭제됩니다!
                        </div>
                    </div>
                </div>

                <div className="spec">
                    <div className="card-container">
                        <div>
                            <div className="column-center">
                                <img src="img/slow.png" className="card-img" />
                                <span className="card-title">
                                    <strong>슬로우</strong>
                                </span>
                            </div>
                        </div>
                        <div className="card-text">
                            <span className="white">[ /slow (숫자) ]</span>{" "}
                            (으)로 사용이 가능하며,
                            <br />
                            (숫자)초 만큼 채널에 슬로우가 적용됩니다!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Manage;
