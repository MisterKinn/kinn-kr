"use client";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import "../../styles/style.css";
import AOS from "aos";
import "@/styles/aos.css";

import NavBar from "@/components/home/desktop/NavBar";
import Home from "@/components/home/desktop/Home";
import Portfolio from "@/components/home/desktop/Portfolio";
import OutSource from "@/components/home/desktop/Outsource";
import Experience from "@/components/home/desktop/Experience";
import Skills from "@/components/home/desktop/Skills";
import Profile from "@/components/home/desktop/Profile";
import Banner from "@/components/home/desktop/Banner";
import Footer from "@/components/home/desktop/Footer";

function Page() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div id="page">
            <Analytics />
            <NavBar />

            <section id="Home">
                <Home />
            </section>

            <section id="Portfolio">
                <Portfolio />
            </section>

            <section id="Outsource">
                <OutSource />
            </section>

            <section id="Experience">
                <Experience />
            </section>

            <section id="Skills">
                <Skills />
            </section>

            <section id="Profile">
                <Profile />
            </section>

            <Banner />
            <Footer />
        </div>
    );
}

export default Page;
