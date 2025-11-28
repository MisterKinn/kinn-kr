import "@/styles/home/profile.css";

function Profile() {
    return (
        <div className="desktop-profile" data-aos="fade-up">
            <h2 id="list" data-aos="fade-up">
                Profile
            </h2>
            <h3 id="explain" data-aos="fade-up">
                Build deeper connection with me in every ways.
                <br />
                Click the card to connect with me.
            </h3>
            <div className="container3">
                <a
                    href="mailto:kinn@kinn.kr"
                    target="_blank"
                    title="Mail"
                    className="spec"
                >
                    <div className="card-container3">
                        <div>
                            <div className="column-center3">
                                <img
                                    loading="lazy"
                                    src="img/mail.png"
                                    className="card-img3"
                                />
                                <span className="card-title3">
                                    <strong> Mail</strong>
                                </span>
                            </div>
                            <div className="card-footer3">
                                <strong>
                                    <br />
                                    kinn@kinn.kr
                                </strong>
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
                    <div className="card-container3">
                        <div>
                            <div className="column-center3">
                                <img
                                    loading="lazy"
                                    src="img/instagram.png"
                                    className="card-img3"
                                />
                                <span className="card-title3">
                                    <strong> Instagram</strong>
                                </span>
                            </div>
                            <div className="card-footer3">
                                <strong>
                                    <br />
                                    kinn__sy
                                </strong>
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
                    <div className="card-container3">
                        <div>
                            <div className="column-center3">
                                <img
                                    loading="lazy"
                                    src="img/discord.png"
                                    className="card-img3"
                                />
                                <span className="card-title3">
                                    <strong> Discord</strong>
                                </span>
                            </div>
                            <div className="card-footer3">
                                <strong>
                                    <br />
                                    mrkinn
                                </strong>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="container3">
                <a
                    href="https://www.linkedin.com/in/%E3%85%A4seongyeon-kim-223994296/"
                    target="_blank"
                    title="LinkedIn"
                    className="spec"
                >
                    <div className="card-container3">
                        <div>
                            <div className="column-center3">
                                <img
                                    loading="lazy"
                                    src="img/linkedin.png"
                                    className="card-img3"
                                />
                                <span className="card-title3">
                                    <strong> Linkedin</strong>
                                </span>
                            </div>
                            <div className="card-footer3">
                                <strong>
                                    <br />
                                    SeongYeon Kim
                                </strong>
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
                    <div className="card-container3">
                        <div>
                            <div className="column-center3">
                                <img
                                    loading="lazy"
                                    src="img/github.png"
                                    className="card-img3 discord"
                                />
                                <span className="card-title3">
                                    <strong> GitHub</strong>
                                </span>
                            </div>
                            <div className="card-footer3">
                                <strong>
                                    <br />
                                    MisterKinn
                                </strong>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div className="blank"></div>
        </div>
    );
}

export default Profile;
