import { createContext } from "react";
import { wordsStore } from "../WordsStore/WordsStore.js";

export const WordsStoreContext = createContext(wordsStore);