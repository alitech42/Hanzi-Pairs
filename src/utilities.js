import hsk from "./data/hsk.json";

export function setHanziPairs(count, diffLevel) {
    const filteredHsk = hsk.filter(({ level }) => level === diffLevel);
    const randomIndexArr = [];

    for (let i = 0; i < count; i++) {
        randomIndexArr.push(Math.floor(Math.random() * filteredHsk.length));
    }

    return filteredHsk
        .filter((item, index) =>
            randomIndexArr.some((randomIndex) => randomIndex === index)
        )
        .map(({ pinyin, hanzi }) => ({
            pinyin,
            hanzi,
            order: Math.floor(Math.random() * count),
        }));
}

export function checkHanziPairs(selectedCard) {
    return hsk.some(
        ({ pinyin, hanzi }) =>
            pinyin === selectedCard.pinyin && hanzi === selectedCard.hanzi
    );
}
