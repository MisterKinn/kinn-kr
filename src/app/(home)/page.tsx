"use client";
import { useEffect } from "react";
import "../../styles/style.css";
import AOS from "aos";
import "@/styles/aos.css";

import ThreeDNavBar from "@/components/home/ThreeDNavBar";
import Sidebar from "@/components/home/Sidebar";
import Home from "@/components/archive/home2/desktop/Home";
import Portfolio from "@/components/archive/home2/desktop/Portfolio";
import Outsource from "@/components/archive/home2/desktop/Outsource";
import Experience from "@/components/archive/home2/desktop/Experience";
import Skills from "@/components/archive/home2/desktop/Skills";
import Profile from "@/components/archive/home2/desktop/Profile";
import Footer from "@/components/archive/home2/desktop/Footer";

export default function Page() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <>
            <ThreeDNavBar />
            <Sidebar />
            <div id="Home">
                <Home />
            </div>
            <div id="Portfolio">
                <Portfolio />
            </div>
            <div id="Outsource">
                <Outsource />
            </div>
            <div id="Experience">
                <Experience />
            </div>
            <div id="Skills">
                <Skills />
            </div>
            <div id="Profile">
                <Profile />
            </div>
            <Footer />
        </>
    );
}
