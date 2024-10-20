function Home() {
    return (
        <div id="home">
            <img src="img/kinn-banner-mobile.jpg" className="header-img" />
            <div className="header-container" data-aos="fade-up">
                <h2 className="hello">
                    Hello, I'm
                </h2>
                <h1 className="mobile-kinn">
                    Kinn
                </h1>
                <div>
                    <div className="mobile-introduce">
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
                    className="mobile-arrow"
                />
            </div>
        </div>
    );
}

export default Home;
