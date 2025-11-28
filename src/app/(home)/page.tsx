"use client";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import "../../styles/style.css";
import AOS from "aos";
import "@/styles/aos.css";

import dynamic from "next/dynamic";
import ThreeDNavBar from "@/components/home/ThreeDNavBar";

const ScrollStage = dynamic(() => import("@/components/home/ScrollStage"), {
    ssr: false,
});

export default function Page() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <>
            <ThreeDNavBar />
            <ScrollStage />
        </>
    );
}
