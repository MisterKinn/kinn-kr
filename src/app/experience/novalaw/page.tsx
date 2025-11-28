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
        image: "../img/novalaw1.png",
        alt: "NovaLaw Outsource Preview 1",
        description: (
            <>
                As a good opportunity, I received a web page outsourcing from
                Nova Law Firm, a law firm located in Songdo, Incheon.
            </>
        ),
    },
    {
        image: "../img/novalaw2.png",
        alt: "NovaLaw Outsource Preview 2",
        description: (
            <>
                From the end of last year to the beginning of this year, I was
                sued for false facts + defamation, but lawyer Lee Don-ho, the
                representative lawyer of Nova Law Office, accepted the case for
                free, so I was able to get a non-deposal.
            </>
        ),
    },
    {
        image: "../img/novalaw3.png",
        alt: "NovaLaw Outsource Preview 3",
        description: (
            <>
                After that, while meeting with the lawyer several times, he
                needed to reorganize the web page of Nova Law Office, and he
                suggested that I could do web development, so why don't you try
                it once, so I took on the outsourcing work.
            </>
        ),
    },
    {
        image: "../img/novalaw4.png",
        alt: "NovaLaw Outsource Preview 4",
        description: (
            <>
                Since it was my first outsourcer, there must have been some
                inexperienced parts, but I had a lot of fun working and gained a
                lot of experience.
            </>
        ),
    },
    {
        image: "../img/novalaw5.png",
        alt: "NovaLaw Outsource Preview 5",
        description: (
            <>
                After it was completed, nearly 2000 people connected in a month,
                so I felt a great sense of accomplishment.
                <br />
                <br />
                Once again, I would like to express my infinite gratitude to
                lawyer Lee Don-ho and Nova Law Office for giving me such a great
                opportunity.
            </>
        ),
    },
];

function NovaLaw() {
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
                <h1 className="title">NovaLaw Outsource</h1>
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

export default NovaLaw;
