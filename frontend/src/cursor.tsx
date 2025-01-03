import React, { useEffect } from "react";

export const handleCursorPosition = () => {
    const currentLetter = document.querySelector(".letter.current");
    const cursor = document.getElementById("cursor");

    if (currentLetter && cursor) {
        const rect = currentLetter.getBoundingClientRect();

        cursor.style.position = "absolute";
        cursor.style.left = `${rect.left + window.scrollX}px`;
        cursor.style.top = `${rect.top + window.scrollY}px`;
    }
};

export const WindowResizeComponent = () => {
    useEffect(() => {
        window.addEventListener("resize", handleCursorPosition);

        return () => {
            window.removeEventListener("resize", handleCursorPosition);
        };
    }, []);

    return null;
}
