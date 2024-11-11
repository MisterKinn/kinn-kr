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
                                    <strong>Clean</strong>
                                </span>
                            </div>
                        </div>
                        <div className="card-text">
                            You can use with <span className="white">[ /clean (number) ]</span>,
                            <br />
                            (number) messages are deleted!
                        </div>
                    </div>
                </div>

                <div className="spec">
                    <div className="card-container">
                        <div>
                            <div className="column-center">
                                <img src="img/slow.png" className="card-img" />
                                <span className="card-title">
                                    <strong>Slow</strong>
                                </span>
                            </div>
                        </div>
                        <div className="card-text">
                            You can use with <span className="white">[ /slow (number) ]</span>,
                            <br />
                            (number) seconds slow is applied to channel!
                            <br />
                            (You can adjust slow <span className="white">1</span> to <span className="white">21,600</span> seconds)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Manage;
