"use client";
import { useState } from "react";
import styles from "./styles.module.css";

interface AnalysisResult {
    repeatedPhrases: string[];
    literaryDevices: string[];
}

export default function Home() {
    const [inputText, setInputText] = useState<string>("");
    const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(
        null
    );

    const handleAnalyze = async () => {
        const response = await fetch("/api/literature_analyze", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: inputText }),
        });

        if (response.ok) {
            const data: AnalysisResult = await response.json();
            setAnalysisResult(data);
        } else {
            console.error("Failed to analyze text");
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Literature Analyzer</h1>
            <textarea
                rows={10}
                cols={50}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="분석할 텍스트를 입력하세요"
                className={styles.textarea}
            />
            <button onClick={handleAnalyze} className={styles.button}>
                분석하기
            </button>
            {analysisResult && (
                <div className={styles.results}>
                    <h2 className={styles.resultTitle}>분석 결과</h2>
                    <div className={styles.resultSection}>
                        <h3 className={styles.subTitle}>반복된 구절</h3>
                        <p className={styles.resultText}>
                            {analysisResult.repeatedPhrases.join(", ") ||
                                "없음"}
                        </p>
                    </div>
                    <div className={styles.resultSection}>
                        <h3 className={styles.subTitle}>문학적 기법</h3>
                        <p className={styles.resultText}>
                            {analysisResult.literaryDevices.join(", ") ||
                                "발견되지 않음"}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
