import React, { useState, useEffect } from "react";
import "./countdown.css";
export default function CountDown({ deadline }) {
    const [timeLeft, setTimeLeft] = useState(deadline - Date.now());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft(prevTime => {
                const newTime = prevTime - 1000;
                if (newTime < 0) {
                    clearInterval(intervalId);
                    return 0;
                }
                return newTime;
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return (
        <div className="countdown">
            Kết thúc sau: {days} : {hours} : {minutes} : {seconds}
        </div>
    );
}
