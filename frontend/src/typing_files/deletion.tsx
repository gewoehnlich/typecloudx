export function handleDeletion(currentWord: HTMLElement, currentLetter: HTMLElement, isCtrlPressed: boolean): null 
{
    const isFirstLetter: boolean = currentLetter === currentWord.firstChild;

    if (isCtrlPressed) {
        deleteWord(currentWord, currentLetter);
    }

    else if (!isFirstLetter) {
        deleteLetter(currentLetter);
    }

}

function deleteWord(currentWord: HTMLElement, currentLetter: HTMLElement) 
{
    const letters = [...document.querySelectorAll(".word.current .letter")];
    letters.forEach(letter => {
        if (letter.classList.contains("extra")) {
            letter.parentNode.removeChild(letter);
            return;
        }

        letter.classList?.remove("incorrect", "correct");
    });

    currentLetter.classList?.remove("current");
    currentWord.firstChild.classList.add("current");
}

function deleteLetter(currentLetter: HTMLElement) 
{
    const letterToDelete: HTMLElement = currentLetter.previousSibling;

    if (letterToDelete.classList.contains("extra")) {
        deleteExtraLetter(letterToDelete);
    } 

    else {
        deleteRegularLetter(currentLetter);
    }
}

function deleteExtraLetter(letterToDelete: HTMLElement) 
{
    letterToDelete.parentNode.removeChild(letterToDelete);
}

function deleteRegularLetter(currentLetter: HTMLElement) 
{
    currentLetter.classList?.remove("incorrect", "correct", "current");
    const previousLetter: HTMLElement = currentLetter.previousSibling;
    previousLetter.classList?.remove("incorrect", "correct");
    previousLetter.classList.add("current");
}

