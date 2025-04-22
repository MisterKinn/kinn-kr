"use client";
import { useState, useEffect } from "react";
import "../../styles/unimatch.css";
import AOS from "aos";
import "@/styles/aos.css";

interface University {
    name: string;
    majors: string[];
    humanitiesAvg: number;
    naturalSciencesAvg: number;
}

interface UniversityWithPercentage extends University {
    humanitiesPercentage: number;
    naturalSciencesPercentage: number;
    adjustedHumanitiesAvg?: number;
    adjustedNaturalSciencesAvg?: number;
    adjustedHumanitiesPercentage?: number;
    adjustedNaturalSciencesPercentage?: number;
}

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const [koreanGrade, setKoreanGrade] = useState<string>("");
    const [mathGrade, setMathGrade] = useState<string>("");
    const [englishGrade, setEnglishGrade] = useState<string>("");
    const [exploration1Grade, setExploration1Grade] = useState<string>("");
    const [exploration2Grade, setExploration2Grade] = useState<string>("");
    const [suggestion, setSuggestion] = useState<
        UniversityWithPercentage[] | { error: string } | null
    >(null);
    const [myAvg, setMyAvg] = useState<number | null>(null);

    const universityData: University[] = [
        {
            name: "서울대",
            majors: ["인문계열 평균", "자연계열 평균"],
            humanitiesAvg: 288.9,
            naturalSciencesAvg: 292.8,
        },
        {
            name: "연세대",
            majors: ["인문계열 평균", "자연계열 평균"],
            humanitiesAvg: 282.9,
            naturalSciencesAvg: 288.2,
        },
        {
            name: "고려대",
            majors: ["인문계열 평균", "자연계열 평균"],
            humanitiesAvg: 282.3,
            naturalSciencesAvg: 287.5,
        },
        {
            name: "성균관대",
            majors: ["인문계열 평균", "자연계열 평균"],
            humanitiesAvg: 276.4,
            naturalSciencesAvg: 284.8,
        },
        {
            name: "서강대",
            majors: ["인문계열 평균", "자연계열 평균"],
            humanitiesAvg: 276,
            naturalSciencesAvg: 283.1,
        },
        {
            name: "한양대",
            majors: ["인문계열 평균", "자연계열 평균"],
            humanitiesAvg: 273.6,
            naturalSciencesAvg: 283.3,
        },
        {
            name: "중앙대",
            majors: ["인문계열 평균", "자연계열 평균"],
            humanitiesAvg: 269.7,
            naturalSciencesAvg: 278.3,
        },
        {
            name: "경희대",
            majors: ["인문계열 평균", "자연계열 평균"],
            humanitiesAvg: 261.1,
            naturalSciencesAvg: 274.4,
        },
        {
            name: "이화여대",
            majors: ["인문계열 평균", "자연계열 평균"],
            humanitiesAvg: 268.1,
            naturalSciencesAvg: 278.9,
        },
        {
            name: "한국외국어대",
            majors: ["인문계열 평균", "자연계열 평균"],
            humanitiesAvg: 264.3,
            naturalSciencesAvg: 278,
        },
        {
            name: "서울시립대",
            majors: ["인문계열 평균", "자연계열 평균"],
            humanitiesAvg: 264.4,
            naturalSciencesAvg: 277.7,
        },
        {
            name: "건국대",
            majors: ["인문계열 평균", "자연계열 평균"],
            humanitiesAvg: 258.6,
            naturalSciencesAvg: 272.4,
        },
        {
            name: "동국대",
            majors: ["인문계열 평균", "자연계열 평균"],
            humanitiesAvg: 255.8,
            naturalSciencesAvg: 272.7,
        },
        {
            name: "홍익대",
            majors: ["인문계열 평균", "자연계열 평균"],
            humanitiesAvg: 253.7,
            naturalSciencesAvg: 273.7,
        },
        {
            name: "숙명여대",
            majors: ["인문계열 평균", "자연계열 평균"],
            humanitiesAvg: 253.2,
            naturalSciencesAvg: 272.1,
        },
        {
            name: "국민대",
            majors: ["인문계열 평균", "자연계열 평균"],
            humanitiesAvg: 242.9,
            naturalSciencesAvg: 263.7,
        },
        {
            name: "숭실대",
            majors: ["인문계열 평균", "자연계열 평균"],
            humanitiesAvg: 245.6,
            naturalSciencesAvg: 266.9,
        },
        {
            name: "세종대",
            majors: ["인문계열 평균", "자연계열 평균"],
            humanitiesAvg: 244.5,
            naturalSciencesAvg: 261.9,
        },
        {
            name: "인하대",
            majors: ["인문계열 평균", "자연계열 평균"],
            humanitiesAvg: 242.1,
            naturalSciencesAvg: 252.2,
        },
        {
            name: "아주대",
            majors: ["인문계열 평균", "자연계열 평균"],
            humanitiesAvg: 242.2,
            naturalSciencesAvg: 249.8,
        },
        {
            name: "단국대",
            majors: ["인문계열 평균", "자연계열 평균"],
            humanitiesAvg: 238.4,
            naturalSciencesAvg: 260,
        },
        {
            name: "가천대",
            majors: ["인문계열 평균", "자연계열 평균"],
            humanitiesAvg: 244.8,
            naturalSciencesAvg: 248.9,
        },
        {
            name: "가톨릭대",
            majors: ["인문계열 평균", "자연계열 평균"],
            humanitiesAvg: 234.6,
            naturalSciencesAvg: 237.1,
        },
        {
            name: "경기대",
            majors: ["인문계열 평균", "자연계열 평균"],
            humanitiesAvg: 231.8,
            naturalSciencesAvg: 237.8,
        },
        {
            name: "대진대",
            majors: ["인문계열 평균", "자연계열 평균"],
            humanitiesAvg: 236.1,
            naturalSciencesAvg: 246.2,
        },
        {
            name: "명지대",
            majors: ["인문계열 평균", "자연계열 평균"],
            humanitiesAvg: 239.6,
            naturalSciencesAvg: 240,
        },
        {
            name: "성결대",
            majors: ["인문계열 평균", "자연계열 평균"],
            humanitiesAvg: 218.8,
            naturalSciencesAvg: 220.1,
        },
        {
            name: "수원대",
            majors: ["인문계열 평균", "자연계열 평균"],
            humanitiesAvg: 240.1,
            naturalSciencesAvg: 264.3,
        },
        {
            name: "신한대",
            majors: ["인문계열 평균", "자연계열 평균"],
            humanitiesAvg: 187.8,
            naturalSciencesAvg: 0,
        },
        {
            name: "안양대",
            majors: ["인문계열 평균", "자연계열 평균"],
            humanitiesAvg: 225.7,
            naturalSciencesAvg: 234.6,
        },
        {
            name: "용인대",
            majors: ["인문계열 평균", "자연계열 평균"],
            humanitiesAvg: 231.2,
            naturalSciencesAvg: 0,
        },
        {
            name: "한국항공대",
            majors: ["인문계열 평균", "자연계열 평균"],
            humanitiesAvg: 0,
            naturalSciencesAvg: 240.1,
        },
        {
            name: "한양대(에리카)",
            majors: ["인문계열 평균", "자연계열 평균"],
            humanitiesAvg: 234.6,
            naturalSciencesAvg: 248.8,
        },
    ];

    const calculatePercentage = (myAvg: number, uniAvg: number) => {
        if (uniAvg === 0) return 0;
        const difference = myAvg - uniAvg;
        let percentage;
        if (myAvg < uniAvg) {
            percentage = 80 - Math.pow(difference, 2) / 2;
        } else {
            percentage = 80 + Math.pow(difference, 2) / 2;
        }
        if (percentage < 0) return 0;
        if (percentage > 100) return 100;
        return percentage;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const korean = parseFloat(koreanGrade);
        const math = parseFloat(mathGrade);
        const english = parseFloat(englishGrade);
        const exploration1 = parseFloat(exploration1Grade);
        const exploration2 = parseFloat(exploration2Grade);

        if (
            isNaN(korean) ||
            isNaN(math) ||
            isNaN(english) ||
            isNaN(exploration1) ||
            isNaN(exploration2) ||
            korean < 0 ||
            korean > 100 ||
            math < 0 ||
            math > 100 ||
            english < 1 ||
            english > 9 ||
            exploration1 < 0 ||
            exploration1 > 100 ||
            exploration2 < 0 ||
            exploration2 > 100
        ) {
            setSuggestion({
                error: "모든 입력란에 정확한 수치를 입력하십시오. (영어: 1-9, 나머지: 0-100)",
            });
            setMyAvg(null);
            return;
        }

        const baseMyAvg = korean + math + (exploration1 + exploration2) / 2;
        let englishPenalty: number;
        switch (english) {
            case 1:
                englishPenalty = 0;
                break;
            case 2:
                englishPenalty = 4;
                break;
            case 3:
                englishPenalty = 3;
                break;
            case 4:
                englishPenalty = 3;
                break;
            case 5:
                englishPenalty = 3;
                break;
            case 6:
                englishPenalty = 3;
                break;
            case 7:
                englishPenalty = 3;
                break;
            case 8:
                englishPenalty = 3;
                break;
            case 9:
                englishPenalty = 3;
                break;
            default:
                englishPenalty = 0;
        }
        const calculatedMyAvg = baseMyAvg - englishPenalty;

        setMyAvg(calculatedMyAvg);

        const adjustedUniversities = [
            "연세대",
            "고려대",
            "서강대",
            "성균관대",
            "한양대",
            "중앙대",
            "경희대",
            "이화여대",
            "서울시립대",
            "건국대",
            "동국대",
            "홍익대",
            "숙명여대",
            "숭실대",
            "세종대",
            "인하대",
            "아주대",
            "성결대",
            "한국항공대",
            "한양대(에리카)",
        ];

        const universitiesWithPercentage = universityData
            .map((uni) => {
                const result: UniversityWithPercentage = {
                    ...uni,
                    humanitiesPercentage: calculatePercentage(
                        calculatedMyAvg,
                        uni.humanitiesAvg
                    ),
                    naturalSciencesPercentage: calculatePercentage(
                        calculatedMyAvg,
                        uni.naturalSciencesAvg
                    ),
                };

                if (adjustedUniversities.includes(uni.name)) {
                    let adjustment = 0;
                    if (["연세대", "고려대"].includes(uni.name)) adjustment = 8;
                    else if (
                        ["서강대", "성균관대", "한양대"].includes(uni.name)
                    )
                        adjustment = 10;
                    else adjustment = 20;

                    if (uni.humanitiesAvg !== 0) {
                        result.adjustedHumanitiesAvg =
                            uni.humanitiesAvg - adjustment;
                        result.adjustedHumanitiesPercentage =
                            calculatePercentage(
                                calculatedMyAvg,
                                result.adjustedHumanitiesAvg
                            );
                    }
                    if (uni.naturalSciencesAvg !== 0) {
                        result.adjustedNaturalSciencesAvg =
                            uni.naturalSciencesAvg - adjustment;
                        result.adjustedNaturalSciencesPercentage =
                            calculatePercentage(
                                calculatedMyAvg,
                                result.adjustedNaturalSciencesAvg
                            );
                    }
                }

                return result;
            })
            .filter(
                (uni) =>
                    (uni.humanitiesPercentage >= 40 &&
                        uni.humanitiesPercentage <= 100) ||
                    (uni.naturalSciencesPercentage >= 40 &&
                        uni.naturalSciencesPercentage <= 100) ||
                    (uni.adjustedHumanitiesPercentage &&
                        uni.adjustedHumanitiesPercentage >= 40 &&
                        uni.adjustedHumanitiesPercentage <= 100) ||
                    (uni.adjustedNaturalSciencesPercentage &&
                        uni.adjustedNaturalSciencesPercentage >= 40 &&
                        uni.adjustedNaturalSciencesPercentage <= 100)
            )
            .sort((a, b) => {
                const aMaxAvg = Math.max(a.humanitiesAvg, a.naturalSciencesAvg);
                const bMaxAvg = Math.max(b.humanitiesAvg, b.naturalSciencesAvg);
                return bMaxAvg - aMaxAvg || b.humanitiesAvg - a.humanitiesAvg;
            });

        setSuggestion(
            universitiesWithPercentage.length > 0
                ? universitiesWithPercentage
                : { error: "해당 성적으로 합격할 수 있는 대학교가 없습니다." }
        );
    };

    return (
        <div className="container">
            <main className="main">
                <h1 className="title">UniMatch</h1>
                <h2>특성화고 학생들을 위한 대학 추천 서비스</h2>

                <form onSubmit={handleSubmit} className="form">
                    <input
                        type="number"
                        value={koreanGrade}
                        onChange={(e) => setKoreanGrade(e.target.value)}
                        placeholder="국어 백분위 (0-100)"
                        className="input"
                        min="0"
                        max="100"
                    />
                    <input
                        type="number"
                        value={mathGrade}
                        onChange={(e) => setMathGrade(e.target.value)}
                        placeholder="수학 백분위 (0-100)"
                        className="input"
                        min="0"
                        max="100"
                    />
                    <input
                        type="number"
                        value={englishGrade}
                        onChange={(e) => setEnglishGrade(e.target.value)}
                        placeholder="영어 등급 (1-9)"
                        className="input"
                        min="1"
                        max="9"
                    />
                    <input
                        type="number"
                        value={exploration1Grade}
                        onChange={(e) => setExploration1Grade(e.target.value)}
                        placeholder="탐구1 백분위 (0-100)"
                        className="input"
                        min="0"
                        max="100"
                    />
                    <input
                        type="number"
                        value={exploration2Grade}
                        onChange={(e) => setExploration2Grade(e.target.value)}
                        placeholder="탐구2 백분위 (0-100)"
                        className="input"
                        min="0"
                        max="100"
                    />
                    <button type="submit" className="button">
                        Get Suggestion
                    </button>
                </form>

                {suggestion && (
                    <div className="result">
                        {myAvg !== null && (
                            <div className="my-avg center">
                                <h3>나의 평균: {myAvg.toFixed(2)}</h3>
                            </div>
                        )}
                        {"error" in suggestion ? (
                            <p className="error">{suggestion.error}</p>
                        ) : (
                            <div className="university-list">
                                <div className="center">
                                    <h3>Recommended Universities</h3>
                                </div>
                                {suggestion.map((uni, index) => (
                                    <div
                                        key={index}
                                        className="university-card"
                                        data-aos="fade-up"
                                    >
                                        <h4>{uni.name}</h4>
                                        <div className="stats">
                                            <div className="stat-item">
                                                <span className="label">
                                                    인문계열 평균 (일반전형)
                                                </span>
                                                <span className="value">
                                                    {uni.humanitiesAvg !== 0
                                                        ? uni.humanitiesAvg.toFixed(
                                                              2
                                                          )
                                                        : "데이터 없음"}
                                                </span>
                                                <span className="percentage">
                                                    적합도:{" "}
                                                    {uni.humanitiesPercentage.toFixed(
                                                        2
                                                    )}
                                                    %
                                                </span>
                                            </div>
                                            <div className="stat-item">
                                                <span className="label">
                                                    자연계열 평균 (일반전형)
                                                </span>
                                                <span className="value">
                                                    {uni.naturalSciencesAvg !==
                                                    0
                                                        ? uni.naturalSciencesAvg.toFixed(
                                                              2
                                                          )
                                                        : "데이터 없음"}
                                                </span>
                                                <span className="percentage">
                                                    적합도:{" "}
                                                    {uni.naturalSciencesPercentage.toFixed(
                                                        2
                                                    )}
                                                    %
                                                </span>
                                            </div>
                                            {uni.adjustedHumanitiesAvg && (
                                                <div className="stat-item">
                                                    <span className="label">
                                                        인문계열 평균 (특성화고
                                                        특별전형)
                                                    </span>
                                                    <span className="value">
                                                        {uni.adjustedHumanitiesAvg.toFixed(
                                                            2
                                                        )}
                                                    </span>
                                                    <span className="percentage">
                                                        적합도:{" "}
                                                        {uni.adjustedHumanitiesPercentage!.toFixed(
                                                            2
                                                        )}
                                                        %
                                                    </span>
                                                </div>
                                            )}
                                            {uni.adjustedNaturalSciencesAvg && (
                                                <div className="stat-item">
                                                    <span className="label">
                                                        자연계열 평균 (특성화고
                                                        특별전형)
                                                    </span>
                                                    <span className="value">
                                                        {uni.adjustedNaturalSciencesAvg.toFixed(
                                                            2
                                                        )}
                                                    </span>
                                                    <span className="percentage">
                                                        적합도:{" "}
                                                        {uni.adjustedNaturalSciencesPercentage!.toFixed(
                                                            2
                                                        )}
                                                        %
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </main>
        </div>
    );
}
