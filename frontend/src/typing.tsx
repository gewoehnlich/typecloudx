import { useEffect } from "react";
import { handleExpectedKey } from "./typing_files/expected.tsx";

export const TypingComponent = () => {
    useEffect(() => {
        const handleKeydown = (ev: KeyboardEvent) => {
            console.log(ev.key);
            const key: KeyboardEvent = ev.key;
            const currentWord: HTMLDomElement = document.querySelector(".word.current");
            const currentLetter: HTMLDomElement = currentWord.querySelector(".letter.current");
            const expected: string = currentLetter.textContent || " ";
            const isLetter: boolean = key.length === 1 && key != " ";
            const isSpace: boolean = key === " ";
            const isBackspace: boolean = key === 'Backspace';

            if (key === expected) {
                handleExpectedKey(currentWord, currentLetter, isLetter, isSpace);
            }

            else if (isBackspace) {
                const isFirstLetter: HTMLDomElement = currentLetter === currentWord.firstChild;
                if (ev.ctrlKey) {
                    const letters = [...document.querySelectorAll(".word.current .letter")];
                    letters.forEach(letter => {
                        letter.classList?.remove("incorrect");
                        letter.classList?.remove("correct");
                    });

                    currentLetter.classList.remove("current");
                    currentWord.firstChild.classList.add("current");
                }

                else if (!isFirstLetter) {
                
                }
            }
        }

        document.addEventListener("keydown", handleKeydown);

        return () => {
            document.removeEventListener("keydown", handleKeydown);
        };
    }, []);

    return null; 
};

