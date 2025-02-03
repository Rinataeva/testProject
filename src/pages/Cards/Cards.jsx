import { useContext, useState, useEffect } from "react";
import { WordsStoreContext } from "../../store/WordsStore/WordsStoreContext.js";
import { CounterContext } from "../../context/CounterContext";
import { Card } from "../Card/Card.jsx";
import { Link } from "react-router";
import "./styles.css";

export const Cards = () => {
  const {
    words,
    currentIndex,
    handleBackwardClick,
    handleForwardClick,
    loading,
  } = useContext(WordsStoreContext);
  const { addWord } = useContext(CounterContext);
  const [popUpMessage, setPopUpMessage] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);

  const safeIndex =
    currentIndex >= 0 && currentIndex < words.length ? currentIndex : 0;

  const onFlip = () => {
    if (words[safeIndex]) {
      addWord(words[safeIndex].english);
    }
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

  if (loading) {
    return <div>Loading words...</div>;
  }

  if (words.length === 0) {
    return <div>No words available. Please add words to start reviewing.</div>;
  }

  return (
    <section className="cards-section">
      <div className="progress">
        {safeIndex + 1}/{words.length}
      </div>
      <div className="cards-swiper">
        <button
          className="cards-swiper__button"
          onClick={handleBackward}
          disabled={safeIndex === 0}
        >
          {"<-"}
        </button>
        {words.length > 0 && (
          <Card
            english={words[safeIndex].english}
            transcription={words[safeIndex].transcription}
            russian={words[safeIndex].russian}
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
          disabled={safeIndex === words.length - 1}
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
