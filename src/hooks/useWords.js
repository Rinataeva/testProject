import { useState, useEffect, useCallback } from "react";
import { cardApiService } from "../ApiService/ApiService";

export const useWords = () => {
  const [words, setWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const data = await cardApiService.getWords();
        setWords(data);
        if (data.length === 0) {
          setCurrentIndex(0);
        }
      } catch (error) {
        console.error("Error fetching words:", error);
        setError("Failed to fetch words. Please try again later.");
      }
    };

    fetchWords();
  }, []);

  const handleBackwardClick = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  }, [currentIndex]);

  const handleForwardClick = useCallback(() => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  }, [currentIndex, words.length]);

  return {
    words,
    currentIndex,
    error,
    handleBackwardClick,
    handleForwardClick,
  };
};
