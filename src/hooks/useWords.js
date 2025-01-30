import { useState, useEffect, useCallback } from "react";
import { wordApiService } from "../ApiService/ApiService";

export function useWords() {
  const [words, setWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const createWord = async (data) => {
    const newWords = words.concat(data);

    await wordApiService.create(data);

    setWords(newWords);
  };

  const deleteWord = async (id) => {
    await wordApiService.delete(id);
    const newWords = words.filter(({ id: wordId }) => wordId !== id);
    setWords(newWords);
  };

  const updateWord = async (updatedWord) => {
    await wordApiService.update(updatedWord, updatedWord.id);
    setWords((prevWords) =>
      prevWords.map((word) =>
        word.id === updatedWord.id ? { ...word, ...updatedWord } : word
      )
    );
  };

  useEffect(() => {
    wordApiService.fetchWords().then((words) => {
      setWords(words);
      setLoading(false);
    });
  }, []);
  const handleBackwardClick = useCallback(() => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }, []);

  const handleForwardClick = useCallback(() => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, words.length - 1));
  }, [words.length]);

  return {
    words,
    loading,
    createWord,
    deleteWord,
    updateWord,
    handleBackwardClick,
    handleForwardClick,
    currentIndex,
  };
}
