export function DiffButton({ diffLevel, handleDiffLevel }) {
    return (
        <button
            type="button"
            className="diffBtn"
            onClick={() => handleDiffLevel(diffLevel)}
        >
            {diffLevel}
        </button>
    );
}
