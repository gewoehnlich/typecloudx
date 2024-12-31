export function handleExtra(key, currentWord, currentLetter): null {
    
    currentLetter.textContent = key;
    currentLetter.classList.remove("current");
    currentLetter.classList.add("incorrect");
    currentLetter.classList.add("extra");

    const newLetter = document.createElement("div");
    newLetter.textContent = " ";
    newLetter.classList.add("letter");
    newLetter.classList.add("current");
    currentWord.appendChild(newLetter);

}

