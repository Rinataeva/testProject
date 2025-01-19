import { createContext, useContext } from "react";

export const WordsContext = createContext();

export const useWordsContext = () => {
  return useContext(WordsContext);
};
