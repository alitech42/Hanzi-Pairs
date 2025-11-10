import { DiffButtonContainer } from "./DiffButtonContainer";

export function Header({ score, handleDiffLevel, currentDiffLevel }) {
    return (
        <header>
            <h1>Hanzi Pairs</h1>
            <DiffButtonContainer
                handleDiffLevel={handleDiffLevel}
                currentDiffLevel={currentDiffLevel}
            />
            <p>Score: {score}</p>
        </header>
    );
}
