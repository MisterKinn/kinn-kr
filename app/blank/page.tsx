"use client";
import { useState, useEffect } from "react";
import "../../styles/blank.css";

function Blank() {
    const [date, setDate] = useState<null | string>(null);
    const [time, setTime] = useState<null | string>(null);

    useEffect(() => {
        const updateDateAndTime = () => {
            const now = new Date();
            const daysOfWeek = [
                "Sun",
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
            ];
            const monthsOfYear = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ];

            const formattedDate =
                daysOfWeek[now.getDay()] +
                " " +
                monthsOfYear[now.getMonth()] +
                " " +
                now.getDate().toString().padStart(2, "0") +
                ", " +
                now.getFullYear();

            const formattedTime =
                now.getHours().toString().padStart(2, "0") +
                ":" +
                now.getMinutes().toString().padStart(2, "0") +
                ":" +
                now.getSeconds().toString().padStart(2, "0");

            setDate(formattedDate);
            setTime(formattedTime);
        };

        updateDateAndTime();
        const intervalId = setInterval(updateDateAndTime, 1000);

        return () => clearInterval(intervalId); // Cleanup function for the interval
    }, []);

    return (
        <div className="date-time-container">
            <h1 className="date">{date}</h1>
            <h1 className="time">{time}</h1>
        </div>
    );
}

export default Blank;
