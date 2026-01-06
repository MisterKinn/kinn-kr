"use client";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import AOS from "aos";
import "../../styles/aos.css";
import "../../styles/machim.css";

import NavBar from "@/components/machim/NavBar";
import Home from "@/components/machim/Home";
import About from "@/components/machim/About";
import Manage from "@/components/machim/Manage";
import Utility from "@/components/machim/Utility";
import Support from "@/components/machim/Support";
import Banner from "@/components/archive/home2/desktop/Banner";
import Footer from "@/components/archive/home2/desktop/Footer";

import MobileHome from "@/components/machim/mobile/Home";
import MobileAbout from "@/components/machim/mobile/About";
import MobileManage from "@/components/machim/mobile/Manage";
import MobileUtility from "@/components/machim/mobile/Utility";
import MobileSupport from "@/components/machim/mobile/Support";

function Page() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

    if (isMobile) {
        return (
            <div>
                <MobileHome />
                <MobileAbout />
                <MobileManage />
                <MobileUtility />
                <MobileSupport />
                <Banner />
                <Footer />
            </div>
        );
    } else {
        return (
            <div>
                <NavBar />
                <Home />
                <About />
                <Manage />
                <Utility />
                <Support />
                <Banner />
                <Footer />
            </div>
        );
    }
}

export default Page;
