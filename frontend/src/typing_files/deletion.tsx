export function handleDeletion(currentWord: HTMLElement, currentLetter: HTMLElement, isCtrlPressed: boolean): null {

    const isFirstLetter: boolean = currentLetter === currentWord.firstChild;

    if (isCtrlPressed) {
        const letters = [...document.querySelectorAll(".word.current .letter")];
        letters.forEach(letter => {
            letter.classList?.remove("incorrect");
            letter.classList?.remove("correct");
        });

        currentLetter.classList.remove("current");
        currentWord.firstChild.classList.add("current");
    }

    else if (!isFirstLetter) {
        currentLetter.classList.remove("incorrect");
        currentLetter.classList.remove("correct");
        currentLetter.classList.remove("current");

        const previousLetter: HTMLElement = currentLetter.previousSibling;
        previousLetter.classList.remove("incorrect");
        previousLetter.classList.remove("correct");
        previousLetter.classList.add("current");
    }

}

