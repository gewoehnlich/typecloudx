export function handleExpected(currentWord: HTMLElement, currentLetter: HTMLElement, isLetter: boolean, isSpace: boolean): null 
{
    if (isLetter) {
        handleLetter(currentLetter);
    } 

    else if (isSpace) {
        handleSpace(currentWord, currentLetter);
    }
}

function handleLetter(currentLetter: HTMLElement) 
{
    currentLetter.classList.remove("current");
    currentLetter.classList.add("correct");
    currentLetter.nextSibling.classList.add("current");
}

function handleSpace(currentWord: HTMLElement, currentLetter: HTMLElement) 
{
    let isWordWrong: boolean = false;
    for (const letter of currentWord.childNodes) {
        if (letter.classList.contains("incorrect")) {
            isWordWrong = true;
            break;
        }
    }

    if (!isWordWrong) {
        moveToNextLetter(currentWord, currentLetter);
    }
}

function moveToNextLetter(currentWord: HTMLElement, currentLetter: HTMLElement) 
{
    currentLetter.classList.remove("current");
    currentWord.classList.remove("current");

    const nextWord: HTMLDomElement = currentWord.nextSibling;
    nextWord.classList.add("current");

    const nextLetter: HTMLDomElement = nextWord.firstChild;
    nextLetter.classList.add("current");
}

