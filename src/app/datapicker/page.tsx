"use client";
import React, { useState } from "react";
import exifParser from "exif-parser";
import styles from "./styles.module.css";
import { MetadataItem } from "./components/MetadataItem";

interface MetadataGroup {
    [key: string]: {
        label: string;
        value: any;
    }[];
}

const groupMetadata = (metadata: any): MetadataGroup => {
    const groups: MetadataGroup = {
        datetime: [],
        camera: [],
        image: [],
        gps: [],
        other: [],
    };

    Object.entries(metadata).forEach(([key, value]) => {
        const lowerKey = key.toLowerCase();
        if (lowerKey.includes("date") || lowerKey.includes("time")) {
            groups.datetime.push({ label: key, value });
        } else if (
            lowerKey.includes("make") ||
            lowerKey.includes("model") ||
            lowerKey.includes("iso") ||
            lowerKey.includes("exposure") ||
            lowerKey.includes("aperture")
        ) {
            groups.camera.push({ label: key, value });
        } else if (
            lowerKey.includes("width") ||
            lowerKey.includes("height") ||
            lowerKey.includes("resolution")
        ) {
            groups.image.push({ label: key, value });
        } else if (lowerKey.includes("gps")) {
            groups.gps.push({ label: key, value });
        } else {
            groups.other.push({ label: key, value });
        }
    });

    return groups;
};

export default function PhotoMetadata() {
    const [metadata, setMetadata] = useState<any>(null);
    const [error, setError] = useState("");

    const handleFileUpload = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setError("");
        setMetadata(null);
        const file = event.target.files?.[0];
        if (!file) {
            setError("No file selected");
            return;
        }

        if (!file.type.includes("jpeg") && !file.type.includes("jpg")) {
            setError("Please select a JPEG image file");
            return;
        }

        try {
            const arrayBuffer = await file.arrayBuffer();
            const parser = exifParser.create(arrayBuffer);
            const result = parser.parse();

            if (!result.tags || Object.keys(result.tags).length === 0) {
                setError("No EXIF metadata found in this image");
                return;
            }

            setMetadata(result.tags);
        } catch (err) {
            console.error("Parsing error:", err);
            setError(
                "Unable to extract metadata. Please ensure the file is a valid JPEG photo."
            );
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Data Picker</h1>
            <input
                type="file"
                accept="image/jpeg,image/jpg"
                onChange={handleFileUpload}
                className={styles.fileInput}
            />
            {error && <p className={styles.error}>{error}</p>}
            {metadata && (
                <div className={styles.metadataContainer}>
                    <h3 className={styles.metadataTitle}>Extracted Metadata</h3>
                    <div className={styles.metadataGrid}>
                        {Object.entries(groupMetadata(metadata)).map(
                            ([group, items]) =>
                                items.length > 0 && (
                                    <div
                                        key={group}
                                        className={styles.metadataGroup}
                                    >
                                        <h4 className={styles.groupTitle}>
                                            {group.charAt(0).toUpperCase() +
                                                group.slice(1)}
                                        </h4>
                                        {items.map((item, index) => (
                                            <MetadataItem
                                                key={index}
                                                label={item.label}
                                                value={item.value}
                                            />
                                        ))}
                                    </div>
                                )
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
