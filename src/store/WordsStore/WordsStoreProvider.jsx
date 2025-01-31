/* eslint-disable react/prop-types */
import { WordsStoreContext } from "./WordsStoreContext/WordsStoreContext.js";
import { wordsStore } from "./WordsStore.js";
export const WordsStoreProvider = ({ children }) => {
  return (
    <WordsStoreContext.Provider value={wordsStore}>
      {children}
    </WordsStoreContext.Provider>
  );
};
