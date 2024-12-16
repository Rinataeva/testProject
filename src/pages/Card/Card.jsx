/* eslint-disable react/prop-types */
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
      <div className="card">
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
      
    </>
  );
};