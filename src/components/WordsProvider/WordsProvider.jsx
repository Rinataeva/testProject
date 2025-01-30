import { WordsContext } from "../../context/WordsContext";
import { useWords } from "../../hooks/useWords";

export const WordsProvider = ({ children }) => {
  const {
    words,
    currentIndex,
    loading,
    createWord,
    deleteWord,
    updateWord,
    handleBackwardClick,
    handleForwardClick,
  } = useWords();

  return (
    <WordsContext.Provider
      value={{
        words,
        currentIndex,
        loading,
        createWord,
        deleteWord,
        updateWord,
        handleBackwardClick,
        handleForwardClick,
      }}
    >
      {children}
    </WordsContext.Provider>
  );
};
