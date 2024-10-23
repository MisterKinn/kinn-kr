"use client";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import "@/styles/uxinsight.css";
import "@/styles/uxinsight.css";
import AOS from "aos";
import "@/styles/aos.css";

export default function UXInsight() {
    const [url, setUrl] = useState<string>("");
    const [feedbackWithLocations, setFeedbackWithLocations] = useState<
        { feedback: string; locations: string[] }[]
    >([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false); // New state to handle loading

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true); // Set loading state to true when analyzing starts

        try {
            const response = await fetch("/api/uxcheck", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ url }),
            });

            const data = await response.json();

            if (response.ok) {
                // Combine feedback and locations
                const combinedData = data.feedback.map(
                    (feedback: string, index: number) => ({
                        feedback,
                        locations: Array.isArray(data.locations[index])
                            ? data.locations[index]
                            : [data.locations[index]], // Convert to array if necessary
                    })
                );

                setFeedbackWithLocations(combinedData);
                setError(null);
            } else {
                setError(
                    data.error || "An error occurred while analyzing the page."
                );
            }
        } catch (error) {
            setError("An unexpected error occurred.");
        } finally {
            setIsLoading(false); // Reset loading state after analysis
        }
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

    if (isMobile) {
        return (
            <div className="container">
                <h1>UX Insight</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="url" className="url-label">
                        Enter a Web Page URL for UX Analysis:
                    </label>
                    <input
                        type="url"
                        id="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="https://example.com"
                        required
                        className="url-input"
                    />
                    <button
                        type="submit"
                        className={`analyze-button ${
                            isLoading ? "disabled" : ""
                        }`}
                        disabled={isLoading} // Disable button while loading
                    >
                        {isLoading ? "Analyzing UX..." : "Analyze UX"}
                    </button>
                </form>

                {error && <p className="mobile-error">{error}</p>}

                {feedbackWithLocations.length > 0 && (
                    <div className="mobile-feedback-section">
                        <h2>Feedbacks</h2>
                        <ul>
                            {feedbackWithLocations.map((item, index) => (
                                <li
                                    key={index}
                                    className="mobile-feedback-item"
                                    data-aos="fade-up"
                                >
                                    <div className="mobile-center">
                                        <span className="mobile-feedback-index">
                                            {index + 1}.{" "}
                                        </span>
                                        <span className="mobile-feedback-text">
                                            {item.feedback}
                                        </span>
                                    </div>
                                    <p className="mobile-location-text">
                                        Tags: {item.locations.join(", ")}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    } else {
        return (
            <div className="container">
                <h1>UX Insight</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="url" className="url-label">
                        Enter a Web Page URL for UX Analysis:
                    </label>
                    <input
                        type="url"
                        id="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="https://example.com"
                        required
                        className="url-input"
                    />
                    <button
                        type="submit"
                        className={`analyze-button ${
                            isLoading ? "disabled" : ""
                        }`}
                        disabled={isLoading} // Disable button while loading
                    >
                        {isLoading ? "Analyzing UX..." : "Analyze UX"}
                    </button>
                </form>

                {error && <p className="error">{error}</p>}

                {feedbackWithLocations.length > 0 && (
                    <div className="feedback-section">
                        <h2>Feedbacks</h2>
                        <ul>
                            {feedbackWithLocations.map((item, index) => (
                                <li
                                    key={index}
                                    className="feedback-item"
                                    data-aos="fade-up"
                                >
                                    <div className="center">
                                        <span className="feedback-index">
                                            {index + 1}.{" "}
                                        </span>
                                        <span className="feedback-text">
                                            {item.feedback}
                                        </span>
                                    </div>
                                    <p className="location-text">
                                        Tags: {item.locations.join(", ")}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}
