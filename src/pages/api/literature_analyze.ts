import { NextApiRequest, NextApiResponse } from "next";

interface AnalysisResult {
    repeatedPhrases: string[];
    literaryDevices: string[];
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<AnalysisResult | { message: string }>
) {
    if (req.method === "POST") {
        const { text } = req.body;

        if (!text || typeof text !== "string") {
            res.status(400).json({ message: "Invalid input" });
            return;
        }

        const words = text.split(/\s+/);
        const wordCounts: Record<string, number> = {};
        words.forEach((word) => {
            wordCounts[word] = (wordCounts[word] || 0) + 1;
        });

        const repeatedPhrases = Object.entries(wordCounts)
            .filter(([_, count]) => count > 2)
            .map(([word]) => word);

        const literaryDevices: string[] = [];

        if (text.includes("처럼") || text.includes("같이"))
            literaryDevices.push("직유법");

        if (text.match(/\b\w+는\s\w+다\b/)) literaryDevices.push("은유법");

        if (text.match(/[\w\s]+(인가\?|일까\?|겠는가\?)/))
            literaryDevices.push("설의법");

        if (text.match(/(\w+가\s[웃는다|울었다|춤춘다|노래한다])/))
            literaryDevices.push("의인법");

        if (text.includes("반면에") || text.includes("그러나"))
            literaryDevices.push("대조법");

        const sentences = text.split(/[.!?]/).map((s) => s.trim());
        for (let i = 0; i < sentences.length - 1; i++) {
            if (
                sentences[i].split(/\s+/).length ===
                sentences[i + 1].split(/\s+/).length
            ) {
                literaryDevices.push("대구법");
                break;
            }
        }

        if (text.match(/(\b\w+\b)(\s+\1)+/)) literaryDevices.push("반복법");

        res.status(200).json({ repeatedPhrases, literaryDevices });
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
