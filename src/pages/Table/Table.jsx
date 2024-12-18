/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { cardApiService } from "../../ApiService/ApiService";
import "./styles.css";
import  editIcon from "../../assets/edit-icon.svg";
import  deleteIcon  from "../../assets/delete-icon.svg";
import saveIcon from "../../assets/save-icon.svg";
import closeIcon from "../../assets/close-icon.svg";




export const Table = () => {
  const [cards, setCards] = useState([]);   

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const data = await cardApiService.getWords();
        setCards(data);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };
    fetchCards();
  }, []);

   cards.forEach((card) => {
    if (card.english && card.russian) {
      card.english = card.english.toLowerCase();
      card.russian = card.russian.toLowerCase();  
          }
  })
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
          {cards.map((card) => {
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

  function handleClose() {
    setIsSelected(!isSelected);
    setValue({ ...rowData });
  }

  function handleSave() {
    setValue({ ...value });
    setIsSelected(!isSelected);
  }

  function handleEdit() {
    setIsSelected(!isSelected); // Open the edit mode
  }

  function handleChange(e) {
    setValue((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  }

  return isSelected ? (
    <tr>
      <td>{id}</td>
      <td>
        <input
          type="text"
          value={value.english}
          name="english"
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          value={value.transcription}
          name="transcription"
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          value={value.russian}
          name="russian"
          onChange={handleChange}
        />
      </td>
      <td>
        <button className="table__button" onClick={handleSave}><img src={saveIcon} className="table__button_icon" alt="save" /></button>
        <button className="table__button" onClick={handleClose}><img src={closeIcon} className="table__button_icon" alt="close" /></button>
      </td>
    </tr>
  ) : (
    <tr>
      <td>{id}</td>
      <td>{value.english}</td>
      <td>{value.transcription}</td>
      <td>{value.russian}</td>
      <td>
        <button className="table__button" onClick={handleEdit}><img src={editIcon} className="table__button_icon" alt="edit" /></button>
        <button className="table__button"><img src={deleteIcon} className="table__button_icon" alt="delete" /></button>
      </td>
    </tr>
  );
};
