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

function NovaLaw() {
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
                    <h1 className="m-title">NovaLaw Outsource</h1>
                </div>

                <div className="m-hackathon-content" data-aos="fade-up">
                    <div className="m-image-section">
                        <img
                            src="../img/novalaw1.png"
                            alt="Highthon Project"
                            className="m-hackathon-image"
                            data-aos="fade-up"
                        />
                        <p className="description" data-aos="fade-up">
                            As a good opportunity, I received a web page
                            outsourcing from Nova Law Firm, a law firm located
                            in Songdo, Incheon.
                        </p>

                        <img
                            src="../img/novalaw2.png"
                            alt="Highthon Project"
                            className="m-hackathon-image"
                            data-aos="fade-up"
                        />
                        <p className="description" data-aos="fade-up">
                            From the end of last year to the beginning of this
                            year, I was sued for false facts + defamation, but
                            lawyer Lee Don-ho, the representative lawyer of Nova
                            Law Office, accepted the case for free, so I was
                            able to get a non-deposal.
                        </p>

                        <img
                            src="../img/novalaw3.png"
                            alt="Highthon Project"
                            className="m-hackathon-image"
                            data-aos="fade-up"
                        />
                        <p className="description" data-aos="fade-up">
                            After that, while meeting with the lawyer several
                            times, he needed to reorganize the web page of Nova
                            Law Office, and he suggested that I could do web
                            development, so why don't you try it once, so I took
                            on the outsourcing work.
                        </p>

                        <img
                            src="../img/novalaw4.png"
                            alt="Highthon Project"
                            className="m-hackathon-image"
                            data-aos="fade-up"
                        />
                        <p className="description" data-aos="fade-up">
                            Since it was my first outsourcer, there must have
                            been some inexperienced parts, but I had a lot of
                            fun working and gained a lot of experience.
                        </p>

                        <img
                            src="../img/novalaw5.png"
                            alt="Highthon Project"
                            className="m-hackathon-image"
                            data-aos="fade-up"
                        />
                        <p className="description" data-aos="fade-up">
                            After it was completed, nearly 2000 people connected
                            in a month, so I felt a great sense of
                            accomplishment.
                            <br />
                            <br />
                            Once again, I would like to express my infinite
                            gratitude to lawyer Lee Don-ho and Nova Law Office
                            for giving me such a great opportunity.
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
                    <h1 className="title">NovaLaw Outsource</h1>
                </div>

                <div className="hackathon-content" data-aos="fade-up">
                    <div className="image-section">
                        <img
                            src="../img/novalaw1.png"
                            alt="NovaLaw Outsource"
                            className="hackathon-image"
                        />
                        <img
                            src="../img/novalaw2.png"
                            alt="NovaLaw Outsource"
                            className="hackathon-image"
                        />
                        <img
                            src="../img/novalaw3.png"
                            alt="NovaLaw Outsource"
                            className="hackathon-image"
                        />
                        <img
                            src="../img/novalaw4.png"
                            alt="NovaLaw Outsource"
                            className="hackathon-image"
                        />
                        <img
                            src="../img/novalaw5.png"
                            alt="NovaLaw Outsource"
                            className="hackathon-image"
                        />
                    </div>

                    <div className="text-section">
                        <p className="description" data-aos="fade-up">
                            As a good opportunity, I received a web page
                            outsourcing from Nova Law Firm, a law firm located
                            in Songdo, Incheon.
                            <br />
                            <br />
                            From the end of last year to the beginning of this
                            year, I was sued for false facts + defamation, but
                            lawyer Lee Don-ho, the representative lawyer of Nova
                            Law Office, accepted the case for free, so I was
                            able to get a non-deposal.
                            <br />
                            <br />
                            After that, while meeting with the lawyer several
                            times, he needed to reorganize the web page of Nova
                            Law Office, and he suggested that I could do web
                            development, so why don't you try it once, so I took
                            on the outsourcing work.
                            <br />
                            <br />
                            Since it was my first outsourcer, there must have
                            been some inexperienced parts, but I had a lot of
                            fun working and gained a lot of experience.
                            <br />
                            <br />
                            After it was completed, nearly 2000 people connected
                            in a month, so I felt a great sense of
                            accomplishment.
                            <br />
                            <br />
                            Once again, I would like to express my infinite
                            gratitude to lawyer Lee Don-ho and Nova Law Office
                            for giving me such a great opportunity.
                        </p>
                    </div>
                </div>

                <Banner />
                <Footer />
            </div>
        );
    }
}

export default NovaLaw;
