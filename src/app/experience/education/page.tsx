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
        image: "../img/education1.jpg",
        alt: "Gifted Education Center 1",
        description: (
            <>
                I successfully graduated the Gifted Education Center, which was
                hosted by Gyeonggi Goyang Office of Education.
            </>
        ),
    },
    {
        image: "../img/education2.jpg",
        alt: "Gifted Education Center 2",
        description: (
            <>
                I learned about mathematical thinking, programming, and etc.
                <br />
                <br />
                Since I attended the class immersively, I could able to enter to
                advanced program.
                <br />I learned the advanced programming skills at there.
            </>
        ),
    },
    {
        image: "../img/education3.jpg",
        alt: "Gifted Education Center 3",
        description: (
            <>
                After all classes, I finally graduated the Gifted Education
                Center.
                <br />
                And I got the certificate of completion at my school.
            </>
        ),
    },
    {
        image: "../img/education4.jpg",
        alt: "Gifted Education Center 4",
        description: (
            <>
                Based on the content of class I got, I'm gonna work hard to
                enhance my mathematical thinking and programming skills.
                <br />
                I'd like to show my thanks to Gyeonggi Goyang Office of
                Education for providing me with this great opportunity.
            </>
        ),
    },
];

function Education() {
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
                <h1 className="title">Gifted Education Center</h1>
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

export default Education;
