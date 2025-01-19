/* eslint-disable react/prop-types */
import { WordsContext } from "../../context/WordsContext";
import { useWords } from "../../hooks/useWords";

export const WordsProvider = ({ children }) => {
  const {
    words,
    currentIndex,
    error,
    handleBackwardClick,
    handleForwardClick,
  } = useWords();

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <WordsContext.Provider
      value={{ words, currentIndex, handleBackwardClick, handleForwardClick }}
    >
      {children}
    </WordsContext.Provider>
  );
};
