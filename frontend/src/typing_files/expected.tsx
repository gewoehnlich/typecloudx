export function handleExpected(currentWord: HTMLElement, currentLetter: HTMLElement, isLetter: boolean, isSpace: boolean): null {

    if (isLetter) {
        currentLetter.classList.remove("current");
        currentLetter.classList.add("correct");
        currentLetter.nextSibling.classList.add("current");
    } 

    else if (isSpace) {
        let isWordWrong: boolean = false;
        for (const letter of currentWord.childNodes) {
            if (letter.classList.contains("incorrect")) {
                isWordWrong = true;
                break;
            }
        }

        if (!isWordWrong) {
            currentLetter.classList.remove("current");
            currentWord.classList.remove("current");

            const nextWord: HTMLDomElement = currentWord.nextSibling;
            nextWord.classList.add("current");

            const nextLetter: HTMLDomElement = nextWord.firstChild;
            nextLetter.classList.add("current");
        }
    }
}

