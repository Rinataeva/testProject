/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import "./styles.css";

export const Card = ({ english, transcription, russian, onFlip }) => {
  const [flipped, setFlipped] = useState(false);
  const seeTranslationButtonRef = useRef(null);

  const handleCardClick = () => {
    setFlipped(!flipped);
    onFlip();
  };

  useEffect(() => {
    if (seeTranslationButtonRef.current) {
      seeTranslationButtonRef.current.focus();
    }
  }, []);

  return (
    <div
      className={`card ${flipped ? "card--flipped" : ""}`}
      onClick={handleCardClick}
    >
      <div className="card__inner">
        <div className="card__front">
          <h3>{english}</h3>
          <p className="card__transcription">{transcription}</p>
        </div>
        <div className="card__back">
          <h2>{russian}</h2>
        </div>
      </div>
      <button
        ref={seeTranslationButtonRef}
        className="see-translation-btn"
        onClick={handleCardClick}
      >
        Click to see translation
      </button>
    </div>
  );
};
