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
    const [stintLaps, setStintLaps] = useState<number[]>([0, 0, 0]); // Track laps for each stint

    useEffect(() => {
        const randomWeather = ["Dry", "Wet", "Mixed"][
            Math.floor(Math.random() * 3)
        ];
        const randomTemp = `${Math.floor(Math.random() * 15 + 20)}°C`;
        const randomCondition = ["Low Grip", "Medium Grip", "High Grip"][
            Math.floor(Math.random() * 3)
        ];
        const randomLaps = Math.floor(Math.random() * (70 - 30 + 1)) + 30; // Random between 30 and 70
        setRaceConditions({
            weather: randomWeather,
            trackTemp: randomTemp,
            trackCondition: randomCondition,
        });
        setTotalRaceLaps(randomLaps);
        setStintLaps([0, 0, 0]); // Reset stint laps on new race conditions
    }, []);

    const getOptimalStrategy = (): Strategy => {
        if (raceConditions.weather === "Wet") {
            return {
                stops: 0,
                stints: [{ tire: "Wet", laps: totalRaceLaps }],
            };
        }

        const tempNum = parseInt(raceConditions.trackTemp.replace("°C", ""));
        let baseTire = "";
        if (raceConditions.trackCondition === "High Grip") baseTire = "Soft";
        else if (raceConditions.trackCondition === "Medium Grip")
            baseTire = "Medium";
        else if (raceConditions.trackCondition === "Low Grip")
            baseTire = "Hard";

        let tempInfluence = "";
        if (tempNum > 30) tempInfluence = "Hard";
        else tempInfluence = "Soft";

        let primaryTire = baseTire;
        if (tempInfluence === "Hard" && baseTire !== "Soft")
            primaryTire = "Hard";
        else if (tempInfluence === "Soft" && baseTire !== "Hard")
            primaryTire = "Soft";

        if (raceConditions.weather === "Mixed") {
            return {
                stops: 2,
                stints: [
                    {
                        tire: "Intermediate",
                        laps: Math.floor(totalRaceLaps * 0.5),
                    },
                    {
                        tire: primaryTire,
                        laps: Math.floor(totalRaceLaps * 0.3),
                    },
                    {
                        tire: "Hard",
                        laps: totalRaceLaps - Math.floor(totalRaceLaps * 0.8),
                    },
                ],
            };
        }

        if (tempNum > 30 || raceConditions.trackCondition === "Low Grip") {
            return {
                stops: 2,
                stints: [
                    {
                        tire: primaryTire,
                        laps: Math.floor(totalRaceLaps * 0.4),
                    },
                    {
                        tire:
                            primaryTire === "Soft"
                                ? "Medium"
                                : primaryTire === "Medium"
                                ? "Hard"
                                : "Medium",
                        laps: Math.floor(totalRaceLaps * 0.4),
                    },
                    {
                        tire: "Hard",
                        laps: totalRaceLaps - Math.floor(totalRaceLaps * 0.8),
                    },
                ],
            };
        }

        return {
            stops: 1,
            stints: [
                { tire: primaryTire, laps: Math.floor(totalRaceLaps * 0.6) },
                {
                    tire: "Hard",
                    laps: totalRaceLaps - Math.floor(totalRaceLaps * 0.6),
                },
            ],
        };
    };

    const optimalStrategy = getOptimalStrategy();

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
        if (stops === 0 && raceConditions.weather !== "Wet") {
            alert("0-stop strategy is only allowed in Wet weather conditions!");
            return;
        }
        const stints: Stint[] =
            stops === 0
                ? [
                      {
                          tire: (e.target as any).tire1.value,
                          laps: parseInt((e.target as any).laps1.value),
                      },
                  ]
                : stops === 1
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

    const handleLapChange = (index: number, value: string) => {
        const newLaps = [...stintLaps];
        newLaps[index] = value ? parseInt(value) : 0;
        setStintLaps(newLaps);
    };

    const [stops, setStops] = useState<number>(1);

    const handleStopsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setStops(parseInt(e.target.value));
        setStintLaps([0, 0, 0]); // Reset laps when stops change
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
                                <option value="0">0 Stop</option>
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
                                    onChange={(e) =>
                                        handleLapChange(0, e.target.value)
                                    }
                                    value={stintLaps[0] || ""}
                                />
                                <p className="text-sm text-gray-400">
                                    Remaining:{" "}
                                    {totalRaceLaps -
                                        (stintLaps[0] +
                                            stintLaps[1] +
                                            (stops >= 2
                                                ? stintLaps[2]
                                                : 0))}{" "}
                                    laps
                                </p>
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
                                    onChange={(e) =>
                                        handleLapChange(1, e.target.value)
                                    }
                                    value={stintLaps[1] || ""}
                                />
                                <p className="text-sm text-gray-400">
                                    Remaining:{" "}
                                    {totalRaceLaps -
                                        (stintLaps[0] +
                                            stintLaps[1] +
                                            (stops >= 2
                                                ? stintLaps[2]
                                                : 0))}{" "}
                                    laps
                                </p>
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
                                    onChange={(e) =>
                                        handleLapChange(2, e.target.value)
                                    }
                                    value={stintLaps[2] || ""}
                                />
                                <p className="text-sm text-gray-400">
                                    Remaining:{" "}
                                    {totalRaceLaps -
                                        (stintLaps[0] +
                                            stintLaps[1] +
                                            (stops >= 2
                                                ? stintLaps[2]
                                                : 0))}{" "}
                                    laps
                                </p>
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
                <p>© 2025 Kinn. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default StrategyPage;
