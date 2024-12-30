import { useEffect } from "react";

export const SetupComponent = () => {
    useEffect(() => {
        const wordsList = document.getElementById("wordsList");
        if (wordsList) {
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
    }, []);

    return null;
}


