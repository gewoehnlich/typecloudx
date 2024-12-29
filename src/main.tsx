import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

export const Letter = ({ letter }: { letter: string }) => (
    <div className="letter">{letter}</div>
);

export const Word = ({ word }: { word: string }) => (
    <div className="word">
        {word.split("").map((letter, index) => (
            <Letter key={index} letter={letter} />
        ))}

        <Letter key={word.length} letter={" "} />
    </div>
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

