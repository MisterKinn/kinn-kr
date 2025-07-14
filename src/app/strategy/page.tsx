"use client";
import { useState, useEffect } from "react";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import "../../styles/f1strategy.css";

interface RaceCondition {
    weather: string;
    trackTemp: string;
    trackCondition: string;
}

interface Stint {
    tire: string;
    laps: number;
}

interface Strategy {
    stops: number;
    stints: Stint[];
}

const StrategyPage: NextPage = () => {
    const [raceConditions, setRaceConditions] = useState<RaceCondition>({
        weather: "Dry",
        trackTemp: "28°C",
        trackCondition: "Medium Grip",
    });
    const [userStrategy, setUserStrategy] = useState<Strategy | null>(null);
    const [score, setScore] = useState<number | null>(null);
    const [totalRaceLaps, setTotalRaceLaps] = useState<number>(56);

    // Randomize race conditions and laps on mount
    useEffect(() => {
        const randomWeather = ["Dry", "Wet", "Mixed"][
            Math.floor(Math.random() * 3)
        ];
        const randomTemp = `${Math.floor(Math.random() * 15 + 20)}°C`;
        const randomCondition = ["Low Grip", "Medium Grip", "High Grip"][
            Math.floor(Math.random() * 3)
        ];
        const randomLaps = Math.floor(Math.random() * (80 - 50 + 1)) + 50; // Random between 50 and 80
        setRaceConditions({
            weather: randomWeather,
            trackTemp: randomTemp,
            trackCondition: randomCondition,
        });
        setTotalRaceLaps(randomLaps);
    }, []);

    // Decision tree for optimal strategy
    const getOptimalStrategy = (): Strategy => {
        if (raceConditions.weather === "Wet") {
            return {
                stops: 1,
                stints: [{ tire: "Wet", laps: totalRaceLaps }],
            };
        }
        if (
            raceConditions.weather === "Mixed" ||
            raceConditions.trackTemp > "30°C"
        ) {
            return {
                stops: 2,
                stints: [
                    {
                        tire: "Intermediate",
                        laps: Math.floor(totalRaceLaps / 3),
                    },
                    { tire: "Medium", laps: Math.floor(totalRaceLaps / 3) },
                    {
                        tire: "Hard",
                        laps: totalRaceLaps - 2 * Math.floor(totalRaceLaps / 3),
                    },
                ],
            };
        }
        return {
            stops: 1,
            stints: [
                { tire: "Medium", laps: Math.floor(totalRaceLaps * 0.6) },
                {
                    tire: "Hard",
                    laps: totalRaceLaps - Math.floor(totalRaceLaps * 0.6),
                },
            ],
        };
    };

    const optimalStrategy = getOptimalStrategy();

    // Score calculation based on tire and lap match
    const calculateScore = (userStints: Stint[]): number => {
        const optimalTires = optimalStrategy.stints.map((s) => s.tire);
        const userTires = userStints.map((s) => s.tire);
        const lapDiff = userStints.reduce(
            (sum, stint, i) =>
                sum +
                Math.abs(stint.laps - optimalStrategy.stints[i]?.laps || 0),
            0
        );
        const tireMatches = userTires.filter(
            (t, i) => t === optimalTires[i]
        ).length;
        const maxScore = 100;
        return Math.max(
            0,
            maxScore - lapDiff * 2 - (optimalTires.length - tireMatches) * 20
        );
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const stops = parseInt((e.target as any).stops.value);
        const stints: Stint[] =
            stops === 1
                ? [
                      {
                          tire: (e.target as any).tire1.value,
                          laps: parseInt((e.target as any).laps1.value),
                      },
                      {
                          tire: (e.target as any).tire2.value,
                          laps: parseInt((e.target as any).laps2.value),
                      },
                  ]
                : [
                      {
                          tire: (e.target as any).tire1.value,
                          laps: parseInt((e.target as any).laps1.value),
                      },
                      {
                          tire: (e.target as any).tire2.value,
                          laps: parseInt((e.target as any).laps2.value),
                      },
                      {
                          tire: (e.target as any).tire3.value,
                          laps: parseInt((e.target as any).laps3.value),
                      },
                  ].filter((s) => s.laps > 0);
        const totalLaps = stints.reduce((sum, s) => sum + s.laps, 0);
        if (totalLaps !== totalRaceLaps) {
            alert(
                `Total laps must equal ${totalRaceLaps}! You entered ${totalLaps} laps.`
            );
            return;
        }
        setUserStrategy({ stops, stints });
        setScore(calculateScore(stints));
    };

    const [stops, setStops] = useState<number>(1); // Track selected stops to show/hide third stint

    const handleStopsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setStops(parseInt(e.target.value));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-montserrat">
            <Head>
                <title>F1 Tire Strategy Simulator</title>
                <meta
                    name="description"
                    content="Simulate and optimize F1 tire strategies"
                />
            </Head>
            <header className="bg-black py-6 text-center">
                <h1 className="text-4xl font-extrabold">
                    Tire Strategy Simulator
                </h1>
                <p className="mt-2 text-lg">
                    Race Length: {totalRaceLaps} Laps
                </p>
                <Link
                    href="../f1strategy"
                    className="text-blue-400 hover:underline mt-2 inline-block"
                >
                    Back to Info
                </Link>
            </header>
            <main className="max-w-5xl mx-auto p-8">
                <section className="mb-8">
                    <h2 className="text-3xl font-bold mb-6">Race Conditions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                            <p>
                                Weather:{" "}
                                <span className="font-semibold">
                                    {raceConditions.weather}
                                </span>
                            </p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                            <p>
                                Track Temp:{" "}
                                <span className="font-semibold">
                                    {raceConditions.trackTemp}
                                </span>
                            </p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                            <p>
                                Track Condition:{" "}
                                <span className="font-semibold">
                                    {raceConditions.trackCondition}
                                </span>
                            </p>
                        </div>
                    </div>
                </section>
                <section className="mb-8">
                    <h2 className="text-3xl font-bold mb-6">
                        Plan Your Strategy
                    </h2>
                    <form
                        onSubmit={handleSubmit}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg"
                    >
                        <div className="mb-4">
                            <label className="block text-lg mb-2">
                                Number of Stops:
                            </label>
                            <select
                                name="stops"
                                value={stops}
                                onChange={handleStopsChange}
                                className="bg-gray-700 p-2 rounded w-full text-white"
                            >
                                <option value="1">1 Stop</option>
                                <option value="2">2 Stops</option>
                            </select>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-lg mb-2">
                                    Stint 1 Tire:
                                </label>
                                <select
                                    name="tire1"
                                    className="bg-gray-700 p-2 rounded w-full text-white"
                                >
                                    <option value="Soft">Soft</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Hard">Hard</option>
                                    <option value="Intermediate">
                                        Intermediate
                                    </option>
                                    <option value="Wet">Wet</option>
                                </select>
                                <label className="block text-lg mt-2 mb-2">
                                    Stint 1 Laps:
                                </label>
                                <input
                                    type="number"
                                    name="laps1"
                                    className="bg-gray-700 p-2 rounded w-full text-white"
                                    min="1"
                                    max={totalRaceLaps}
                                />
                            </div>
                            <div>
                                <label className="block text-lg mb-2">
                                    Stint 2 Tire:
                                </label>
                                <select
                                    name="tire2"
                                    className="bg-gray-700 p-2 rounded w-full text-white"
                                >
                                    <option value="Soft">Soft</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Hard">Hard</option>
                                    <option value="Intermediate">
                                        Intermediate
                                    </option>
                                    <option value="Wet">Wet</option>
                                </select>
                                <label className="block text-lg mt-2 mb-2">
                                    Stint 2 Laps:
                                </label>
                                <input
                                    type="number"
                                    name="laps2"
                                    className="bg-gray-700 p-2 rounded w-full text-white"
                                    min="1"
                                    max={totalRaceLaps}
                                />
                            </div>
                        </div>
                        {stops === 2 && (
                            <div className="mt-6">
                                <label className="block text-lg mb-2">
                                    Stint 3 Tire:
                                </label>
                                <select
                                    name="tire3"
                                    className="bg-gray-700 p-2 rounded w-full text-white"
                                >
                                    <option value="Soft">Soft</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Hard">Hard</option>
                                    <option value="Intermediate">
                                        Intermediate
                                    </option>
                                    <option value="Wet">Wet</option>
                                </select>
                                <label className="block text-lg mt-2 mb-2">
                                    Stint 3 Laps:
                                </label>
                                <input
                                    type="number"
                                    name="laps3"
                                    className="bg-gray-700 p-2 rounded w-full text-white"
                                    min="1"
                                    max={totalRaceLaps}
                                />
                            </div>
                        )}
                        <button
                            type="submit"
                            className="bg-red-600 text-white px-6 py-2 rounded-full font-bold mt-6 hover:bg-red-700 transition-all duration-300 shadow-lg"
                        >
                            Submit Strategy
                        </button>
                    </form>
                </section>
                {userStrategy && (
                    <section className="mt-8">
                        <h2 className="text-3xl font-bold mb-6">Results</h2>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <p className="text-lg mb-2">
                                Optimal Strategy:{" "}
                                {optimalStrategy.stints
                                    .map((s) => `${s.tire} (${s.laps} laps)`)
                                    .join(" → ")}
                            </p>
                            <p className="text-lg mb-2">
                                Your Strategy:{" "}
                                {userStrategy.stints
                                    .map((s) => `${s.tire} (${s.laps} laps)`)
                                    .join(" → ")}
                            </p>
                            <p className="text-xl font-bold">
                                Score: {score !== null ? `${score}/100` : "N/A"}
                            </p>
                        </div>
                    </section>
                )}
            </main>

            <footer className="bg-black py-4 text-center text-gray-400">
                <p>&copy; 2025 Kinn. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default StrategyPage;
