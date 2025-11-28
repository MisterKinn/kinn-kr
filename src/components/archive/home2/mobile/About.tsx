function About() {
    return (
        <div id="About" className="body">
            <h1 className="About" data-aos="fade-up">
                About Me
            </h1>
            <p className="mobile-aboutme-text" data-aos="fade-up">
                <span className="white">Hello!</span>
                <br />
                My name is <span className="white">SeongYeon Kim</span>
                <br />
                (a.k.a.
                <span className="white">Kinn</span>), and I'm a student
                <br />
                <span className="white">FrontEnd Developer.</span>
                <br />
                I'm fan of{" "}
                <img
                    loading="lazy"
                    src="img/usa.webp"
                    alt="the United States of America"
                    className="usa"
                />{" "}
                &{" "}
                <a
                    href="https://f1.com"
                    target="_blank"
                    title="Formula 1"
                    className="link"
                >
                    <img loading="lazy" src="img/f1.png" className="f1" />
                </a>
                <strong>.</strong>
                <br />
                <br />
                My motto is{" "}
                <span className="motto-text">
                    <span className="white">
                        "I care about
                        <br />
                        the reality of the goodness,
                        <br />
                        not the perception of it."
                    </span>
                    .
                </span>
                <br />
                <br />
                I'm <span className="white">19</span> years old,
                <br />
                and <span className="white">Junior</span> of high school.
                <br />
                <br />
                I'm going to work at <span className="white">Startup</span>
                <br />
                as a <span className="white">Developer</span>, and eventually
                <br />
                I'll be <span className="white">a Successful Entrepreneur</span>
                <br />
                and be the citizen of the <span className="white">U.S.A.</span>
            </p>
        </div>
    );
}

export default About;
