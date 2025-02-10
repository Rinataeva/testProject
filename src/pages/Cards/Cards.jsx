import { useContext, useState, useEffect } from "react";
import { WordsStoreContext } from "../../store/WordsStore/WordsStoreContext.js";
import { CounterContext } from "../../context/CounterContext";
import { useBackAndForth } from "../../hooks/useBackAndForth.js";
import { Card } from "../Card";
import { Link } from "react-router";
import "./styles.css";

export const Cards = () => {
  const { words, loading } = useContext(WordsStoreContext);
  const { addWord } = useContext(CounterContext);

  const { currentIndex, handleBackwardClick, handleForwardClick } =
    useBackAndForth(0, words.length);

  const [popUpMessage, setPopUpMessage] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);

  const onFlip = () => {
    if (words[currentIndex]) {
      addWord(words[currentIndex].english);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopUpMessage("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [popUpMessage]);

  const handleMouseEnter = () => {
    setPopUpMessage(`Click the card to see the translation`);
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
    <main className="cards-page"><section className="cards-section">
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
      <Link to="/">Back</Link>
      <Link to="/cards">Edit the card</Link>
    </div>
  </section></main>
    
  );
};
