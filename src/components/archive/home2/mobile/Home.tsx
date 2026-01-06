import "@/styles/home/home.css";

function HomeMobile() {
    return (
        <div>
            <div className="m-home-container">
                <div className="m-home-content">
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

            <div className="m-arrow-container">
                <a href="#Portfolio">
                    <img
                        loading="lazy"
                        src="img/arrow.png"
                        className="m-arrow"
                    />
                </a>
            </div>
        </div>
    );
}

export default HomeMobile;
