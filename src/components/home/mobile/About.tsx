function About() {
    return (
        <div id="About" className="body">
            <h1 className="About" data-aos="fade-up">
                About Me
            </h1>
            <p className="mobile-aboutme-text" data-aos="fade-up">
                <span className="white">Hello!</span> My name is
                <br />
                <span className="white">SeongYeon Kim</span> (a.k.a.
                <span className="white">Kinn</span>),
                <br />
                and I'm a student
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
                        "I care about the reality of the goodness, not the
                        perception of it."
                    </span>
                    .
                </span>
                <br />
                <br />
                I'm <span className="white">18</span> years old
                <br />
                (in Korean age),
                <br />
                and <span className="white">Junior</span> of high school.
                <br />
                <br />
                I'm dreaming of being
                <br />
                <span className="white">a Successful Entrepreneur</span>,
                <br />
                and being citizen of <br />
                <span className="white">the United States of America</span>.
            </p>
        </div>
    );
}

export default About;
