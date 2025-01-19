/* eslint-disable react/prop-types */
import "./styles.css";

export const Card = ({
  english,
  transcription,
  russian,
  onFlip,
  onMouseEnter,
  onMouseLeave,
  isFlipped,
  setIsFlipped,
}) => {
  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
    onFlip();
  };

  return (
    <div
      className={`card ${isFlipped ? "card--flipped" : ""}`}
      onClick={handleCardClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
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
