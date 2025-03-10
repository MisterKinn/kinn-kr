import "@/styles/home/mobile/home.css";

function Home() {
    return (
        <div id="Home">
            <div className="m-home-container m-gradient-background">
                <div className="m-home-content">
                    <div className="m-text-section">
                        <h1 className="m-greeting" data-aos="fade-up">
                            Hello <span className="wave">👋</span>
                            <br />
                            I'm SeongYeon Kim
                        </h1>
                        <p className="m-description" data-aos="fade-up">
                            I'm a student Frontend Developer
                            <br />
                            with a passion for crafting functional, impactful
                            experiences
                            <br />
                            that resonate with users.
                        </p>
                    </div>
                </div>

                <div className="m-arrow-container" data-aos="fade-up">
                    <img
                        loading="lazy"
                        src="img/arrow.png"
                        className="m-arrow"
                    />
                </div>
            </div>
            <div className="blank"></div>
        </div>
    );
}

export default Home;
