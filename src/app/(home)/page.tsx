"use client";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import "../../styles/style.css";
import AOS from "aos";
import "@/styles/aos.css";

import dynamic from "next/dynamic";
import ThreeDNavBar from "@/components/home/ThreeDNavBar";
import Sidebar from "@/components/home/Sidebar";
import Landing2D from "@/components/home/Landing2D";

const ScrollStage = dynamic(() => import("@/components/home/ScrollStage"), {
    ssr: false,
});

export default function Page() {
    const [is3DLoaded, setIs3DLoaded] = useState(false);
    const [show3D, setShow3D] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const handle3DLoaded = () => {
        setIs3DLoaded(true);
        // Small delay before showing 3D to ensure smooth transition
        setTimeout(() => {
            setShow3D(true);
        }, 300);
    };

    return (
        <>
            {!show3D && <Landing2D />}
            {is3DLoaded && (
                <>
                    <ThreeDNavBar />
                    <Sidebar />
                </>
            )}
            <div
                style={{
                    opacity: show3D ? 1 : 0,
                    transition: "opacity 0.5s ease",
                }}
            >
                <ScrollStage onLoaded={handle3DLoaded} />
            </div>
        </>
    );
}
