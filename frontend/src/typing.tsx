import React, { useState, useEffect } from "react";
import { handleCursorPosition } from "./cursor.tsx";

export const TypingComponent = () => {
    useEffect(() => {
        const handleKeydown = (ev: KeyboardEvent) => {
            console.log(ev.key);
        }

        document.addEventListener("keydown", handleKeydown);

        return () => {
            document.removeEventListener("keydown", handleKeydown);
        };
    }, []);

    return null; 
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

