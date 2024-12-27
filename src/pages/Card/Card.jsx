/* eslint-disable react/prop-types */
import { useState } from "react";
import "./styles.css";

export const Card = ({ english, transcription, russian, onFlip }) => {
  const [flipped, setFlipped] = useState(false);
  

  const handleCardClick = () => {
    setFlipped(!flipped);
    onFlip();
  };
  
  return (
    <div
      className={`card ${flipped ? 'card--flipped' : ''}`} onClick={handleCardClick}
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
    </div>
  );
};
