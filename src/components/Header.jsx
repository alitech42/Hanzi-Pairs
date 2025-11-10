import { DiffButtonContainer } from "./DiffButtonContainer";

export function Header({ score, handleDiffLevel }) {
    return (
        <header>
            <h1>Hanzi Pairs</h1>
            <DiffButtonContainer handleDiffLevel={handleDiffLevel} />
            <p>Score: {score}</p>
        </header>
    );
}
