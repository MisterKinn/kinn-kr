import "@/styles/home/home.css";

function Home() {
    return (
        <div>
            <div className="home-container">
                <div className="home-content">
                    <div>
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

                <div className="gradient-overlay" />
            </div>

            <div className="arrow-container">
                <a href="#Portfolio">
                    <img loading="lazy" src="img/arrow.png" className="arrow" />
                </a>
            </div>
        </div>
    );
}

export default Home;
