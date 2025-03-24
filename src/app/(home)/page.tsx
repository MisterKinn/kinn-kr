"use client";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
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

import SideBar from "@/components/home/mobile/Sidebar";
import MobileHome from "@/components/home/mobile/Home";
import MobilePortfolio from "@/components/home/mobile/Portfolio";
import MobileOutsource from "@/components/home/mobile/Outsource";
import MobileExperience from "@/components/home/mobile/Experience";
import MobileSkills from "@/components/home/mobile/Skills";
import MobileProfile from "@/components/home/mobile/Profile";
import MobileBanner from "@/components/home/mobile/Banner";
import MobileFooter from "@/components/home/mobile/Footer";

function Page() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

    if (isMobile) {
        return (
            <div id="page">
                <Analytics />
                <SideBar />
                <MobileHome />
                <MobilePortfolio />
                <MobileOutsource />
                <MobileExperience />
                <MobileSkills />
                <MobileProfile />
                <MobileBanner />
                <MobileFooter />
            </div>
        );
    } else {
        return (
            <div id="page">
                <Analytics />
                <NavBar />
                <Home />
                <Portfolio />
                <OutSource />
                <Experience />
                <Skills />
                <Profile />
                <Banner />
                <Footer />
            </div>
        );
    }
}

export default Page;
