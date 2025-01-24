import { useContext } from "react";
import { WordsContext } from "../context/WordsContext";

export const useWordsContext = () => {
  return useContext(WordsContext);
};
