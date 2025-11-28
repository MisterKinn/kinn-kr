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
    rainProbability: number;
}

interface WeatherStint {
    startRangeMin: number;
    startRangeMax: number;
    durationMin: number;
    durationMax: number;
    weather: string;
    rainProbability: number;
    actualStart: number;
    actualDuration: number;
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
        weather: "",
        trackTemp: "",
        trackCondition: "",
        rainProbability: 10,
    });
    const [userStrategy, setUserStrategy] = useState<Strategy | null>(null);
    const [score, setScore] = useState<number | null>(null);
    const [totalRaceLaps, setTotalRaceLaps] = useState<number>(56);
    const [stintLaps, setStintLaps] = useState<number[]>([0, 0, 0]);
    const [weatherForecast, setWeatherForecast] = useState<WeatherStint[]>([]);
    const [stops, setStops] = useState<number>(1);

    useEffect(() => {
        const randomLaps = Math.floor(Math.random() * (70 - 30 + 1)) + 30;
        setTotalRaceLaps(randomLaps);

        const numStints = Math.floor(Math.random() * 4) + 1;
        const weatherTypes = [
            "Sunny",
            "Cloudy",
            "Light Rain",
            "Heavy Rain",
        ] as const;
        type WeatherType = (typeof weatherTypes)[number];
        const selectedWeather: WeatherType[] = [];
        for (let i = 0; i < numStints; i++) {
            const weather = weatherTypes[
                Math.floor(Math.random() * weatherTypes.length)
            ] as WeatherType;
            selectedWeather.push(weather);
        }

        const baseStints = selectedWeather.map((weather, index) => {
            const baseRanges: Record<
                WeatherType,
                {
                    startRangeMin: number;
                    startRangeMax: number;
                    durationMin: number;
                    durationMax: number;
                }
            > = {
                Sunny: {
                    startRangeMin: 1,
                    startRangeMax: 17,
                    durationMin: 0,
                    durationMax: 0,
                },
                Cloudy: {
                    startRangeMin: 18,
                    startRangeMax: 37,
                    durationMin: 0,
                    durationMax: 0,
                },
                "Light Rain": {
                    startRangeMin: 25,
                    startRangeMax: 50,
                    durationMin: 1,
                    durationMax: 5,
                },
                "Heavy Rain": {
                    startRangeMin: 38,
                    startRangeMax: 70,
                    durationMin: 1,
                    durationMax: 5,
                },
            };
            const range = baseRanges[weather];
            return {
                startRangeMin: Math.floor(
                    (range.startRangeMin / 70) * randomLaps
                ),
                startRangeMax: Math.floor(
                    (range.startRangeMax / 70) * randomLaps
                ),
                durationMin: range.durationMin,
                durationMax: range.durationMax,
                weather: weather,
                baseProbability:
                    {
                        Sunny: 10,
                        Cloudy: 5,
                        "Light Rain": 50,
                        "Heavy Rain": 70,
                    }[weather] || 10,
            };
        });

        const scaledStints = baseStints.map((stint) => {
            const rangeSize = stint.startRangeMax - stint.startRangeMin + 1;
            const maxDuration =
                stint.weather === "Sunny" || stint.weather === "Cloudy"
                    ? rangeSize
                    : Math.min(rangeSize - 1, stint.durationMax);
            return {
                startRangeMin: stint.startRangeMin,
                startRangeMax: stint.startRangeMax,
                durationMin: stint.durationMin,
                durationMax: maxDuration,
                weather: stint.weather,
                rainProbability: Math.floor(Math.random() * 101),
                actualStart:
                    Math.floor(
                        Math.random() *
                            (stint.startRangeMax - stint.startRangeMin + 1)
                    ) + stint.startRangeMin,
                actualDuration:
                    stint.weather === "Sunny" || stint.weather === "Cloudy"
                        ? Math.floor(Math.random() * (maxDuration + 1))
                        : Math.floor(
                              Math.random() *
                                  (maxDuration - stint.durationMin + 1)
                          ) + stint.durationMin,
            };
        });

        let currentLap = 0;
        scaledStints.forEach((stint, index) => {
            stint.actualStart = Math.max(currentLap + 1, stint.actualStart);
            const endLap = stint.actualStart + stint.actualDuration - 1;
            if (index < scaledStints.length - 1) {
                currentLap = Math.min(
                    endLap,
                    scaledStints[index + 1].actualStart - 1
                );
            } else {
                currentLap = Math.min(endLap, randomLaps);
            }
            stint.actualDuration = currentLap - stint.actualStart + 1;
        });

        const trackTemp = `${Math.floor(Math.random() * (40 - 15 + 1)) + 15}°C`;
        const trackConditions = ["Dry", "Damp", "Wet"];
        const trackCondition =
            trackConditions[Math.floor(Math.random() * trackConditions.length)];

        setWeatherForecast(scaledStints);
        setRaceConditions({
            ...raceConditions,
            weather: scaledStints[0].weather,
            rainProbability: scaledStints[0].rainProbability,
            trackTemp,
            trackCondition,
        });
        setStintLaps([0, 0, 0, 0]);
    }, []);

    const getOptimalStrategy = (): Strategy => {
        if (weatherForecast.length === 0)
            return {
                stops: 1,
                stints: [{ tire: "Medium", laps: totalRaceLaps }],
            };

        let currentLap = 0;
        let stints: Stint[] = []; // Changed from const to let
        let stops = 0;

        weatherForecast.forEach((stint, index) => {
            const remainingLaps = totalRaceLaps - currentLap;
            const stintLaps = Math.min(
                remainingLaps,
                Math.max(
                    1,
                    Math.floor(
                        stint.actualDuration *
                            (totalRaceLaps / (currentLap + 1)) || 1
                    )
                )
            );

            let tire = "";
            if (index === 0) {
                if (
                    raceConditions.trackCondition === "Wet" &&
                    (raceConditions.weather === "Light Rain" ||
                        raceConditions.weather === "Heavy Rain")
                ) {
                    tire = "Wet";
                } else if (raceConditions.trackCondition === "Wet") {
                    tire = "Intermediate";
                } else if (stint.weather === "Light Rain") {
                    tire = "Intermediate";
                } else if (stint.weather === "Heavy Rain") {
                    tire = "Wet";
                } else {
                    tire = "Medium";
                }
            } else {
                if (stint.rainProbability > 70) tire = "Wet";
                else if (stint.rainProbability > 45) tire = "Intermediate";
                else tire = "Medium";
            }

            if (index > 0 && tire !== stints[stints.length - 1].tire) stops++;

            stints.push({ tire, laps: stintLaps });
            currentLap += stintLaps;
        });

        const totalAssignedLaps = stints.reduce((sum, s) => sum + s.laps, 0);
        if (
            totalAssignedLaps !== totalRaceLaps ||
            stints.some((s) => s.laps === 0)
        ) {
            const validStints = stints.filter((s) => s.laps > 0);
            if (validStints.length === 0) {
                validStints.push({ tire: "Medium", laps: totalRaceLaps });
            } else {
                const remainingLaps =
                    totalRaceLaps -
                    validStints.reduce((sum, s) => sum + s.laps, 0);
                if (remainingLaps > 0) {
                    const lapsPerStint = Math.floor(
                        remainingLaps / validStints.length
                    );
                    validStints.forEach((s, i) => {
                        validStints[i].laps += lapsPerStint;
                    });
                    const finalAdjustment =
                        remainingLaps - lapsPerStint * validStints.length;
                    validStints[validStints.length - 1].laps += finalAdjustment;
                }
            }
            stops = validStints.length - 1;
            stints = validStints; // Reassignment is now allowed with let
        }

        // Enforce two different tire compounds if weather is not "Heavy Rain" and track condition is not "Wet"
        if (
            raceConditions.weather !== "Heavy Rain" &&
            raceConditions.trackCondition !== "Wet"
        ) {
            const uniqueTires = new Set(stints.map((s) => s.tire));
            if (uniqueTires.size < 2) {
                stops = Math.max(1, stops); // Ensure at least one stop
                if (stints.length === 1) {
                    const secondTire =
                        stints[0].tire === "Medium" ? "Hard" : "Medium";
                    const firstHalf = Math.ceil(totalRaceLaps / 2);
                    const secondHalf = totalRaceLaps - firstHalf;
                    stints = [
                        { tire: stints[0].tire, laps: firstHalf },
                        { tire: secondTire, laps: secondHalf },
                    ]; // Reassign with new array
                } else {
                    // Ensure the second stint has a different tire
                    const firstTire = stints[0].tire;
                    const secondTire =
                        firstTire === "Medium" ? "Hard" : "Medium";
                    stints[1].tire = secondTire;
                }
            }
        }

        const isFullWet = weatherForecast.every(
            (s) => s.weather === "Heavy Rain" && s.rainProbability > 70
        );
        if (!isFullWet && stops === 0) {
            stops = 1;
            stints.splice(1, 0, {
                tire: stints[0].tire,
                laps: Math.floor(totalRaceLaps / 2),
            });
            stints[0].laps = Math.ceil(totalRaceLaps / 2);
        }

        if (
            totalRaceLaps >= 50 &&
            weatherForecast.some(
                (s) => s.rainProbability > 70 && s.actualStart === 1
            )
        ) {
            if (stops === 0) {
                stops = 1;
                stints.splice(1, 0, {
                    tire: "Wet",
                    laps: Math.floor(totalRaceLaps / 2),
                });
                stints[0].laps = Math.ceil(totalRaceLaps / 2);
            }
        }

        return { stops, stints: stints.filter((s) => s.laps > 0) };
    };

    const optimalStrategy = getOptimalStrategy();

    const calculateScore = (userStints: Stint[]): number => {
        const optimalTires = optimalStrategy.stints.map((s) => s.tire);
        const userTires = userStints.map((s) => s.tire);
        const lapDiff = userStints.reduce(
            (sum, stint, i) =>
                sum +
                Math.abs(stint.laps - (optimalStrategy.stints[i]?.laps || 0)),
            0
        );
        const tireMatches = userTires.filter(
            (t, i) => t === optimalTires[i]
        ).length;
        return Math.max(
            0,
            100 - lapDiff * 2 - (optimalTires.length - tireMatches) * 20
        );
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const stops = parseInt((e.target as any).stops.value);
        if (
            stops === 0 &&
            (weatherForecast.length === 0 ||
                (totalRaceLaps >= 50 &&
                    weatherForecast.some(
                        (s) => s.rainProbability > 70 && s.actualStart === 1
                    )))
        ) {
            alert(
                "0-stop strategy is not allowed in 50+ lap races with over 70% rain probability from the start!"
            );
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
                : stops === 2
                ? [
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
                      {
                          tire: (e.target as any).tire4.value,
                          laps: parseInt((e.target as any).laps4.value),
                      },
                  ].filter((s) => s.laps > 0);
        const totalLaps = stints.reduce((sum, s) => sum + s.laps, 0);

        const firstStintLaps = stints[0].laps;
        const firstStintEndLap = firstStintLaps;
        const applicableWeather = weatherForecast.find(
            (w) =>
                w.actualStart <= firstStintEndLap &&
                w.actualStart + w.actualDuration - 1 >= firstStintEndLap
        );

        if (totalLaps !== totalRaceLaps) {
            alert(
                `Total laps must equal ${totalRaceLaps}! You entered ${totalLaps} laps.`
            );
            return;
        }

        // Enforce two different tire compounds for user's strategy if weather is not "Heavy Rain" and track condition is not "Wet"
        if (
            raceConditions.weather !== "Heavy Rain" &&
            raceConditions.trackCondition !== "Wet"
        ) {
            const uniqueTires = new Set(stints.map((s) => s.tire));
            if (uniqueTires.size < 2) {
                alert(
                    "Please use at least two different tire compounds for this condition!"
                );
                return;
            }
        }

        setUserStrategy({ stops, stints });
        setScore(calculateScore(stints));
    };

    const handleLapChange = (index: number, value: string) => {
        const newLaps = [...stintLaps];
        newLaps[index] = value ? parseInt(value) : 0;
        setStintLaps(newLaps);
    };

    const handleStopsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setStops(parseInt(e.target.value));
        setStintLaps([0, 0, 0, 0]);
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
                    <div className="bg-gray-800 p-4 rounded-lg shadow-lg mt-4">
                        <h3 className="text-xl font-bold mb-2">
                            Weather Forecast
                        </h3>
                        {weatherForecast.map(
                            (stint, index) =>
                                (stint.weather === "Light Rain" ||
                                    stint.weather === "Heavy Rain") && (
                                    <p key={index} className="text-lg">
                                        {stint.weather} expected between laps{" "}
                                        {stint.startRangeMin}-
                                        {stint.startRangeMax} for{" "}
                                        {stint.durationMin}-{stint.durationMax}{" "}
                                        laps ({stint.rainProbability}% chance)
                                    </p>
                                )
                        )}
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
                                <option value="3">3 Stops</option>
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
                                            (stops >= 2 ? stintLaps[2] : 0) +
                                            (stops >= 3
                                                ? stintLaps[3]
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
                                            (stops >= 2 ? stintLaps[2] : 0) +
                                            (stops >= 3
                                                ? stintLaps[3]
                                                : 0))}{" "}
                                    laps
                                </p>
                            </div>
                        </div>
                        {stops >= 2 && (
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
                                            (stops >= 2 ? stintLaps[2] : 0) +
                                            (stops >= 3
                                                ? stintLaps[3]
                                                : 0))}{" "}
                                    laps
                                </p>
                            </div>
                        )}
                        {stops >= 3 && (
                            <div className="mt-6">
                                <label className="block text-lg mb-2">
                                    Stint 4 Tire:
                                </label>
                                <select
                                    name="tire4"
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
                                    Stint 4 Laps:
                                </label>
                                <input
                                    type="number"
                                    name="laps4"
                                    className="bg-gray-700 p-2 rounded w-full text-white"
                                    min="1"
                                    max={totalRaceLaps}
                                    onChange={(e) =>
                                        handleLapChange(3, e.target.value)
                                    }
                                    value={stintLaps[3] || ""}
                                />
                                <p className="text-sm text-gray-400">
                                    Remaining:{" "}
                                    {totalRaceLaps -
                                        (stintLaps[0] +
                                            stintLaps[1] +
                                            (stops >= 2 ? stintLaps[2] : 0) +
                                            (stops >= 3
                                                ? stintLaps[3]
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
