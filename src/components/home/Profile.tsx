function Profile() {
    return (
        <div id="Profile" data-aos="fade-up">
            <h2 id="Profile" className="list">
                Profile
            </h2>
            <div className="container">
                <a
                    href="mailto:kinn@kinn.kr"
                    target="_blank"
                    title="Mail"
                    className="spec"
                >
                    <div className="card-container2 spec3">
                        <div>
                            <div className="column-center">
                                <img
                                    loading="lazy"
                                    src="img/mail.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong> Mail</strong>
                                </span>
                            </div>
                            <div className="card-footer">
                                <strong>
                                    <br />
                                    kinn@kinn.kr
                                </strong>
                            </div>
                        </div>

                        <div className="overlay">
                            <div className="profile-overlay-text">
                                Click the Card
                                <br />
                                to Mail me
                            </div>
                        </div>
                    </div>
                </a>

                <a
                    href="https://www.instagram.com/kinn__sy"
                    target="_blank"
                    title="Instagram"
                    className="spec"
                >
                    <div className="card-container2 spec3">
                        <div>
                            <div className="column-center">
                                <img
                                    loading="lazy"
                                    src="img/instagram.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong> Instagram</strong>
                                </span>
                            </div>
                            <div className="card-footer">
                                <strong>
                                    <br />
                                    kinn__sy
                                </strong>
                            </div>
                        </div>

                        <div className="overlay">
                            <div className="profile-overlay-text">
                                Click the Card
                                <br />
                                to learn more
                                <br />
                                about Instagram
                            </div>
                        </div>
                    </div>
                </a>

                <a
                    href="https://discord.com/users/602459845534416896/"
                    target="_blank"
                    title="Discord"
                    className="spec"
                >
                    <div className="card-container2 spec3">
                        <div>
                            <div className="column-center">
                                <img
                                    loading="lazy"
                                    src="img/discord.png"
                                    className="card-img discord"
                                />
                                <span className="card-title">
                                    <strong> Discord</strong>
                                </span>
                            </div>
                            <div className="card-footer">
                                <strong>
                                    <br />
                                    mrkinn
                                </strong>
                            </div>
                        </div>

                        <div className="overlay">
                            <div className="profile-overlay-text">
                                Click the Card
                                <br />
                                to learn more
                                <br />
                                about Discord
                            </div>
                        </div>
                    </div>
                </a>

                <a
                    href="https://github.com/MisterKinn"
                    target="_blank"
                    title="GitHub"
                    className="spec"
                >
                    <div className="card-container2 spec3">
                        <div>
                            <div className="column-center">
                                <img
                                    loading="lazy"
                                    src="img/github.png"
                                    className="card-img discord"
                                />
                                <span className="card-title">
                                    <strong> GitHub</strong>
                                </span>
                            </div>
                            <div className="card-footer">
                                <strong>
                                    <br />
                                    MisterKinn
                                </strong>
                            </div>
                        </div>

                        <div className="overlay">
                            <div className="profile-overlay-text">
                                Click the Card
                                <br />
                                to learn more
                                <br />
                                about GitHub
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Profile;
