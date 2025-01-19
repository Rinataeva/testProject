import { useState, useEffect, useCallback } from "react";
import { cardApiService } from "../ApiService/ApiService";

export const useWords = () => {
  const [words, setWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWords = async () => {
      setLoading(true);
      try {
        const data = await cardApiService.getWords();
        if (data && Array.isArray(data)) {
          setWords(data);
          if (data.length === 0) {
            setCurrentIndex(0);
          }
        } else {
          throw new Error("Формат данных не соответсвует ожидаемому");
        }
      } catch (err) {
        setError("Ошибка загрузки. Попробуйте позже");
        console.error("Ошибка", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWords();
  }, []);

  const handleBackwardClick = useCallback(() => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }, []);

  const handleForwardClick = useCallback(() => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, words.length - 1));
  }, [words.length]);

  return {
    words,
    currentIndex,
    error,
    loading,
    handleBackwardClick,
    handleForwardClick,
  };
};
