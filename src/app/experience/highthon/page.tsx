"use client";

import { useEffect } from "react";
import "../../../styles/style.css";
import "@/styles/home/highthon.css";
import AOS from "aos";
import "@/styles/aos.css";

import Banner from "../../../components/archive/home2/desktop/Banner";
import Footer from "../../../components/archive/home2/desktop/Footer";

const sections = [
    {
        image: "../img/highthon1.png",
        alt: "Highthon Hackathon 1",
        description: (
            <>
                I've gone though my first hackathon.
                <br />
                <br />
                While I was making several projects with vanilla JS, I learned
                about Highthon, a hackathon for high school students on February
                17-18 2024, and thankfully, I was selected as the final
                contestant, so I participated with React, related frameworks,
                and git in my head for two weeks.
            </>
        ),
    },
    {
        image: "../img/highthon2.png",
        alt: "Highthon Hackathon 2",
        description: (
            <>
                The team was consisted of two frontend developers including me,
                one backend developer and one designer, and the theme was
                &quot;dream&quot;, which is a bit abstract one.
            </>
        ),
    },
    {
        image: "../img/highthon3.png",
        alt: "Highthon Hackathon 3",
        description: (
            <>
                The idea was &quot;an alarm app that sends dangerous messages if
                you don't turn it off,&quot; which was quickly decided in an
                hour and went into development immediately.
                <br />
                <br />I was in charge of developing the main page through React,
                but when I found it difficult to implement the template made by
                the designer, so the team member did my part.
                <br />
                <br />
                Thus I had no choice but to do small things that could be
                implemented with my own skills.
            </>
        ),
    },
    {
        image: "../img/highthon4.png",
        alt: "Highthon Hackathon 4",
        description: (
            <>
                When there was nothing more peripheral I could do with my
                skills, I studied Next.JS from scratch to build up my
                development skills from midnight to 1 p.m., the deadline for
                submission.
                <br />
                <br />
                Previously, I only knew about the Create React App, which is now
                out of support at React, so I conducted the learning according
                to the updated version of Next.JS 14, which wasn't easy at
                first, but after studying for a long time by asking people
                questions, I became somewhat embodied and experienced the
                effectiveness of learning by doing activities such as
                refactoring the entire portfolio web page into Next.JS.
            </>
        ),
    },
    {
        image: "../img/highthon5.png",
        alt: "Highthon Hackathon 5",
        description: (
            <>
                Since then, the team members have made the app perfect and
                successfully performed the presentation, so our team finally won
                the grand prize!
                <br />
                <br />
                It was a satisfactory and happy result, but I felt a lot of
                guilty that I didn't contribute much to the team due to my lack
                of development skills, so I didn't really feel it even though I
                presented a very good award called the Grand Prize.
                <br />
                <br />
                There seems to be a strong need for constant practice in the
                future to be able to freely deal with various frameworks such as
                React, Next.JS, and React Native.
            </>
        ),
    },
    {
        image: "../img/highthon6.jpg",
        alt: "Highthon Hackathon 6",
        description: (
            <>
                For me, the 9th high tone was a good opportunity to realize the
                object level my skills, and at the same time, it was a good
                experience to participate in hackathon for the first time to
                create a service and actually collaborate together.
                <br />
                <br />
                And it was also a good networking time to create new
                relationships and strengthen the existing relationships.
                <br />
                <br />
                Based on the feedback I got today, I will come back with a more
                advanced look at the next event, and finally, I would like to
                express my sincere thanks to Highthon for providing me with this
                great opportunity.
            </>
        ),
    },
];

function Highthon() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className="hackathon-container">
            <a href="../" className="back-button" data-aos="fade-up">
                ← Back
            </a>

            <div className="hackathon-header" data-aos="fade-up">
                <h1 className="title">Highthon</h1>
            </div>

            <div className="hackathon-content">
                <div className="story-grid">
                    {sections.map(({ image, alt, description }) => (
                        <section
                            className="story-item"
                            key={image}
                            data-aos="fade-up"
                        >
                            <img
                                src={image}
                                alt={alt}
                                className="story-image"
                                loading="lazy"
                            />
                            <p className="description">{description}</p>
                        </section>
                    ))}
                </div>
            </div>

            <Banner />
            <Footer />
        </div>
    );
}

export default Highthon;
