import { useEffect } from "react";

export const TypingComponent = () => {
    useEffect(() => {
        const handleKeydown = (ev: KeyboardEvent) => {
            console.log(ev.key);

            console.log(document.getElementById("cursor"));
        }

        document.addEventListener("keydown", handleKeydown);

        return () => {
            document.removeEventListener("keydown", handleKeydown);
        };
    }, []);

    return null; 
};

