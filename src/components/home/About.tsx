function About() {
    return (
        <div id="About">
            <h1 className="About" data-aos="fade-up">
                About Me
            </h1>
            <p data-aos="fade-up">
                <span className="white">Hello!</span> My name is{" "}
                <span className="white">SeongYeon Kim</span> (a.k.a.
                <span className="white">Kinn</span>),
                <br />
                and I'm a student{" "}
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
                        "Success is achived through action, not words"
                    </span>
                    .
                </span>
                <br />
                <br />
                I'm <span className="white">18</span> years old (in Korean age),
                <br />
                and <span className="white">Junior</span> of high school.
                <br />
                <br />
                I'm dreaming of being{" "}
                <span className="white">a Successful Entrepreneur</span>,
                <br />
                and being citizen of{" "}
                <span className="white">the United States of America</span>.
            </p>
        </div>
    );
}

export default About;
