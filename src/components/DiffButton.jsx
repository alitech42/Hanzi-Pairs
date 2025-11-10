export function DiffButton({ diffLevel, handleDiffLevel, currentDiffLevel }) {
    return (
        <button
            type="button"
            className={`difficulty-button ${
                diffLevel === currentDiffLevel ? "selected" : ""
            }`}
            onClick={() => handleDiffLevel(diffLevel)}
        >
            {diffLevel}
        </button>
    );
}
