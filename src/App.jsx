import { useState } from "react";
import { HanziCardContainer } from "./components/HanziCardContainer";
import { setHanziPairs } from "./utilities";

export function App() {
    const [hanziPairs, handleHanziPairs] = useState(setHanziPairs(5, 1));

    return <HanziCardContainer data={hanziPairs} />;
}
