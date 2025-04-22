import "../../../styles/home/mobile/home.css";

function HomeMobile() {
    return (
        <div id="Home">
            <div className="m-home-container">
                <div className="m-home-content" data-aos="fade-up">
                    <div>
                        <h1 className="m-greeting">
                            Hello <span className="m-wave">👋</span>
                            <br />
                            I'm SeongYeon Kim
                        </h1>
                        <p className="m-description">
                            I'm a student Frontend Developer
                            <br />
                            with a passion for crafting functional,
                            <br />
                            impactful experiences
                            <br />
                            that resonate with users.
                        </p>
                    </div>
                </div>

                <div className="m-gradient-overlay" />
            </div>

            <div className="m-arrow-container" data-aos="fade-up">
                <img loading="lazy" src="img/arrow.png" className="m-arrow" />
            </div>
        </div>
    );
}

export default HomeMobile;
