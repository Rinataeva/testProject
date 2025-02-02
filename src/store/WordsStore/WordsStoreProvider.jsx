/* eslint-disable react/prop-types */
import { WordsStoreContext } from "./WordsStoreContext.js";
import { wordsStore } from "./WordsStore.js";
import { useEffect } from "react";

export const WordsStoreProvider = ({ children }) => {
  useEffect(() => {
    wordsStore.loadWords();
  }, []);

  return (
    <WordsStoreContext.Provider value={wordsStore}>
      {children}
    </WordsStoreContext.Provider>
  );
};
