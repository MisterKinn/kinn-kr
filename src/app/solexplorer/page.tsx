"use client";
import { useState, useRef, useEffect } from "react";
import "../solexplorer/style.css";

interface Point {
    x: number;
    y: number;
}

interface Stroke {
    points: Point[];
}

export default function AITutor() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [strokes, setStrokes] = useState<Stroke[]>([]);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.fillStyle = "#0f1a2c"; // Deep midnight blue
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = 6; // Thick, elegant lines
        ctx.lineCap = "round";
        ctx.strokeStyle = "#d4a017"; // Rich gold

        // Subtle, elegant grid
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 40) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
        }
        for (let y = 0; y < canvas.height; y += 40) {
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
        }
        ctx.lineWidth = 0.2;
        ctx.strokeStyle = "#2a4066";
        ctx.stroke();
    }, []);

    const startDrawing = (e: React.MouseEvent) => {
        setIsDrawing(true);
        const rect = canvasRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setStrokes([{ points: [{ x, y }] }]);
    };

    const draw = (e: React.MouseEvent) => {
        if (!isDrawing) return;
        const rect = canvasRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setStrokes((prev) => {
            const lastStroke = [...prev[prev.length - 1].points, { x, y }];
            return [...prev.slice(0, -1), { points: lastStroke }];
        });

        const ctx = canvasRef.current?.getContext("2d");
        if (!ctx) return;
        ctx.beginPath();
        ctx.moveTo(
            strokes[strokes.length - 1]?.points[
                strokes[strokes.length - 1].points.length - 2
            ]?.x || x,
            strokes[strokes.length - 1]?.points[
                strokes[strokes.length - 1].points.length - 2
            ]?.y || y
        );
        ctx.lineTo(x, y);
        ctx.lineWidth = 6;
        ctx.stroke();
    };

    const stopDrawing = () => {
        setIsDrawing(false);
    };

    const recognizeCharacter = () => {
        if (!strokes.length || !strokes[0].points.length) return "?";

        const allStrokes = strokes;
        if (allStrokes.length === 0) return "?";

        const stroke = allStrokes[0].points;
        let minX = Math.min(...stroke.map((p: Point) => p.x));
        let maxX = Math.max(...stroke.map((p: Point) => p.x));
        let minY = Math.min(...stroke.map((p: Point) => p.y));
        let maxY = Math.max(...stroke.map((p: Point) => p.y));
        let width = maxX - minX;
        let height = maxY - minY;
        let dx = stroke[stroke.length - 1].x - stroke[0].x;
        let dy = stroke[stroke.length - 1].y - stroke[0].y;
        let isVertical = Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 30;
        let isHorizontal = Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 30;
        let isDiagonal = Math.abs(dx) > 20 && Math.abs(dy) > 20;

        const strokeCount = allStrokes.length;
        const hasSecondStroke = strokeCount > 1;
        const secondStroke = hasSecondStroke ? allStrokes[1].points : [];
        let secondMinY = hasSecondStroke
            ? Math.min(...secondStroke.map((p: Point) => p.y))
            : maxY;
        let secondMaxY = hasSecondStroke
            ? Math.max(...secondStroke.map((p: Point) => p.y))
            : minY;

        if (isVertical && height > 50 && !hasSecondStroke) return "I";
        else if (isHorizontal && width > 50 && !hasSecondStroke) return "L";
        else if (
            isDiagonal &&
            Math.abs(dx / dy) > 0.5 &&
            Math.abs(dx / dy) < 2 &&
            !hasSecondStroke
        )
            return "Z";
        else if (
            isVertical &&
            height > 30 &&
            hasSecondStroke &&
            secondMinY < (minY + maxY) / 2 &&
            secondMaxY > (minY + maxY) / 2
        )
            return "T";
        else if (width > 30 && height < 20 && !hasSecondStroke) return "1";
        else if (Math.abs(dx) < 20 && Math.abs(dy) < 20 && strokeCount > 2)
            return "O";
        else if (isDiagonal && Math.abs(dx) > 40 && !hasSecondStroke)
            return "7";
        else if (
            strokeCount === 2 &&
            isVertical &&
            height > 30 &&
            Math.abs(secondMinY - maxY) < 20
        )
            return "H";
        else if (
            strokeCount === 2 &&
            isHorizontal &&
            width > 30 &&
            Math.abs(secondMinY - maxY) < 20
        )
            return "E";
        else if (
            strokeCount === 3 &&
            isVertical &&
            height > 30 &&
            Math.abs(secondMinY - maxY) < 20
        )
            return "B";
        else if (
            strokeCount === 1 &&
            width > 40 &&
            height > 40 &&
            Math.abs(dx) < 10 &&
            Math.abs(dy) < 10
        )
            return "A";
        else if (
            strokeCount === 2 &&
            width > 30 &&
            height > 30 &&
            Math.abs(dx) > 20
        )
            return "K";
        else if (strokeCount === 1 && isDiagonal && Math.abs(dy) > 40)
            return "V";
        else if (strokeCount === 1 && width > 30 && height < 10) return "2";
        else return "?";
    };

    const handleSubmit = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#0f1a2c";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();

        strokes.forEach((stroke: Stroke) => {
            if (stroke.points.length > 0) {
                ctx.beginPath();
                ctx.moveTo(stroke.points[0].x, stroke.points[0].y);
                for (let i = 1; i < stroke.points.length; i++) {
                    ctx.lineTo(stroke.points[i].x, stroke.points[i].y);
                }
                ctx.lineWidth = 6;
                ctx.stroke();
            }
        });

        const recognizedChar = recognizeCharacter();
        document.getElementById(
            "feedback"
        )!.textContent = `Recognized character: ${recognizedChar}`;
        setStrokes([]);
    };

    return (
        <div className="tutor-container">
            <div className="tutor-header">Solution Explorer</div>
            <canvas
                ref={canvasRef}
                width={450}
                height={350}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseOut={stopDrawing}
            />
            <button onClick={handleSubmit}>Submit Drawing</button>
            <div id="feedback" className="feedback-box">
                Draw a letter (a-z) or number (0-9), then click "Submit" to see
                the recognized character.
            </div>
        </div>
    );
}
