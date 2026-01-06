"use client";
import React, { useState, useRef } from "react";
import styles from "./styles.module.css";

const resolutions = [
    { label: "144p", height: 144 },
    { label: "240p", height: 240 },
    { label: "360p", height: 360 },
    { label: "480p", height: 480 },
    { label: "720p", height: 720 },
    { label: "1080p", height: 1080 },
];

export default function ImageResizer() {
    const [error, setError] = useState("");
    const [processedImage, setProcessedImage] = useState<string | null>(null);
    const [selectedResolution, setSelectedResolution] = useState(
        resolutions[0].height
    );
    const fileInputRef = useRef<HTMLInputElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const handleFileUpload = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setError("");
        setProcessedImage(null);
        const file = event.target.files?.[0];
        if (!file) {
            setError("No file selected");
            return;
        }

        if (!file.type.includes("image")) {
            setError("Please select an image file (JPEG, PNG, etc.)");
            return;
        }

        try {
            const img = new Image();
            img.src = URL.createObjectURL(file);
            img.onload = () => {
                processImage(img, selectedResolution);
                URL.revokeObjectURL(img.src);
            };
            img.onerror = () => {
                setError("Failed to load image");
            };
        } catch (err) {
            console.error("Processing error:", err);
            setError(
                "Unable to process image. Please ensure the file is a valid image."
            );
        }
    };

    const processImage = (img: HTMLImageElement, targetHeight: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Calculate width to maintain aspect ratio
        const aspectRatio = img.width / img.height;
        const targetWidth = Math.round(targetHeight * aspectRatio);

        // Set canvas dimensions
        canvas.width = targetWidth;
        canvas.height = targetHeight;

        // Draw resized image
        ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

        // Get processed image as data URL
        const dataUrl = canvas.toDataURL("image/jpeg", 0.8); // 0.8 quality for reasonable file size
        setProcessedImage(dataUrl);
    };

    const handleResolutionChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setSelectedResolution(Number(event.target.value));
        setProcessedImage(null); // Clear processed image when resolution changes
    };

    const handleDownload = () => {
        if (processedImage) {
            const link = document.createElement("a");
            link.href = processedImage;
            link.download = `resized_image_${selectedResolution}p.jpg`;
            link.click();
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Image Resizer</h1>
            <h2 className={styles.subtitle}>
                Upload Image and set Resolution.
                <br />
                You can't set image resolution higher than original image.
            </h2>
            <div className={styles.inputContainer}>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className={styles.fileInput}
                    ref={fileInputRef}
                />
                <select
                    value={selectedResolution}
                    onChange={handleResolutionChange}
                    className={styles.resolutionSelect}
                >
                    {resolutions.map((res) => (
                        <option key={res.height} value={res.height}>
                            {res.label}
                        </option>
                    ))}
                </select>
            </div>
            {error && <p className={styles.error}>{error}</p>}
            {processedImage && (
                <div className={styles.resultContainer}>
                    <h3 className={styles.resultTitle}>
                        Processed Image ({selectedResolution}p)
                    </h3>
                    <img
                        src={processedImage}
                        alt="Processed"
                        className={styles.previewImage}
                    />
                    <button
                        onClick={handleDownload}
                        className={styles.downloadButton}
                    >
                        Download Image
                    </button>
                </div>
            )}
            <canvas ref={canvasRef} style={{ display: "none" }} />
        </div>
    );
}
