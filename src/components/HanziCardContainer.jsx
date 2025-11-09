import { HanziCard } from "./HanziCard";

export function HanziCardContainer({ data, handleClick, selectedHanzi }) {
    return (
        <div className="hanzi container">
            {[...data]
                .sort((pair1, pair2) => pair1.order - pair2.order)
                .map(({ hanzi }) => (
                    <HanziCard
                        hanzi={hanzi}
                        key={crypto.randomUUID()}
                        handleClick={handleClick}
                        selectedHanzi={selectedHanzi}
                    />
                ))}
        </div>
    );
}
