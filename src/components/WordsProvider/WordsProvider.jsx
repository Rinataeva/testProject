import { WordsContext } from "../../context/WordsContext";
import { useWords } from "../../hooks/useWords";

export const WordsProvider = ({ children }) => {
  const {
    words,
    currentIndex,
    error,
    loading,
    handleBackwardClick,
    handleForwardClick,
  } = useWords();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (words.length === 0) {
    return <div>Слова недоступны. Попробуйте позже</div>;
  }

  return (
    <WordsContext.Provider
      value={{ words, currentIndex, handleBackwardClick, handleForwardClick }}
    >
      {children}
    </WordsContext.Provider>
  );
};
