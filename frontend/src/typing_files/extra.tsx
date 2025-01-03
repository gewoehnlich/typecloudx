export function handleExtra(key, currentWord, currentLetter): null 
{    
    currentLetter.textContent = key;
    currentLetter.classList.remove("current");
    currentLetter.classList.add("incorrect", "extra");

    const newLetter = document.createElement("div");
    newLetter.textContent = "";
    newLetter.classList.add("letter", "current");
    currentWord.appendChild(newLetter);
}

