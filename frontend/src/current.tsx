import { useEffect } from "react";
import { handleCursorPosition } from "./cursor.tsx";

export const SetupComponent = () => 
{
    useEffect(() => 
    {
        handleCursorPosition();

        const wordsList = document.getElementById("wordsList");

        if (wordsList) 
        {
            setCurrentClasses(wordsList);
        }

    }, []);

    return null;
}

function setCurrentClasses(wordsList: HTMLElement) 
{
    const firstWord = wordsList.firstChild;
    if (!firstWord) {
        return;
    }

    firstWord.classList.add("current");

    const firstLetter = firstWord.firstChild;
    if (!firstLetter) {
        return;
    }

    firstLetter.classList.add("current");
}

