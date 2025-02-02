import { WordsStoreContext } from "../../store/WordsStore/WordsStoreContext.js";
import { useContext, useState, useEffect } from "react";
import { CounterContext } from "../../context/CounterContext";
import { Card } from "../Card/Card.jsx";
import { Link } from "react-router";
import "./styles.css";

export const Cards = () => {
  const { words, currentIndex, handleBackwardClick, handleForwardClick } =
    useContext(WordsStoreContext); // Use WordsStoreContext to get words
  const { addWord } = useContext(CounterContext); // CounterContext for counting words
  const [popUpMessage, setPopUpMessage] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);

  const onFlip = () => {
    addWord(words[currentIndex].english); // Add word to counter on flip
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopUpMessage("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [popUpMessage]);

  const handleMouseEnter = () => {
    setPopUpMessage(`Нажми на карточку, чтобы увидеть перевод`);
  };

  const handleMouseLeave = () => {
    setPopUpMessage("");
  };

  const handleBackward = () => {
    handleBackwardClick();
    setIsFlipped(false);
  };

  const handleForward = () => {
    handleForwardClick();
    setIsFlipped(false);
  };

  return (
    <section className="cards-section">
      <div className="progress">
        {currentIndex + 1}/{words.length}
      </div>
      <div className="cards-swiper">
        <button
          className="cards-swiper__button"
          onClick={handleBackward}
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
            popUpMessage={popUpMessage}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            isFlipped={isFlipped}
            setIsFlipped={setIsFlipped}
          />
        )}
        <button
          className="cards-swiper__button"
          onClick={handleForward}
          disabled={currentIndex === words.length - 1}
        >
          {"->"}
        </button>
      </div>
      {popUpMessage && <div className="popup-message">{popUpMessage}</div>}
      <div className="cards__footer">
        <Link to="/">Назад</Link>
        <Link to="/cards">Редактировать карточку</Link>
      </div>
    </section>
  );
};
