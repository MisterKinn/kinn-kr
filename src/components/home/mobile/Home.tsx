import "@/styles/home/mobile/home.css";

function Home() {
    return (
        <div id="Home" className="m-home-container">
            <div className="m-home-content">
                <div className="m-text-section">
                    <h1 className="m-greeting">
                        Hello <span className="wave">👋</span>
                        <br />
                        I'm SeongYeon Kim
                    </h1>
                    <p className="m-description">
                        I'm a student Frontend Developer with a passion for
                        crafting functional, impactful experiences that resonate
                        with users.
                    </p>
                </div>
            </div>

            <div className="m-arrow-container" data-aos="fade-up">
                <img loading="lazy" src="img/arrow.png" className="m-arrow" />
            </div>
        </div>
    );
}

export default Home;
