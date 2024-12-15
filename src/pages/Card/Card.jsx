import { Link} from "react-router";
import { ROUTES } from "../../routes/routes.js";
import { useState } from "react";

export const Card = ({ english }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [value, setValue] = useState(english);

  function getValue(event) {
    const newValue = event.target.value;
    setValue(newValue);
  }

  return (
    <>
      <div>
        {isSelected ? (
          <input
            type="text"
            onChange={getValue}
            value={value}
            onBlur={() => setIsSelected(false)}
          />
        ) : (
          <div className="english" onClick={() => setIsSelected(true)}>
            {english}
          </div>
        )}
      </div>
      <Link to={ROUTES.cards}>Назад</Link>
    </>
  );
};