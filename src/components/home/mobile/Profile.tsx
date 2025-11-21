import "@/styles/home/profile.css";

function Profile() {
    return (
        <div id="Profile" data-aos="fade-up">
            <h2 id="m-list">Profile</h2>
            <h3 id="m-explain">
                Build deeper connections with me
                <br />
                in every way.
                <br />
                Click the card to connect with me.
            </h3>
            <div className="m-container">
                <a
                    href="mailto:kinn@kinn.kr"
                    target="_blank"
                    title="Mail"
                    className="m-spec"
                >
                    <div className="m-card-container3">
                        <div className="m-column-center">
                            <img
                                loading="lazy"
                                src="img/mail.png"
                                className="m-card-img"
                                alt="Mail"
                            />
                            <span className="m-card-title">
                                <strong>Mail</strong>
                            </span>
                        </div>
                        <div className="m-card-footer">
                            <strong>kinn@kinn.kr</strong>
                        </div>
                    </div>
                </a>

                <a
                    href="https://www.instagram.com/kinn__sy"
                    target="_blank"
                    title="Instagram"
                    className="m-spec"
                >
                    <div className="m-card-container3">
                        <div className="m-column-center">
                            <img
                                loading="lazy"
                                src="img/instagram.png"
                                className="m-card-img"
                                alt="Instagram"
                            />
                            <span className="m-card-title">
                                <strong>Instagram</strong>
                            </span>
                        </div>
                        <div className="m-card-footer">
                            <strong>kinn__sy</strong>
                        </div>
                    </div>
                </a>

                <a
                    href="https://discord.com/users/602459845534416896/"
                    target="_blank"
                    title="Discord"
                    className="m-spec"
                >
                    <div className="m-card-container3">
                        <div className="m-column-center">
                            <img
                                loading="lazy"
                                src="img/discord.png"
                                className="m-card-img"
                                alt="Discord"
                            />
                            <span className="m-card-title">
                                <strong>Discord</strong>
                            </span>
                        </div>
                        <div className="m-card-footer">
                            <strong>mrkinn</strong>
                        </div>
                    </div>
                </a>

                <a
                    href="https://www.linkedin.com/in/%E3%85%A4seongyeon-kim-223994296/"
                    target="_blank"
                    title="LinkedIn"
                    className="m-spec"
                >
                    <div className="m-card-container3">
                        <div>
                            <div className="m-column-center">
                                <img
                                    loading="lazy"
                                    src="img/linkedin.png"
                                    className="m-card-img"
                                />
                                <span className="m-card-title">
                                    <strong> Linkedin</strong>
                                </span>
                            </div>
                            <div className="m-card-footer">
                                <strong>SeongYeon Kim</strong>
                            </div>
                        </div>
                    </div>
                </a>

                <a
                    href="https://github.com/MisterKinn"
                    target="_blank"
                    title="GitHub"
                    className="m-spec"
                >
                    <div className="m-card-container3">
                        <div className="m-column-center">
                            <img
                                loading="lazy"
                                src="img/github.png"
                                className="m-card-img"
                                alt="GitHub"
                            />
                            <span className="m-card-title">
                                <strong>GitHub</strong>
                            </span>
                        </div>
                        <div className="m-card-footer">
                            <strong>MisterKinn</strong>
                        </div>
                    </div>
                </a>
            </div>

            <div className="blank"></div>
        </div>
    );
}

export default Profile;
