"use client";
import { useState } from "react";
import styles from "./english.module.css";

const faqCategories = {
    학습법: [
        {
            question: "원래 영어 잘하셨던거 아닌가요?",
            answer: "아닙니다. 영어 학습 시작 당시 제 모의고사 영어 성적은 3등급이었고, 프리토킹은 거의 불가능한 수준이었으며, 한국어 자막 없이는 영어 컨텐츠를 시청할 수 없었습니다.",
        },
        {
            question: "하루에 몇 시간씩 공부해야 하나요?",
            answer: "저는 따로 공부 시간을 정하지 않고 일상생활 전체를 영어로 바꿨습니다. 유튜브 시청, 검색, AI와의 대화 등 일상 속 모든 순간을 영어로 채우면 자연스럽게 충분한 노출 시간이 확보됩니다.",
        },
        {
            question: "단어 암기는 꼭 해야 하나요?",
            answer: "단어 암기가 필수는 아니지만, 초반 학습에 큰 도움이 됩니다. 다만 단순히 단어장을 외우는 것이 아니라 리딩, 리스닝 등에서 암기한 단어를 다시 만나는 것이 중요합니다.",
        },
        {
            question: "나이가 많아도 가능한가요?",
            answer: "네, 나이와 상관없이 가능합니다. 어릴수록 학습 효과가 크지만 언어 학습은 노출의 누적이기 때문에 꾸준히 영어 환경에 노출되면 누구나 실력을 향상시킬 수 있습니다.",
        },
    ],
    도구: [
        {
            question: "반드시 말해보카 앱으로 단어 학습을 해야 하나요?",
            answer: "아니요, 듀오링고와 같은 무료 앱도 충분히 효과적입니다. 다만 말해보카는 제가 가장 오랫동안 꾸준히 사용한 앱이어서 추천드린 것입니다.",
        },
        {
            question: "ChatGPT Plus를 꼭 구독해야 하나요?",
            answer: "아니요, 무료 버전으로도 충분합니다. 최근에는 ChatGPT, Gemini, Grok 등 주요 AI들이 보이스 기능을 제공합니다. 본인에게 맞는 AI를 선택해 활용하시면 됩니다.",
        },
        {
            question: "어떤 뉴스레터를 구독하면 좋나요?",
            answer: "본인이 관심 있는 주제의 뉴스레터를 구독하면 좋습니다. 저는 The New York Times, Fox News 등 시사 관련 뉴스레터나 Bloomberg, TechCrunch 등 경제/기술 관련 뉴스레터를 추천드립니다.",
        },
        {
            question: "영어 원서는 어디서 구매하나요?",
            answer: "저는 주로 교보문고와 Amazon에서 원서를 구매하였고, 종이책을 구할 수 없는 경우에는 전자책을 구매했습니다.",
        },
    ],
    실천: [
        {
            question: "무자막 시청이 너무 어려워요.",
            answer: "정상입니다. 대부분 그 단계에서 포기합니다. 하지만 포기하지 않고 계속 이해하려고 노력하면 어느 순간 '귀가 뚫리는' 시점이 찾아옵니다. 그 전까지가 가장 힘든 구간입니다.",
        },
        {
            question: "중간에 포기하고 싶을 때는 어떻게 하나요?",
            answer: "왜 영어를 배우려고 하는지 명확한 목표를 다시 떠올리세요. 저는 '프리토킹'이라는 명확한 목표가 있었기에 포기하지 않을 수 있었습니다. 목표가 명확하면 동기부여가 됩니다.",
        },
        {
            question: "AI와 대화할 때 무슨 주제로 말해야 하나요?",
            answer: "오늘 있었던 일, 관심사, 뉴스, 평소 하는 생각 등 편안하게 대화할 수 있는 주제로 대화하면 됩니다. 주제와 상관없이 매일 꾸준히 영어로 대화하는  것이 중요합니다.",
        },
        {
            question: "이 방법으로 시험 성적도 오르나요?",
            answer: "저는 시험 성적 향상이 목표는 아니었지만 결과적으로 성적이 올랐습니다. 영어를 구조적으로 이해하면 시험 점수는 자연스럽게 따라옵니다.",
        },
    ],
};

const categoryLabels: Record<Category, string> = {
    학습법: "학습법",
    도구: "도구",
    실천: "실천",
};

type Category = keyof typeof faqCategories;

export default function FAQ() {
    const [activeCategory, setActiveCategory] = useState<Category>("학습법");
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const currentFAQs = faqCategories[activeCategory];

    return (
        <section id="faq" className={styles.sectionBase}>
            <div className={styles.sectionInner}>
                <h2 className={styles.benefitsTitle}>자주 묻는 질문</h2>

                {/* Category tabs */}
                <div className={styles.faqTabs}>
                    {(Object.keys(faqCategories) as Category[]).map(
                        (category) => (
                            <button
                                key={category}
                                className={`${styles.faqTab} ${
                                    activeCategory === category
                                        ? styles.active
                                        : ""
                                }`}
                                onClick={() => {
                                    setActiveCategory(category);
                                    setOpenFAQ(null);
                                }}
                            >
                                {categoryLabels[category]}
                            </button>
                        )
                    )}
                </div>

                {/* FAQ items */}
                <div className={styles.stack4}>
                    {currentFAQs.map((faq, index) => (
                        <div
                            key={index}
                            className={`${styles.faqCard} ${
                                openFAQ === index ? styles.open : ""
                            }`}
                        >
                            <button
                                className={styles.faqQuestion}
                                onClick={() =>
                                    setOpenFAQ(openFAQ === index ? null : index)
                                }
                            >
                                <span>{faq.question}</span>
                                <span
                                    className={`${styles.faqToggle} ${
                                        openFAQ === index ? styles.open : ""
                                    }`}
                                >
                                    +
                                </span>
                            </button>
                            {openFAQ === index && (
                                <div className={styles.faqAnswer}>
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
