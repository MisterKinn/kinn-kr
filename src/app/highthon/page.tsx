"use client";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import "../../styles/style.css";
import "../../styles/home/desktop/highthon.css";
import "../../styles/home/mobile/highthon.css";
import AOS from "aos";
import "@/styles/aos.css";

import MobileBanner from "@/components/home/mobile/Banner";
import MobileFooter from "@/components/home/mobile/Footer";
import Banner from "@/components/home/desktop/Banner";
import Footer from "@/components/home/desktop/Footer";

function Highthon() {
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
                    <h1 className="m-title">Highthon</h1>
                </div>

                <div className="m-hackathon-content" data-aos="fade-up">
                    <div className="m-image-section">
                        <img
                            src="img/highthon1.png"
                            alt="Highthon Project"
                            className="m-hackathon-image"
                            data-aos="fade-up"
                        />
                        <p className="description" data-aos="fade-up">
                            I've gone though my first hackathon.
                            <br />
                            <br />
                            While I was making several projects
                            <br />
                            with vanilla JS, I learned about Highthon,
                            <br />a hackathon for high school students
                            <br />
                            on February 17-18 2024, and thankfully,
                            <br />I was selected as the final contestant,
                            <br />
                            so I participated with React, related frameworks,
                            and git in my head for two weeks.
                        </p>

                        <img
                            src="/img/highthon2.png"
                            alt="Highthon Project"
                            className="m-hackathon-image"
                            data-aos="fade-up"
                        />
                        <p className="description" data-aos="fade-up">
                            The team was consisted of two frontend devlopers
                            including me, one backend developer and one
                            designer, and the theme was "dream", which is a bit
                            abstract one.
                        </p>

                        <img
                            src="/img/highthon3.png"
                            alt="Highthon Project"
                            className="m-hackathon-image"
                            data-aos="fade-up"
                        />
                        <p className="description" data-aos="fade-up">
                            The idea was "an alarm app that sends dangerous
                            messages if you don't turn it off," which was
                            quickly decided in an hour and went into development
                            immediately.
                            <br />
                            <br />I was in charge of developing the main page
                            through React, but when I found it difficult to
                            implement the template made by the designer, so the
                            team member did my part.
                            <br />
                            <br />
                            Thus I had no choice but to do small things that
                            could be implemented with my own skills.
                        </p>

                        <img
                            src="/img/highthon4.png"
                            alt="Highthon Project"
                            className="m-hackathon-image"
                            data-aos="fade-up"
                        />
                        <p className="description" data-aos="fade-up">
                            When there was nothing more peripheral I could do
                            with my skills, I studied Next.JS from scratch to
                            build up my development skills from midnight to 1
                            p.m., the deadline for submission.
                            <br />
                            <br />
                            Previously, I only knew about the Create React App,
                            which is now out of support at React, so I conducted
                            the learning according to the updated version of
                            Next.JS 14, which wasn't easy at first, but after
                            studying for a long time by asking people questions,
                            I became somewhat embodied and experienced the
                            effectiveness of learning by doing activities such
                            as refactoring the entire portfolio web page into
                            Next.JS.
                        </p>

                        <img
                            src="/img/highthon5.png"
                            alt="Highthon Project"
                            className="m-hackathon-image"
                            data-aos="fade-up"
                        />
                        <p className="description" data-aos="fade-up">
                            Since then, the team members have made the app
                            perfect and successfully performed the presentation,
                            so our team finally won the grand prize!
                            <br />
                            <br />
                            It was a satisfactory and happy result, but I felt a
                            lot of guilty that I didn't contribute much to the
                            team due to my lack of development skills, so I
                            didn't really feel it even though I presented a very
                            good award called the Grand Prize.
                            <br />
                            <br />
                            There seems to be a strong need for constant
                            practice in the future to be able to freely deal
                            with various frameworks such as React, Next.JS, and
                            React Native.
                        </p>

                        <img
                            src="/img/highthon6.jpg"
                            alt="Highthon Project"
                            className="m-hackathon-image"
                            data-aos="fade-up"
                        />
                        <p className="description" data-aos="fade-up">
                            For me, the 9th high tone was a good opportunity to
                            realize the object level my skills, and at the same
                            time, it was a good experience to participate in
                            hackathon for the first time to create a service and
                            actually collaborate together.
                            <br />
                            <br />
                            And it was also a good networking time to create new
                            relationships and strengthen the existing
                            relationships.
                            <br />
                            <br />
                            Based on the feedback I got today, I will come back
                            with a more advanced look at the next event, and
                            finally, I would like to express my sincere thanks
                            to Highthon for providing me with this great
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
                    <h1 className="title">Highthon</h1>
                </div>

                <div className="hackathon-content" data-aos="fade-up">
                    <div className="image-section">
                        <img
                            src="img/highthon1.png"
                            alt="Highthon Project"
                            className="hackathon-image"
                        />
                        <img
                            src="/img/highthon2.png"
                            alt="Highthon Project"
                            className="hackathon-image"
                        />
                        <img
                            src="/img/highthon3.png"
                            alt="Highthon Project"
                            className="hackathon-image"
                        />
                        <img
                            src="/img/highthon4.png"
                            alt="Highthon Project"
                            className="hackathon-image"
                        />
                        <img
                            src="/img/highthon5.png"
                            alt="Highthon Project"
                            className="hackathon-image"
                        />
                        <img
                            src="/img/highthon6.jpg"
                            alt="Highthon Project"
                            className="hackathon-image"
                        />
                    </div>

                    <div className="text-section">
                        <p className="description" data-aos="fade-up">
                            I've gone though my first hackathon.
                            <br />
                            While I was making several projects with vanilla JS,
                            I learned about Highthon, a hackathon for high
                            school students
                            <br />
                            on February 17-18 2024, and thankfully, I was
                            selected as the final contestant, so I participated
                            with
                            <br />
                            React, related frameworks, and git in my head for
                            two weeks.
                            <br />
                            <br />
                            The team was consisted of two frontend devlopers
                            including me, one backend developer and one
                            designer,
                            <br />
                            and the theme was "dream", which is a bit abstract
                            one.
                            <br />
                            <br />
                            The idea was "an alarm app that sends dangerous
                            messages if you don't turn it off,"
                            <br />
                            which was quickly decided in an hour and went into
                            development immediately.
                            <br />I was in charge of developing the main page
                            through React,
                            <br />
                            but when I found it difficult to implement the
                            template made by the designer, so the team member
                            did my part.
                            <br />
                            Thus I had no choice but to do small things that
                            could be implemented with my own skills.
                            <br />
                            <br />
                            When there was nothing more peripheral I could do
                            with my skills, I studied Next.JS from scratch
                            <br />
                            to build up my development skills from midnight to 1
                            p.m., the deadline for submission.
                            <br />
                            Previously, I only knew about the Create React App,
                            which is now out of support at React,
                            <br />
                            so I conducted the learning according to the updated
                            version of Next.JS 14, which wasn't easy at first,
                            <br />
                            but after studying for a long time by asking people
                            questions, I became somewhat embodied and
                            experienced
                            <br />
                            the effectiveness of learning by doing activities
                            such as refactoring the entire portfolio web page
                            into Next.JS.
                            <br />
                            <br />
                            Since then, the team members have made the app
                            perfect and successfully performed the presentation,
                            <br />
                            so our team finally won the grand prize!
                            <br />
                            It was a satisfactory and happy result, but I felt a
                            lot of guilty that I didn't contribute much to the
                            team
                            <br />
                            due to my lack of development skills, so I didn't
                            really feel it even though I presented a very good
                            award called the Grand Prize.
                            <br />
                            There seems to be a strong need for constant
                            practice in the future
                            <br />
                            to be able to freely deal with various frameworks
                            such as React, Next.JS, and React Native.
                            <br />
                            <br />
                            For me, the 9th high tone was a good opportunity to
                            realize the object level my skills, and at the same
                            time,
                            <br />
                            it was a good experience to participate in hackathon
                            for the first time to create a service and actually
                            collaborate together.
                            <br />
                            And it was also a good networking time to create new
                            relationships and strengthen the existing
                            relationships.
                            <br />
                            <br />
                            Based on the feedback I got today, I will come back
                            with a more advanced look at the next event, and
                            finally,
                            <br />I would like to express my sincere thanks to
                            Highthon for providing me with this great
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

export default Highthon;
