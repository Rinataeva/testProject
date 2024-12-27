import { Link } from "react-router";
import { ROUTES } from "../../routes/routes.js";
import { Card } from "../Card/Card.jsx";
import { useState, useEffect } from "react";
import { cardApiService } from "../../ApiService/ApiService.js";
import { CounterContext } from "../../context/CounterContext";
import { useContext } from "react";
import "./styles.css";

export const Cards = () => {
  const [words, setWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { addWord } = useContext(CounterContext);

  useEffect(() => {
    fetchWords();
  }, []);

  async function fetchWords() {
    try {
      const data = await cardApiService.getWords();
      setWords(data);
    } catch (error) {
      console.error("Error fetching words:", error);
    }
  }

  const handleBackwardClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleForwardClick = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

    const onFlip = () => {
    addWord(words[currentIndex].english);
  };

  return (
    <section className="cards-section">
      <div className="progress">
        {currentIndex + 1}/{words.length}
      </div>
      <div className="cards-swiper">
        <button
          className="cards-swiper__button"
          onClick={handleBackwardClick}
          disabled={currentIndex === 0}
        >
          {"<-"}
        </button>
        {words.length > 0 && (
          <Card
            english={words[currentIndex].english}
            transcription={words[currentIndex].transcription}
            russian={words[currentIndex].russian}
            onFlip={onFlip}
          />
        )}

        <button
          className="cards-swiper__button"
          onClick={handleForwardClick}
          disabled={currentIndex === words.length - 1}
        >
          {"->"}
        </button>
      </div>
      <div className="cards__footer">
        <Link to={ROUTES.home}>Back</Link>
        <Link to={ROUTES.card}>Show the card</Link>
      </div>
    </section>
  );
};
