/* eslint-disable react/prop-types */
import { useState } from "react";
import "./styles.css";
import editIcon from "../../assets/edit-icon.svg";
import deleteIcon from "../../assets/delete-icon.svg";
import saveIcon from "../../assets/save-icon.svg";
import closeIcon from "../../assets/close-icon.svg";
import { useWordsContext } from "../../hooks/useWordsContext";

export const Table = () => {
  const { words } = useWordsContext();

  return (
    <div className="table-wrapper">
      <table className="table" border="1">
        <thead>
          <tr>
            <th>n/n</th>
            <th>English</th>
            <th>pronunciation</th>
            <th>Russian</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {words.map((card) => {
            return <TableRow rowData={card} key={card.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
const TableRow = ({ rowData }) => {
  console.log(rowData);
  const { id, english, transcription, russian } = rowData;

  const [isSelected, setIsSelected] = useState(false);
  const [value, setValue] = useState({ id, english, transcription, russian });

  function handleChange(e) {
    setValue((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  }

  function handleClose() {
    setIsSelected(!isSelected);
    setValue({ ...rowData });
  }

  function handleSave() {
    setValue({ ...value });
    setIsSelected(!isSelected);
  }

  function handleEdit() {
    setIsSelected(!isSelected);
  }

  const isEmptyField = () => {
    return !value.english || !value.russian || !value.transcription;
  };

  const getClassName = (field) => (value[field] === "" ? "input-error" : "");

  return isSelected ? (
    <tr>
      <td>{id}</td>
      <td>
        <input
          type="text"
          value={value.english}
          name="english"
          onChange={handleChange}
          className={getClassName("english")}
        />
      </td>
      <td>
        <input
          type="text"
          value={value.transcription}
          name="transcription"
          onChange={handleChange}
          className={getClassName("transcription")}
        />
      </td>
      <td>
        <input
          type="text"
          value={value.russian}
          name="russian"
          onChange={handleChange}
          className={getClassName("russian")}
        />
      </td>
      <td>
        <button
          className="table__button"
          onClick={handleSave}
          disabled={isEmptyField()}
        >
          <img src={saveIcon} className="table__button_icon" alt="save" />
        </button>
        <button className="table__button" onClick={handleClose}>
          <img src={closeIcon} className="table__button_icon" alt="close" />
        </button>
      </td>
    </tr>
  ) : (
    <tr>
      <td>{id}</td>
      <td>{value.english}</td>
      <td>{value.transcription}</td>
      <td>{value.russian}</td>
      <td>
        <button className="table__button" onClick={handleEdit}>
          <img src={editIcon} className="table__button_icon" alt="edit" />
        </button>
        <button className="table__button">
          <img src={deleteIcon} className="table__button_icon" alt="delete" />
        </button>
      </td>
    </tr>
  );
};
