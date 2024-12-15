import { Link } from "react-router";
import { ROUTES } from "../../routes/routes.js";
import { Card } from "../Card/Card.jsx";
import { useState, useEffect } from "react";
import { cardApiService } from "../../ApiService/ApiService.js";

export const Cards = () => {
  const [words, setWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Track current word index

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

  return (
    <section className="cards-section">
      <h1>Cards</h1>
      <p>
        <Link to={ROUTES.home}>Home</Link>
      </p>
      <div className="card-swiper">
        <button onClick={handleBackwardClick} disabled={currentIndex === 0}>
          {"<-"}
        </button>
        {words.length > 0 && <Card english={words[currentIndex].english} />}
        <button
          onClick={handleForwardClick}
          disabled={currentIndex === words.length - 1}
        >
          {"->"}
        </button>
      </div>
      <div className="progress">
        {currentIndex + 1}/{words.length}
      </div>
    </section>
  );
};