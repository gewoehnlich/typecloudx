import { useEffect } from "react";
import { handleExpected } from "./typing_files/expected.tsx";
import { handleDeletion } from "./typing_files/deletion.tsx";
import { handleExtra } from "./typing_files/extra.tsx";
import { handleIncorrect } from "./typing_files/incorrect.tsx";
import { handleCursorPosition } from "./cursor.tsx";

export const TypingComponent = () => {

    useEffect(() => {

        const handleKeydown = (ev: KeyboardEvent) => 
        {
            const key: KeyboardEvent = ev.key;
            const currentWord: HTMLDomElement = document.querySelector(".word.current");
            const currentLetter: HTMLDomElement = currentWord.querySelector(".letter.current");
            const expected: string = currentLetter.textContent || " ";
            const isLetter: boolean = key.length === 1 && key != " ";
            const isSpace: boolean = currentLetter.classList.contains("space");
            const isBackspace: boolean = key === 'Backspace';

            if (key === expected) {
                handleExpected(currentWord, currentLetter, isLetter, isSpace);
            }

            else if (isBackspace) {
                const isCtrlPressed: boolean = ev.ctrlKey;
                handleDeletion(currentWord, currentLetter, isCtrlPressed);
            }

            else if (expected == " ") {
                handleExtra(key, currentWord, currentLetter);
            }

            else {
                handleIncorrect(currentLetter);
            }

            handleCursorPosition();
        }

        document.addEventListener("keydown", handleKeydown);

        return () => {
            document.removeEventListener("keydown", handleKeydown);
        };

    }, []);

    return null; 

};

