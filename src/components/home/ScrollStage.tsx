"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
    ScrollControls,
    useScroll,
    Stars,
    Text,
    Float,
    Image,
    RoundedBox,
    Environment,
} from "@react-three/drei";
import { useRef, useState, useMemo, useEffect } from "react";
import * as THREE from "three";
import "./ScrollStage.css";

// --- Constants ---
const MOBILE_BREAKPOINT = 768;
const TOTAL_DEPTH = 300;
const SCROLL_PAGES = 12;
const CANVAS_LOAD_DELAY = 500;

// Particle System Constants
const PARTICLE_COUNT = 30000;
const PARTICLE_SPREAD = 300;
const PARTICLE_SIZE = 0.15;
const PARTICLE_OPACITY = 0.6;
const PARTICLE_COLOR = "#4ecdc4";
const MOUSE_INFLUENCE = 1.2;
const MOUSE_INFLUENCE_RADIUS = 25;
const MOUSE_SMOOTHING = 0.05;
const MOUSE_SCALE = 30;

// Section Positioning Constants
const SECTION_SPACING = 6;
const MOBILE_SPACING = 13;
const MOBILE_Y_OFFSET = 3;
const MOBILE_START_Z = 7;
const DESKTOP_START_Z = 15;
const SECTION_TITLE_Z = 10;

// --- Hooks ---
function useMobile() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);
    return isMobile;
}

// --- Data Definitions ---

const PORTFOLIO_ITEMS = [
    {
        title: "F1 Strategy Explorer",
        desc: "Making a Formula 1 Tire Strategy Simulter\nwhich rates user's race tire strategy.",
        img: "img/f1-logo.png",
        link: "/f1strategy",
        date: "25. 07. 15~",
        imageScale: [2.5, 1.4],
    },
    {
        title: "UniMatch",
        desc: "Making an University Suggestion Service\nfor High School Students based on SAT scores.",
        img: "img/unimatch.png",
        link: "/unimatch",
        date: "25. 03. 24~",
    },
    {
        title: "UX Insight",
        desc: "Making a Web UX Analyze service\nwhich dissects Web Page and gives feedback.",
        img: "img/ux.png",
        link: "/uxinsight",
        date: "24. 10. 20~",
    },
    {
        title: "TodayLunch",
        desc: "Operating TodayLunch Web Page & Instagram\nAccount, which informs school meal.",
        img: "img/todaylunch.png",
        link: "https://todaylun.ch",
        date: "24. 04. 11~",
    },
    {
        title: "RoadMap",
        desc: "Operated RoadMap, which was\nWeb Development Circle of my high school.",
        img: "img/road-map.png",
        link: "https://gmsh.kr",
        date: "24. 03. 08 - 25.11.23.",
    },
    {
        title: "QR Crafter",
        desc: "Making a QR Code Generate Service,\nwhich generates & downloads QR Code.",
        img: "img/link.png",
        link: "/qr",
        date: "23. 12. 08~",
    },
    {
        title: "Machim",
        desc: "Making My Own Discord Bot, which has\nserver management & utility features.",
        img: "img/Machim.png",
        link: "/machim",
        date: "21. 02. 07~",
    },
];

const OUTSOURCE_ITEMS = [
    {
        title: "Nova Law Firm",
        desc: "Official Web Page of\nNovaLaw, which is\na overseas study agency.",
        img: "img/novalaw-icon.png",
        link: "https://novalaw.kr",
        date: "24. 03. 31. - 24. 07. 11.",
    },
    {
        title: "Prego Abroad",
        desc: "Official Web Page of\nPrego, which is\na overseas study agency.",
        img: "img/prego-icon.png",
        link: "https://uhak.prego.im",
        date: "25. 11. 21. - 25. 12. 05.",
    },
];

const EXPERIENCE_ITEMS = [
    {
        title: "Gifted Education Center",
        desc: "Graduted a Gifted Education\nCenter hosted by Gyeonggi\nGoyang Office of Education.",
        img: "img/education.png",
        link: "/experience/education",
        date: "21. 09. 17 - 21. 11. 01.",
    },
    {
        title: "\nHighthon",
        desc: "Secured a Grand Prize at Highthon,\na prestigious hackathon\nfor high school students.",
        img: "img/trophy.png",
        link: "/experience/highthon",
        date: "24. 02. 17 - 24. 02. 18.",
    },
    {
        title: "\nRoadMap",
        desc: "Founded and Operating RoadMap,\nwhich is Web Development Circle\nof my high school.",
        img: "img/road-map.png",
        link: "https://gmsh.kr",
        date: "24. 03. 08 ~",
    },
    {
        title: "NovaLaw Outsource",
        desc: "Made Official Web Page of\nNovaLaw, which is a Law firm\nin Incheon, Songdo.",
        img: "img/outsource.png",
        link: "/experience/novalaw",
        date: "24. 03. 31. - 24. 08. 13.",
    },
];

// --- Components ---

function CameraController({ totalDepth }: { totalDepth: number }) {
    const scroll = useScroll();

    useFrame((state) => {
        if (!scroll?.offset) return;
        if (!scroll || scroll.offset === undefined) return;

        const targetZ = -scroll.offset * totalDepth;
        state.camera.position.z = THREE.MathUtils.lerp(
            state.camera.position.z,
            10 + targetZ,
            0.1
        );
    });

    return null;
}

function useCSSVar(varName: string, defaultVal: string) {
    const [val, setVal] = useState(defaultVal);
    useEffect(() => {
        if (typeof window !== "undefined") {
            const styles = getComputedStyle(document.documentElement);
            const v = styles.getPropertyValue(varName).trim();
            if (v) setVal(v);
        }
    }, [varName]);
    return val;
}

function ChildCard({
    item,
    style = "glass",
    imageScale = [1.75, 1.25],
    cardHeight = 5.2,
    cardWidth,
    side = "right",
}: {
    item: any;
    style?: string;
    imageScale?: [number, number];
    cardHeight?: number;
    cardWidth?: number;
    side?: "left" | "right";
}) {
    const cleanDesc = item.desc
        .replace(/<br\s*\/?>/gi, "\n")
        .replace(/<[^>]+>/g, "");

    const bg = useCSSVar("--roadmap-card-bg", "#1a1a1a");
    const titleColor = useCSSVar("--roadmap-title-color", "white");
    const descColor = useCSSVar("--roadmap-desc-color", "#999999");
    const dateColor = useCSSVar("--roadmap-date-color", "#777777");

    const CARD_WIDTH = 3;
    const RADIUS = 0.2;

    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!groupRef.current) return;

        const worldPos = new THREE.Vector3();
        groupRef.current.getWorldPosition(worldPos);
        const dist = state.camera.position.distanceTo(worldPos);

        const FADE_NEAR = 15;
        const FADE_FAR = 35;
        let opacity = 1;

        if (dist > FADE_FAR) opacity = 0;
        else if (dist < FADE_NEAR) opacity = 1;
        else {
            opacity = 1 - (dist - FADE_NEAR) / (FADE_FAR - FADE_NEAR);
        }

        groupRef.current.traverse((obj) => {
            if ((obj as THREE.Mesh).isMesh) {
                const mesh = obj as THREE.Mesh;
                const mat = mesh.material as THREE.Material;
                if (mat) {
                    mat.opacity = opacity;
                    mat.transparent = true;
                }
            }
        });
    });

    const handlePointerOver = () => {
        if (item.link) document.body.style.cursor = "pointer";
    };
    const handlePointerOut = () => {
        document.body.style.cursor = "auto";
    };
    const handleClick = () => {
        if (item.link) {
            window.open(item.link, "_blank");
        }
    };

    const isTech = style === "tech";
    const isPaper = style === "paper";
    const isHorizontal = style === "horizontal";
    const isSkills = style === "skills";
    const isProfile = style === "profile";
    const isGlass = style === "glass" || (!isTech && !isPaper && !isHorizontal && !isProfile && !isSkills);

    const tColor = isPaper ? "#111" : isTech ? "#00ff00" : isProfile ? "#ffffff" : titleColor;
    const dColor = isPaper ? "#333" : isTech ? "#00cc00" : isProfile ? "#cccccc" : descColor;
    const dtColor = isPaper ? "#555" : isTech ? "#008800" : isProfile ? "#aaaaaa" : dateColor;

    // Skills-specific styles (read from CSS variables so you can tweak via CSS)
    const skillCardBg = useCSSVar("--skill-card-bg", "#0d1a26");
    const skillTitleColor = useCSSVar("--skill-title-color", "#00e0ff");
    const skillDateColor = useCSSVar("--skill-date-color", "#007799");
    const skillCardWidthVar = useCSSVar("--skill-card-width", "4.5");
    const skillTitleSizeVar = useCSSVar("--skill-title-size", "0.32");
    const skillCardWidth = parseFloat(skillCardWidthVar) || 4.5;
    const skillTitleSize = parseFloat(skillTitleSizeVar) || 1;

    if (isProfile) {
        return (
            <group
                ref={groupRef}
                onClick={handleClick}
                onPointerOver={handlePointerOver}
                onPointerOut={handlePointerOut}
            >
                <RoundedBox
                    args={[2.4, 4.0, 0.1]}
                    radius={RADIUS}
                    smoothness={4}
                >
                    <meshPhysicalMaterial
                        color={bg}
                        transmission={0.95}
                        roughness={0.1}
                        thickness={0.2}
                        ior={1.5}
                        clearcoat={1}
                        transparent
                        side={THREE.DoubleSide}
                    />
                </RoundedBox>

                <Image
                    url={item.img}
                    position={[0, 0.75, 0.07]}
                    scale={item.imageScale || [1.5, 1.5]}
                    transparent
                />

                <group position={[0, -0.2, 0.07]}>
                    <Text
                        position={[0, -0.4, 0]}
                        fontSize={0.3}
                        color={tColor}
                        anchorX="center"
                        anchorY="top"
                        maxWidth={1.8}

                        fontWeight={700}

                        textAlign="center"
                    >
                        {item.title}
                    </Text>

                    <Text
                        position={[0, -0.85, 0]}
                        fontSize={0.2}
                        color={dColor}
                        anchorX="center"
                        anchorY="top"
                        maxWidth={1.8}
                        lineHeight={1.3}
                        textAlign="center"
                    >
                        {cleanDesc}
                    </Text>
                </group>
            </group>
        );
    }

    if (isSkills) {
        return (
            <group
                ref={groupRef}
                onClick={handleClick}
                onPointerOver={handlePointerOver}
                onPointerOut={handlePointerOut}
            >
                <RoundedBox
                    args={[cardWidth || skillCardWidth, 3.0, 0.1]}
                    radius={RADIUS}
                    smoothness={4}
                >
                    <meshPhysicalMaterial
                        color={skillCardBg}
                        transmission={0.95}
                        roughness={0.1}
                        thickness={0.2}
                        ior={1.5}
                        clearcoat={1}
                        transparent
                        side={THREE.DoubleSide}
                    />
                </RoundedBox>

                <Image
                    url={item.img}
                    position={[-1.5, 0, 0.08]}
                    scale={item.imageScale || imageScale}
                    transparent
                />

                <group position={[0.5, 0.6, 0.08]}>
                    <Text
                        position={[0.25, 0.1, 0]}
                        fontSize={0.7}
                        color={skillTitleColor}
                        anchorX="center"
                        anchorY="top"
                        maxWidth={2.2}
                        fontWeight={700}
                        textAlign="center"
                    >
                        {item.title}
                    </Text>
                    <Text
                        position={[-0.25, -1.25, 0]}
                        fontSize={0.3}
                        color={skillDateColor}
                        anchorX="left"
                        anchorY="top"
                        maxWidth={2.2}
                    >
                        {item.desc}
                    </Text>
                </group>
            </group>
        );
    }

    if (isHorizontal) {
        return (
            <group
                ref={groupRef}
                onClick={handleClick}
                onPointerOver={handlePointerOver}
                onPointerOut={handlePointerOut}
            >
                <RoundedBox
                    args={[cardWidth || 5.0, 3.0, 0.1]}
                    radius={RADIUS}
                    smoothness={4}
                >
                    <meshPhysicalMaterial
                        color={bg}
                        transmission={0.95}
                        roughness={0.1}
                        thickness={0.2}
                        ior={1.5}
                        clearcoat={1}
                        transparent
                        side={THREE.DoubleSide}
                    />
                </RoundedBox>

                <Image
                    url={item.img}
                    position={[-1.75, 0, 0.08]}
                    scale={item.imageScale || imageScale}
                    transparent
                />

                <group position={[-0.5, 0.8, 0.08]}>
                    <Text
                        position={[0, 0.25, 0]}
                        fontSize={style === "horizontal" ? 0.32 : 0.25}
                        color={tColor}
                        anchorX="left"
                        anchorY="top"
                        maxWidth={3.0}
                        fontWeight={style === "horizontal" ? 700 : 400}
                    >
                        {item.title}
                    </Text>
                    <Text
                        position={[0, -0.75, 0]}
                        fontSize={0.18}
                        color={dColor}
                        anchorX="left"
                        anchorY="top"
                        maxWidth={3.0}
                        lineHeight={1.4}
                    >
                        {cleanDesc}
                    </Text>
                    <Text
                        position={[0, -1.75, 0]}
                        fontSize={0.15}
                        color={dtColor}
                        anchorX="left"
                        anchorY="top"
                    >
                        {item.date}
                    </Text>
                </group>
            </group>
        );
    }

    return (
        <group
            ref={groupRef}
            onClick={handleClick}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
        >
            <RoundedBox
                args={[CARD_WIDTH, cardHeight, 0.1]}
                radius={RADIUS}
                smoothness={4}
            >
                {isGlass && (
                    <meshPhysicalMaterial
                        color={bg}
                        transmission={0.95}
                        roughness={0.1}
                        thickness={0.2}
                        ior={1.5}
                        clearcoat={1}
                        transparent
                        side={THREE.DoubleSide}
                    />
                )}
                {isTech && (
                    <meshBasicMaterial
                        color="#003300"
                        wireframe
                        transparent
                        opacity={0.5}
                    />
                )}
                {isPaper && (
                    <meshStandardMaterial color="#ffffff" roughness={0.8} />
                )}
            </RoundedBox>

            <Image
                url={item.img}
                position={[0, 1.0, 0.07]}
                scale={imageScale}
                transparent
            />

            <group position={[-1.2, 0.2, 0.07]}>
                <Text
                    position={[0, -0.4, 0]}
                    fontSize={0.25}
                    color={tColor}
                    anchorX="left"
                    anchorY="top"
                    maxWidth={2.4}
                >
                    {item.title}
                </Text>

                <Text
                    position={[0, -0.9, 0]}
                    fontSize={0.18}
                    color={dColor}
                    anchorX="left"
                    anchorY="top"
                    maxWidth={2.4}
                    lineHeight={1.4}
                >
                    {cleanDesc}
                </Text>

                <Text
                    position={[0, -2.0, 0]}
                    fontSize={0.15}
                    color={dtColor}
                    anchorX="left"
                    anchorY="top"
                >
                    {item.date}
                </Text>
            </group>
        </group>
    );
}

function OutsourceCard({ item }: { item: any }) {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!groupRef.current) return;
        const worldPos = new THREE.Vector3();
        groupRef.current.getWorldPosition(worldPos);
        const dist = state.camera.position.distanceTo(worldPos);
        const FADE_NEAR = 15;
        const FADE_FAR = 35;
        let opacity = 1;
        if (dist > FADE_FAR) opacity = 0;
        else if (dist < FADE_NEAR) opacity = 1;
        else opacity = 1 - (dist - FADE_NEAR) / (FADE_FAR - FADE_NEAR);

        groupRef.current.traverse((obj) => {
            if ((obj as THREE.Mesh).isMesh) {
                const mesh = obj as THREE.Mesh;
                const mat = mesh.material as THREE.Material;
                if (mat) {
                    mat.opacity = opacity;
                    mat.transparent = true;
                }
            }
        });
    });

    const handlePointerOver = () => {
        if (item.link) document.body.style.cursor = "pointer";
    };
    const handlePointerOut = () => {
        document.body.style.cursor = "auto";
    };
    const handleClick = () => {
        if (item.link) {
            window.open(item.link, "_blank");
        }
    };

    return (
        <group
            ref={groupRef}
            onClick={handleClick}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
        >
            <RoundedBox args={[5.5, 3.0, 0.1]} radius={0.15} smoothness={4}>
                <meshPhysicalMaterial
                    color="#000000"
                    transmission={0.0}
                    roughness={0.0}
                    metalness={0.0}
                    clearcoat={0.0}
                    transparent
                    opacity={0.0}
                    side={THREE.DoubleSide}
                />
            </RoundedBox>

            <Image
                url={item.img}
                position={[-1.4, 0, 0.06]}
                scale={[2, 1.5]}
                transparent
            />

            <group position={[-0.1, 1.1, 0.06]}>
                <Text
                    color="#ffffff"
                    anchorX="left"
                    anchorY="top"
                    fontSize={0.35}
                    fontWeight={800}
                >
                    {item.title}
                </Text>
                <Text
                    color="#cccccc"
                    anchorX="left"
                    anchorY="top"
                    fontSize={0.2}
                    position={[0, -0.6, 0]}
                    maxWidth={2.6}
                    lineHeight={1.4}
                >
                    {item.desc}
                </Text>
                <Text
                    color="#aaaaaa"
                    anchorX="left"
                    anchorY="top"
                    fontSize={0.15}
                    position={[0, -1.9, 0]}
                >
                    {item.date}
                </Text>
            </group>
        </group>
    );
}

function ItemMesh({
    item,
    style,
    imageScale,
    cardHeight,
    cardWidth,
    side,
}: {
    item: any;
    style?: string;
    imageScale?: [number, number];
    cardHeight?: number;
    cardWidth?: number;
    side?: "left" | "right";
}) {
    if (style === "outsource") {
        return <OutsourceCard item={item} />;
    }
    return (
        <ChildCard
            item={item}
            style={style}
            imageScale={item.imageScale || imageScale}
            cardHeight={cardHeight}
            cardWidth={cardWidth}
            side={side}
        />
    );
}

function SectionGroup({
    position,
    title,
    items,
    color,
    style = "glass",
    imageScale,
    cardHeight,
    description,
}: {
    position: [number, number, number];
    title: string;
    items: any[];
    color: string;
    style?: string;
    imageScale?: [number, number];
    cardHeight?: number;
    description?: string;
}) {
    const isMobile = useMobile();
    const positions = useMemo(() => {
        return items.map((_, i) => {
            let xOffset = style === "horizontal" ? 5.0 : 3.5;
            if (style === "profile") {
                xOffset = isMobile ? 5.0 : 3.5;
            }
            if (style === "skills") xOffset = 5.0;
            
            if (isMobile) {
                // Mobile: arrange top and bottom
                const z = MOBILE_START_Z - Math.floor(i / 2) * MOBILE_SPACING;
                const x = 0;
                const y = i % 2 === 0 ? MOBILE_Y_OFFSET : -MOBILE_Y_OFFSET;
                return [x, y, z] as [number, number, number];
            } else {
                // Desktop: arrange left and right
                const z = DESKTOP_START_Z - i * SECTION_SPACING;
                const x = i % 2 === 0 ? -xOffset : xOffset;
                const y = 0;
                return [x, y, z] as [number, number, number];
            }
        });
    }, [items, style, isMobile]);

    return (
        <group position={position}>
            <Text
                color={color}
                anchorX="center"
                anchorY="middle"
                fontSize={isMobile ? 1.75 : 4}
                fontWeight={900}
                position={[0, isMobile ? 6.9 : 9, SECTION_TITLE_Z]}
                outlineWidth={0.05}
                outlineColor="#000"
                // @ts-ignore
                material-fog={false}
            >
                {title}
            </Text>

            {description && (
                <Text
                    color="#aaaaaa"
                    anchorX="center"
                    anchorY="top"
                    fontSize={isMobile ? 0.3 : 0.6}
                    position={[0, isMobile ? 5.75 : 6.6, SECTION_TITLE_Z]}
                    textAlign="center"
                    maxWidth={20}
                    lineHeight={1.5}
                    outlineWidth={0.02}
                    outlineColor="black"
                >
                    {description}
                </Text>
            )}

            {items.map((item, index) => {
                const [x, y, z] = positions[index];
                const side = index % 2 === 0 ? "left" : "right";

                return (
                    <group key={index} position={[x, y, z]}>
                        <ItemMesh
                            item={item}
                            style={style}
                            imageScale={item.imageScale || imageScale}
                            cardHeight={cardHeight}
                            cardWidth={title === "Experience" ? 6.0 : title === "Skills" ? 5.5 : undefined}
                            side={side}
                        />
                    </group>
                );
            })}
        </group>
    );
}

function LandingSection({ position }: { position: [number, number, number] }) {
    const isMobile = useMobile();
    const titleRef = useRef<any>(null);

    useFrame((state) => {
        if (titleRef.current) {
            const time = state.clock.getElapsedTime();
            const hue = (time * 0.2) % 1;
            titleRef.current.color = new THREE.Color().setHSL(hue, 1, 0.7);
        }
    });

    return (
        <group position={position}>
            <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
                <Text
                    ref={titleRef}
                    anchorX="center"
                    anchorY="middle"
                    fontSize={isMobile ? 1.25 : 3.8}
                    position={[0, isMobile ? 2 : 2.5, 0]}
                    fontWeight={900}
                    outlineWidth={0.02}
                    outlineColor="white"
                    userData={{ name: "landing-title" }}
                >
                    SeongYeon Kim
                </Text>

                <Text
                    color="#cccccc"
                    anchorX="center"
                    anchorY="top"
                    fontSize={isMobile ? 0.5 : 0.7}
                    position={[0, isMobile ? 0.75 : -1.0, 0]}
                    maxWidth={14}
                    textAlign="center"
                    lineHeight={1.6}
                >
                    I'm a student Frontend Developer{"\n"}
                    with a passion for crafting functional,{"\n"}
                    impactful experiences{"\n"}that resonate with users.
                </Text>
            </Float>

            <Float
                speed={3}
                rotationIntensity={0}
                floatIntensity={0.5}
                floatingRange={[0, 0.5]}
            >
                <Image
                    url="img/arrow.png"
                    position={[0, isMobile ? -5 : -7.5, 0]}
                    scale={[1.5, 1.5]}
                    transparent
                    opacity={0.8}
                />
            </Float>
        </group>
    );
}

function FinalSection({ position }: { position: [number, number, number] }) {
    const isMobile = useMobile();
    const titleRef = useRef<any>(null);

    useFrame((state) => {
        if (titleRef.current) {
            const time = state.clock.getElapsedTime();
            const hue = (time * 0.2) % 1;
            titleRef.current.color = new THREE.Color().setHSL(hue, 1, 0.7);
        }
    });

    return (
        <group position={position}>
            <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
                <Text
                    ref={titleRef}
                    anchorX="center"
                    anchorY="middle"
                    fontSize={isMobile ? 1.25 : 3.8}
                    position={[0, isMobile ? 2 : 2.5, 0]}
                    fontWeight={900}
                    outlineWidth={0.02}
                    outlineColor="white"
                >
                    Thank You!
                </Text>

                <Text
                    color="#cccccc"
                    anchorX="center"
                    anchorY="top"
                    fontSize={isMobile ? 0.5 : 0.7}
                    position={[0, isMobile ? 0.75 : -1.0, 0]}
                    maxWidth={14}
                    textAlign="center"
                    lineHeight={1.6}
                >
                    Thank you for exploring my portfolio.{"\n"}
                    I hope you enjoyed the journey{"\n"}
                    through my projects and experiences.
                </Text>
            </Float>
        </group>
    );
}

function ScrollEventHandler() {
    const scroll = useScroll();

    useEffect(() => {
        const handleScrollTo = (e: Event) => {
            const customEvent = e as CustomEvent;
            const targetZ = customEvent.detail;
            const offset = (10 - targetZ) / TOTAL_DEPTH;

            if (scroll.el) {
                const target =
                    offset * (scroll.el.scrollHeight - scroll.el.clientHeight);
                scroll.el.scrollTo({ top: target, behavior: "smooth" });
            }
        };

        window.addEventListener("3d-scroll-to", handleScrollTo);
        return () => window.removeEventListener("3d-scroll-to", handleScrollTo);
    }, [scroll]);

    return null;
}

function MouseReactiveParticles() {
    const particlesRef = useRef<THREE.Points>(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const mouseTargetRef = useRef({ x: 0, y: 0 });
    const basePositionsRef = useRef<Float32Array | null>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Normalize mouse position to -1 to 1
            mouseTargetRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouseTargetRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const positions = useMemo(() => {
        const positions = new Float32Array(PARTICLE_COUNT * 3);
        for (let i = 0; i < PARTICLE_COUNT * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * PARTICLE_SPREAD;
            positions[i + 1] = (Math.random() - 0.5) * PARTICLE_SPREAD;
            positions[i + 2] = (Math.random() - 0.5) * PARTICLE_SPREAD;
        }
        basePositionsRef.current = new Float32Array(positions);
        return positions;
    }, []);

    useFrame((state) => {
        if (!particlesRef.current || !basePositionsRef.current) return;

        // Smooth mouse interpolation
        mouseRef.current.x +=
            (mouseTargetRef.current.x - mouseRef.current.x) * MOUSE_SMOOTHING;
        mouseRef.current.y +=
            (mouseTargetRef.current.y - mouseRef.current.y) * MOUSE_SMOOTHING;

        const positions = particlesRef.current.geometry.attributes.position
            .array as Float32Array;
        const basePositions = basePositionsRef.current;
        const time = state.clock.getElapsedTime();

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const i3 = i * 3;
            const baseX = basePositions[i3];
            const baseY = basePositions[i3 + 1];
            const baseZ = basePositions[i3 + 2];

            // Calculate mouse influence
            const mouseX = mouseRef.current.x * MOUSE_SCALE;
            const mouseY = mouseRef.current.y * MOUSE_SCALE;
            const distFromMouse = Math.sqrt(
                Math.pow(baseX - mouseX, 2) + Math.pow(baseY - mouseY, 2)
            );

            const influence = Math.max(0, 1 - distFromMouse / MOUSE_INFLUENCE_RADIUS);
            const pushStrength = influence * MOUSE_INFLUENCE;

            // Apply mouse push effect
            const angle = Math.atan2(baseY - mouseY, baseX - mouseX);

            // Calculate new positions from base positions
            positions[i3] =
                baseX +
                Math.cos(angle) * pushStrength +
                Math.sin(time * 0.5 + i * 0.01) * 0.1;
            positions[i3 + 1] =
                baseY +
                Math.sin(angle) * pushStrength +
                Math.cos(time * 0.5 + i * 0.01) * 0.1;
            positions[i3 + 2] =
                baseZ + Math.sin(time * 0.3 + i * 0.02) * 0.2;
        }

        particlesRef.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={PARTICLE_COUNT}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={PARTICLE_SIZE}
                color={PARTICLE_COLOR}
                transparent
                opacity={PARTICLE_OPACITY}
                sizeAttenuation={true}
            />
        </points>
    );
}

function SceneContent() {
    const isMobile = useMobile();

    const SKILLS_ITEMS = [
        {
            title: "HTML",
            desc: "20.07.09~",
            img: "img/html.png",
            imageScale: [1.5, 1.5],
        },
        {
            title: "CSS",
            desc: "20.08.06~",
            img: "img/css.png",
            imageScale: [1.5, 1.5],
        },
        {
            title: "JS",
            desc: "21.01.13~",
            img: "img/js.png",
            imageScale: [1.5, 1.5],
        },
        {
            title: "React",
            desc: "23.05.12~",
            img: "img/react.png",
            imageScale: [1.5, 1.5],
        },
        {
            title: "Next.js",
            desc: "24.02.17~",
            img: "img/nextjs.png",
            imageScale: [1.5, 1.5],
        },
        {
            title: "Three.js",
            desc: "25.12.09~",
            img: "img/3js.png",
            imageScale: [1.5, 1.5],
        },
    ];

    const PROFILE_ITEM = [
        {
            title: "Mail",
            desc: "kinn@kinn.kr",
            img: "img/mail.png",
            link: "mailto:kinn@kinn.kr",
        },
        {
            title: "Instagram",
            desc: "@kinn__sy",
            img: "img/instagram.png",
            link: "https://www.instagram.com/kinn__sy",
        },
        {
            title: "Discord",
            desc: "mrkinn",
            img: "img/discord.png",
            link: "https://discord.com/users/602459845534416896/",
            imageScale: [1.75, 1.3],
        },
        {
            title: "Linkedin",
            desc: "SeongYeon Kim",
            img: "img/linkedin.png",
            link: "https://www.linkedin.com/in/%E3%85%A4seongyeon-kim-223994296/",
        },
        {
            title: "GitHub",
            desc: "MisterKinn",
            img: "img/github.png",
            link: "https://github.com/MisterKinn",
        },
    ];

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <fog attach="fog" args={["#050505", 10, 40]} />
            <Environment preset="city" />

            {/* Mouse Reactive Particles */}
            <MouseReactiveParticles />

            <LandingSection position={[0, 0, -15]} />

            <SectionGroup
                position={[0, 0, -60]}
                title="Portfolio"
                items={PORTFOLIO_ITEMS}
                color="#4ecdc4"
                imageScale={[2, 2]}
                cardHeight={4.6}
                description={
                    "Crafting impactful Frontend projects\nthat deliver ecstatic experience for lasting impressions.\nClick the card to try captivating project."
                }
            />

            <SectionGroup
                position={[0, 0, -130]}
                title="Outsource"
                items={OUTSOURCE_ITEMS}
                color="#ffe66d"
                style="outsource"
                description={
                    "Building extraordinary outsourcing results\nthat pleases the clients.\nClick the card to see the detail."
                }
            />

            <SectionGroup
                position={[0, 0, -160]}
                title="Experience"
                items={EXPERIENCE_ITEMS}
                color="#1a535c"
                style="horizontal"
                imageScale={[2, 2]}
                description={
                    "Explore my journey of learning and growth\nthrough invaluable opportunities.\nClick the card to see the detail."
                }
            />

            <SectionGroup
                position={[0, 0, -200]}
                title="Skills"
                items={SKILLS_ITEMS}
                color="#ff00ff"
                style="skills"
                imageScale={[2, 2]}
                description={
                    "Creating immersive web experiences with cutting-edge technologies."
                }
            />

            <SectionGroup
                position={[0, 0, -250]}
                title="Profile"
                items={PROFILE_ITEM}
                color="#f7fff7"
                style="profile"
                imageScale={[2, 1.5]}
                description={
                    "Build deeper connection with me in every ways.\nClick the card to connect with me."
                }
            />

            <FinalSection position={[0, 0, -TOTAL_DEPTH]} />

            <Stars
                radius={150}
                depth={100}
                count={8000}
                factor={4}
                saturation={0}
                fade
                speed={1}
            />
        </>
    );
}

export default function ScrollStage({
    onLoaded,
}: {
    onLoaded?: () => void;
}) {
    const loadedRef = useRef(false);

    const handleCanvasCreated = () => {
        if (!loadedRef.current && onLoaded) {
            loadedRef.current = true;
            setTimeout(() => {
                onLoaded?.();
            }, CANVAS_LOAD_DELAY);
        }
    };

    return (
        <div className="scroll-stage-container">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 50 }}
                onCreated={handleCanvasCreated}
            >
                <ScrollControls pages={SCROLL_PAGES} damping={0.2}>
                    <CameraController totalDepth={TOTAL_DEPTH} />
                    <ScrollEventHandler />
                    <SceneContent />
                </ScrollControls>
            </Canvas>
        </div>
    );
}
