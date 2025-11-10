import { DiffButton } from "./DiffButton";

export function DiffButtonContainer({ handleDiffLevel, currentDiffLevel }) {
    return (
        <div className="difficulty-button-container">
            <DiffButton
                diffLevel={1}
                handleDiffLevel={handleDiffLevel}
                currentDiffLevel={currentDiffLevel}
            />
            <DiffButton
                diffLevel={2}
                handleDiffLevel={handleDiffLevel}
                currentDiffLevel={currentDiffLevel}
            />
            <DiffButton
                diffLevel={3}
                handleDiffLevel={handleDiffLevel}
                currentDiffLevel={currentDiffLevel}
            />
            <DiffButton
                diffLevel={4}
                handleDiffLevel={handleDiffLevel}
                currentDiffLevel={currentDiffLevel}
            />
            <DiffButton
                diffLevel={5}
                handleDiffLevel={handleDiffLevel}
                currentDiffLevel={currentDiffLevel}
            />
            <DiffButton
                diffLevel={6}
                handleDiffLevel={handleDiffLevel}
                currentDiffLevel={currentDiffLevel}
            />
        </div>
    );
}
