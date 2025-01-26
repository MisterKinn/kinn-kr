import "@/styles/home/desktop/home.css";

function Home() {
    return (
        <div id="Home" className="home-container gradient-background">
            <div className="home-content">
                <div className="text-section">
                    <h1 className="greeting">
                        Hello <span className="wave">👋</span>
                        <br />
                        I'm SeongYeon Kim
                    </h1>
                    <p className="description">
                        I'm a student Frontend Developer
                        <br />
                        with a passion for crafting functional,
                        <br />
                        impactful experiences that resonate with users.
                    </p>
                </div>
            </div>

            <div className="arrow-container" data-aos="fade-up">
                <img loading="lazy" src="img/arrow.png" className="arrow" />
            </div>

            <div className="profile-section">
                <div className="profile-image-container">
                    <img
                        src="img/profile.png"
                        alt="Profile"
                        className="profile-image"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
