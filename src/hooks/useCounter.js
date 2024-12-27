import { useCallback, useState } from "react";

const imbibedWords = new Set();
export function useCounter() {
    const [counter, setCounter] = useState(0);
    
    const addWord = useCallback((word) => {
imbibedWords.add(word);
        setCounter(imbibedWords.size);
    }, []);

    return {counter, addWord};
}
