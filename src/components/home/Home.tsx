function Home() {
    return (
        <div id="home">
            <img src="img/kinn-banner.png" className="header-img" />
            <div className="header-container" data-aos="fade-up">
                <h2 className="hello">
                    Hello, I'm
                </h2>
                <h1 className="kinn">
                    Kinn
                </h1>
                <div>
                    <div className="introduce">
                        Nice to meet you!{" "}
                        <img
                            loading="lazy"
                            draggable="false"
                            src="img/wave.png"
                            className="wave"
                        />
                    </div>
                </div>
            </div>

            <div className="img-container" data-aos="fade-up">
                <img
                    loading="lazy"
                    src="https://todaylunch.vercel.app/img/arrow.png"
                    className="arrow"
                />
            </div>
        </div>
    );
}

export default Home;
