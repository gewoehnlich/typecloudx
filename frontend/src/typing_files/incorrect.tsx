export function handleIncorrect(currentLetter: HTMLElement) 
{
    currentLetter.classList.add("incorrect");
    
    const nextLetter = currentLetter.nextSibling;
    if (nextLetter) 
    {
        currentLetter.classList.remove("current");
        nextLetter.classList.add("current");
    }
}

