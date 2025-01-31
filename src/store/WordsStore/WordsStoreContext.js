import { createContext } from "react";
import { wordsStore } from "./WordsStore.js";

export const WordsStoreContext = createContext(wordsStore);
