"use client";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import "../../../styles/style.css";
import "../../../styles/home/desktop/highthon.css";
import "../../../styles/home/mobile/highthon.css";
import AOS from "aos";
import "@/styles/aos.css";

import MobileBanner from "../../../components/home/mobile/Banner";
import MobileFooter from "../../../components/home/mobile/Footer";
import Banner from "../../../components/home/desktop/Banner";
import Footer from "../../../components/home/desktop/Footer";

function Education() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

    if (isMobile) {
        return (
            <div className="m-hackathon-container">
                <a href="../" className="m-back-button" data-aos="fade-up">
                    ← Back
                </a>

                <div className="m-hackathon-header" data-aos="fade-up">
                    <h1 className="m-title">Gifted Education Center</h1>
                </div>

                <div className="m-hackathon-content" data-aos="fade-up">
                    <div className="m-image-section">
                        <img
                            src="../img/education1.jpg"
                            alt="Highthon Project"
                            className="m-hackathon-image"
                            data-aos="fade-up"
                        />
                        <p className="description" data-aos="fade-up">
                            I successfully graduated the Gifted Education
                            Center, which was hosted by Gyeonggi Goyang Office
                            of Education.
                        </p>

                        <img
                            src="../img/education2.jpg"
                            alt="Highthon Project"
                            className="m-hackathon-image"
                            data-aos="fade-up"
                        />
                        <p className="description" data-aos="fade-up">
                            I learned about mathmatical thinking, programming,
                            and etc.
                            <br />
                            <br />
                            Since I attended the class immersviely, I could able
                            to enter to advanced program.
                            <br />I learned the advnaced programming skills at
                            there.
                        </p>

                        <img
                            src="../img/education3.jpg"
                            alt="Highthon Project"
                            className="m-hackathon-image"
                            data-aos="fade-up"
                        />
                        <p className="description" data-aos="fade-up">
                            After all classes, I finally graduated the Gifted
                            Education Center.
                            <br />
                            And I got the certificate of completion at my
                            school.
                        </p>

                        <img
                            src="../img/education4.jpg"
                            alt="Highthon Project"
                            className="m-hackathon-image"
                            data-aos="fade-up"
                        />
                        <p className="description" data-aos="fade-up">
                            Based on the content of class I got, I'm gonna work
                            hard to enhance my mathematical thinking and
                            programming skills.
                            <br />
                            I'd like to show my thanks to Gyeonggi Goyang Office
                            of Education for providing me with this great
                            opportunity.
                        </p>
                    </div>
                </div>

                <MobileBanner />
                <MobileFooter />
            </div>
        );
    } else {
        return (
            <div className="hackathon-container">
                <a href="../" className="back-button" data-aos="fade-up">
                    ← Back
                </a>

                <div className="hackathon-header" data-aos="fade-up">
                    <h1 className="title">Gifted Education Center</h1>
                </div>

                <div className="hackathon-content" data-aos="fade-up">
                    <div className="image-section">
                        <img
                            src="../img/education1.jpg"
                            alt="Gifted Education Project"
                            className="hackathon-image"
                        />
                        <img
                            src="../img/education2.jpg"
                            alt="Gifted Education Project"
                            className="hackathon-image"
                        />
                        <img
                            src="../img/education3.jpg"
                            alt="Gifted Education Project"
                            className="hackathon-image"
                        />
                        <img
                            src="../img/education4.jpg"
                            alt="Gifted Education Project"
                            className="hackathon-image"
                        />
                    </div>

                    <div className="text-section">
                        <p className="description" data-aos="fade-up">
                            I successfully graduated the Gifted Education
                            Center, which was hosted by Gyeonggi Goyang Office
                            of Education.
                            <br />
                            <br />
                            I learned about mathmatical thinking, programming,
                            and etc.
                            <br />
                            <br />
                            Since I attended the class immersviely, I could able
                            to enter to advanced program.
                            <br />
                            I learned the advnaced programming skills at there.
                            <br />
                            <br />
                            After all classes, I finally graduated the Gifted
                            Education Center.
                            <br />
                            And I got the certificate of completion at my
                            school.
                            <br />
                            <br />
                            Based on the content of class I got, I'm gonna work
                            hard to enhance my mathematical thinking and
                            programming skills.
                            <br />
                            I'd like to show my thanks to Gyeonggi Goyang Office
                            of Education for providing me with this great
                            opportunity.
                        </p>
                    </div>
                </div>

                <Banner />
                <Footer />
            </div>
        );
    }
}

export default Education;
