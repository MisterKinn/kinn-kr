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
                                <strong>Clean</strong>
                                </span>
                            </div>
                        </div>
                        <div className="mobile-card-text">
                            You can use with
                            <br />
                            <span className="white">[ /clean (number) ]</span>,
                            <br />
                            (number) messages are deleted!
                        </div>
                    </div>
                </div>

                <div className="spec">
                    <div className="mobile-card-container">
                        <div>
                            <div className="column-center">
                                <img src="img/slow.png" className="card-img" />
                                <span className="card-title">
                                    <strong>Slow</strong>
                                </span>
                            </div>
                        </div>
                        <div className="mobile-card-text">
                            You can use with
                            <br />
                            <span className="white">[ /slow (number) ]</span>,
                            <br />
                            (number) seconds slow is applied to channel!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Manage;
