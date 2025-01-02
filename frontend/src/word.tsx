import { addCurrentClassToFirstChild } from "./current.tsx";

const Letter = ({ letter }: { letter: string }) => (
    <div className="letter">{letter}</div>
);

const Space = () => (
    <div className="letter space"></div>
);

export const Word = ({ word }: { word: string }) => (
    <div className="word">
        {word.split("").map((letter, index) => (
            <Letter key={index} letter={letter} />
        ))}

        <Space />
    </div>
);
