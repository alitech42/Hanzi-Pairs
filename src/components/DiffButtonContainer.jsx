import { DiffButton } from "./diffButton";

export function DiffButtonContainer({ handleDiffLevel }) {
    return (
        <div>
            <DiffButton diffLevel={1} handleDiffLevel={handleDiffLevel} />
            <DiffButton diffLevel={2} handleDiffLevel={handleDiffLevel} />
            <DiffButton diffLevel={3} handleDiffLevel={handleDiffLevel} />
            <DiffButton diffLevel={4} handleDiffLevel={handleDiffLevel} />
            <DiffButton diffLevel={5} handleDiffLevel={handleDiffLevel} />
            <DiffButton diffLevel={6} handleDiffLevel={handleDiffLevel} />
        </div>
    );
}
