"use client";
import { NextPage } from "next";
import { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import "../../styles/style.css";
import AOS from "aos";
import "@/styles/aos.css";
import "../../styles/f1strategy.css";

function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-montserrat">
            <div className="home">
                <img src="img/f1.jpg" className="header-img" />
                <div className="header-container">
                    <div className="f1-container">
                        <img src="img/f1-logo.png" className="title" />
                    </div>
                </div>
            </div>
            <header className="relative bg-cover bg-center h-64 checkered-bg">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-center pt-16">
                    <h1 className="text-5xl font-extrabold tracking-tight text-white"></h1>
                </div>
            </header>
            <main className="max-w-5xl mx-auto p-8">
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
                        What is Formula 1?
                    </h2>
                    <p className="text-lg mb-4" data-aos="fade-up">
                        Formula 1 (F1) is the pinnacle of open-wheel motorsport,
                        established in 1950
                        <br /> It features the world's most advanced race cars,
                        driven by top talents across 20+ races annually on
                        iconic circuits like Monaco, Silverstone,
                        Spa-Francorchamps, and such.
                        <br />
                        Each race, or Grand Prix, typically spans 305 km (190
                        miles) or a 2-hour time limit, whichever comes first,
                        with a championship decided by points over the season.
                    </p>
                    <p className="text-lg mb-4" data-aos="fade-up">
                        F1 cars are technological marvels, powered by 1.6-liter
                        V6 turbo-hybrid engines producing over 1,000 horsepower.
                        <br />
                        Teams invest heavily in aerodynamics, tire management,
                        and strategy, with races often won or lost based on pit
                        stop decisions and tire choices.
                        <br />
                        The 2025 season, starting March 16 in Melbourne,
                        includes 24 races, showcasing cutting-edge engineering
                        and driver skill.
                    </p>
                    <p className="text-lg mb-4" data-aos="fade-up">
                        Key rules include a minimum race distance of 305 km,
                        mandatory pit stops to change tires at least once, and
                        the use of two different tire compounds per race.
                        <br />
                        Safety innovations like the Halo device and hybrid power
                        units reflect F1's commitment to progress, making it a
                        blend of sport and science.
                    </p>
                </section>
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
                        F1 Tire Strategy Basics
                    </h2>
                    <p className="text-lg mb-4" data-aos="fade-up">
                        Tire strategy is a critical factor in F1, managed by
                        Pirelli, the sport's sole tire supplier since 2011.
                        Teams select from five compounds, with strategies
                        tailored to race conditions:
                    </p>
                    <ul
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        data-aos="fade-up"
                    >
                        <li
                            className="bg-gray-800 p-4 rounded-lg shadow-lg"
                            data-aos="fade-up"
                        >
                            <span
                                className="text-red-500 font-bold text-xl"
                                data-aos="fade-up"
                            >
                                Soft
                            </span>
                            <p className="mt-2" data-aos="fade-up">
                                Highest grip, wears out fastest (5-15 laps).
                            </p>
                        </li>
                        <li
                            className="bg-gray-800 p-4 rounded-lg shadow-lg"
                            data-aos="fade-up"
                        >
                            <span
                                className="text-yellow-400 font-bold text-xl"
                                data-aos="fade-up"
                            >
                                Medium
                            </span>
                            <p className="mt-2" data-aos="fade-up">
                                Balanced performance (15-25 laps).
                            </p>
                        </li>
                        <li
                            className="bg-gray-800 p-4 rounded-lg shadow-lg"
                            data-aos="fade-up"
                        >
                            <span
                                className="text-gray-200 font-bold text-xl"
                                data-aos="fade-up"
                            >
                                Hard
                            </span>
                            <p className="mt-2" data-aos="fade-up">
                                Most durable, slower pace (25+ laps).
                            </p>
                        </li>
                        <li
                            className="bg-gray-800 p-4 rounded-lg shadow-lg"
                            data-aos="fade-up"
                        >
                            <span
                                className="text-green-400 font-bold text-xl"
                                data-aos="fade-up"
                            >
                                Intermediate
                            </span>
                            <p className="mt-2" data-aos="fade-up">
                                For damp conditions, transitional weather.
                            </p>
                        </li>
                        <li
                            className="bg-gray-800 p-4 rounded-lg shadow-lg"
                            data-aos="fade-up"
                        >
                            <span
                                className="text-blue-400 font-bold text-xl"
                                data-aos="fade-up"
                            >
                                Wet
                            </span>
                            <p className="mt-2" data-aos="fade-up">
                                Full wet conditions, maximum grip.
                            </p>
                        </li>
                    </ul>
                    <p className="text-lg mt-4" data-aos="fade-up">
                        Teams must use at least two compounds and pit at least
                        once per race, with strategies varying from 1-stop to
                        2-stop plans based on race lap counts.
                    </p>
                </section>
                <section className="mb-12" data-aos="fade-up">
                    <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
                        Strategy Examples
                    </h2>
                    <p className="text-lg mb-4" data-aos="fade-up">
                        For a typical race, strategies might include:
                    </p>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        data-aos="fade-up"
                    >
                        <div
                            className="bg-gray-800 p-6 rounded-lg shadow-lg"
                            data-aos="fade-up"
                        >
                            <h3
                                className="text-xl font-semibold mb-4"
                                data-aos="fade-up"
                            >
                                1-Stop
                            </h3>
                            <div
                                className="flex items-center mb-2"
                                data-aos="fade-up"
                            >
                                <div
                                    className="w-32 h-4 bg-yellow-400 rounded mr-2"
                                    data-aos="fade-up"
                                ></div>
                                <p>Laps 1-30: Medium</p>
                            </div>
                            <div
                                className="flex items-center"
                                data-aos="fade-up"
                            >
                                <div
                                    className="w-32 h-4 bg-gray-200 rounded mr-2"
                                    data-aos="fade-up"
                                ></div>
                                <p>Laps 31-56: Hard</p>
                            </div>
                        </div>
                        <div
                            className="bg-gray-800 p-6 rounded-lg shadow-lg"
                            data-aos="fade-up"
                        >
                            <h3
                                className="text-xl font-semibold mb-4"
                                data-aos="fade-up"
                            >
                                2-Stop
                            </h3>
                            <div
                                className="flex items-center mb-2"
                                data-aos="fade-up"
                            >
                                <div
                                    className="w-24 h-4 bg-red-500 rounded mr-2"
                                    data-aos="fade-up"
                                ></div>
                                <p>Laps 1-18: Soft</p>
                            </div>
                            <div
                                className="flex items-center mb-2"
                                data-aos="fade-up"
                            >
                                <div
                                    className="w-24 h-4 bg-yellow-400 rounded mr-2"
                                    data-aos="fade-up"
                                ></div>
                                <p>Laps 19-38: Medium</p>
                            </div>
                            <div
                                className="flex items-center"
                                data-aos="fade-up"
                            >
                                <div
                                    className="w-24 h-4 bg-gray-200 rounded mr-2"
                                    data-aos="fade-up"
                                ></div>
                                <p>Laps 39-56: Hard</p>
                            </div>
                        </div>
                    </div>
                </section>

                <main className="max-w-5xl mx-auto p-8" data-aos="fade-up">
                    <section className="mb-12" data-aos="fade-up">
                        <h2
                            className="text-3xl font-bold mb-6"
                            data-aos="fade-up"
                        >
                            Real F1 Tire Strategies
                        </h2>
                        <p className="text-lg mb-4" data-aos="fade-up">
                            Formula 1 tire strategies are the heartbeat of race
                            day, crafted by teams like Mercedes, Red Bull, and
                            Ferrari based on track conditions, tire wear, and
                            race length. Pirelli provides five compounds—Soft,
                            Medium, Hard, Intermediate, and Wet—and teams must
                            use at least two during a race. Below are real-world
                            examples from recent seasons, showing how strategy
                            wins championships.
                        </p>
                    </section>
                    <section className="mb-12" data-aos="fade-up">
                        <h2
                            className="text-3xl font-bold mb-6"
                            data-aos="fade-up"
                        >
                            2023 Singapore Grand Prix (1-Stop)
                        </h2>
                        <p className="text-lg mb-4" data-aos="fade-up">
                            Race Length: 62 Laps | Conditions: Hot, Dry
                        </p>
                        <div
                            className="bg-gray-800 p-6 rounded-lg shadow-lg"
                            data-aos="fade-up"
                        >
                            <h3
                                className="text-xl font-semibold mb-4"
                                data-aos="fade-up"
                            >
                                Carlos Sainz (Ferrari) - Victory Strategy
                            </h3>
                            <div
                                className="flex items-center mb-2"
                                data-aos="fade-up"
                            >
                                <div
                                    className="w-32 h-4 bg-yellow-400 rounded mr-2"
                                    data-aos="fade-up"
                                ></div>
                                <p>Laps 1-32: Medium</p>
                            </div>
                            <div
                                className="flex items-center"
                                data-aos="fade-up"
                            >
                                <div
                                    className="w-32 h-4 bg-gray-200 rounded mr-2"
                                    data-aos="fade-up"
                                ></div>
                                <p>Laps 33-62: Hard</p>
                            </div>
                            <p className="mt-4 text-lg" data-aos="fade-up">
                                Sainz’s one-stop gamble on Medium to Hard tires
                                capitalized on low degradation in Singapore’s
                                humid conditions, holding off Lando Norris for
                                the win.
                            </p>
                        </div>
                    </section>
                    <section className="mb-12" data-aos="fade-up">
                        <h2
                            className="text-3xl font-bold mb-6"
                            data-aos="fade-up"
                        >
                            2024 British Grand Prix (2-Stop)
                        </h2>
                        <p className="text-lg mb-4" data-aos="fade-up">
                            Race Length: 52 Laps | Conditions: Wet to Dry
                        </p>
                        <div
                            className="bg-gray-800 p-6 rounded-lg shadow-lg"
                            data-aos="fade-up"
                        >
                            <h3
                                className="text-xl font-semibold mb-4"
                                data-aos="fade-up"
                            >
                                Max Verstappen (Red Bull) - P2 Finish
                            </h3>
                            <div
                                className="flex items-center mb-2"
                                data-aos="fade-up"
                            >
                                <div
                                    className="w-24 h-4 bg-blue-400 rounded mr-2"
                                    data-aos="fade-up"
                                ></div>
                                <p>Laps 1-15: Wet</p>
                            </div>
                            <div
                                className="flex items-center mb-2"
                                data-aos="fade-up"
                            >
                                <div
                                    className="w-24 h-4 bg-green-400 rounded mr-2"
                                    data-aos="fade-up"
                                ></div>
                                <p>Laps 16-35: Intermediate</p>
                            </div>
                            <div
                                className="flex items-center"
                                data-aos="fade-up"
                            >
                                <div
                                    className="w-24 h-4 bg-yellow-400 rounded mr-2"
                                    data-aos="fade-up"
                                ></div>
                                <p>Laps 36-52: Medium</p>
                            </div>
                            <p className="mt-4 text-lg" data-aos="fade-up">
                                Verstappen’s two-stop strategy navigated
                                Silverstone’s shifting weather, switching from
                                Wet to Intermediate to Medium, securing a strong
                                second place.
                            </p>
                        </div>
                    </section>
                    <section className="mb-12" data-aos="fade-up">
                        <h2
                            className="text-3xl font-bold mb-6"
                            data-aos="fade-up"
                        >
                            2023 Monaco Grand Prix (1-Stop)
                        </h2>
                        <p className="text-lg mb-4" data-aos="fade-up">
                            Race Length: 78 Laps | Conditions: Dry
                        </p>
                        <div
                            className="bg-gray-800 p-6 rounded-lg shadow-lg"
                            data-aos="fade-up"
                        >
                            <h3
                                className="text-xl font-semibold mb-4"
                                data-aos="fade-up"
                            >
                                Lewis Hamilton (Mercedes) - P4 Finish
                            </h3>
                            <div
                                className="flex items-center mb-2"
                                data-aos="fade-up"
                            >
                                <div
                                    className="w-32 h-4 bg-red-500 rounded mr-2"
                                    data-aos="fade-up"
                                ></div>
                                <p>Laps 1-40: Soft</p>
                            </div>
                            <div
                                className="flex items-center"
                                data-aos="fade-up"
                            >
                                <div
                                    className="w-32 h-4 bg-gray-200 rounded mr-2"
                                    data-aos="fade-up"
                                ></div>
                                <p>Laps 41-78: Hard</p>
                            </div>
                            <p className="mt-4 text-lg" data-aos="fade-up">
                                Hamilton’s one-stop strategy on Soft to Hard
                                tires managed Monaco’s tight streets, overcoming
                                tire wear for a solid fourth.
                            </p>
                        </div>
                    </section>
                </main>
                <div className="text-center" data-aos="fade-up">
                    <Link href="/strategy" data-aos="fade-up">
                        <button className="bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-all duration-300 shadow-lg">
                            Try It Out
                        </button>
                    </Link>
                    <div className="blank" />
                </div>
            </main>
            <footer className="bg-black py-4 text-center text-gray-400">
                <p>&copy; 2025 Kinn. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
