/* eslint-disable react/prop-types */
import { useState } from "react";
import "./styles.css";

export const Card = ({ english, transcription, russian }) => {
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className={`card ${flipped ? 'card--flipped' : ''}`} onClick={handleCardClick}
    >
      <div className="card__inner">
        <div className="card__front">
          <h2>{english}</h2>
          <p className="transcription">{transcription}</p>
        </div>
        <div className="card__back">
          <h2>{russian}</h2>
        </div>
      </div>
    </div>
  );
};
