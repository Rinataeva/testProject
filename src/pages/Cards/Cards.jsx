import { useWordsContext } from "../../context/WordsContext";
import { useContext, useState } from "react";
import { CounterContext } from "../../context/CounterContext";
import { Card } from "../Card/Card.jsx";
import { Link } from "react-router";
import "./styles.css";

export const Cards = () => {
  const { words, currentIndex, handleBackwardClick, handleForwardClick } =
    useWordsContext();
  const { addWord } = useContext(CounterContext);
  const [popUpMessage, setPopUpMessage] = useState("");

  const onFlip = () => {
    addWord(words[currentIndex].english);
  };

  const onFocus = () => {
    setPopUpMessage("Кликни");
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
            onFocus={onFocus}
            popUpMessage={popUpMessage}
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
        <Link to="/">Back</Link>
        <Link to="/cards">Show the card</Link>
      </div>
    </section>
  );
};
