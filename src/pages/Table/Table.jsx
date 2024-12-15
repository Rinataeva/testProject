import { useState } from "react";


export const Table = ({ cards = [] }) => {
  if (!cards || !Array.isArray(cards)) {
    return <div>No data</div>;
  }
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>N/N</th>
            <th>English</th>
            <th>Transcription</th>
            <th>Russian</th>
            <th>Buttons</th>
          </tr>
        </thead>
        <tbody>
          {cards.map((card) => {
            return <TableRow card={card} key={card.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

const TableRow = ({ rowData }) => {
  const { id, english, transcription, russian } = rowData;
  const [isSelected, setIsSelected] = useState(false);
  const [value, setValue] = useState({ id, english, transcription, russian });

  function handleClose() {
    setIsSelected(!isSelected); 
    setValue({...rowData}); 
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
        <button onClick={handleSave}>Save</button>
        <button onClick={handleClose}>Close</button>
      </td>
    </tr>
  ) : (
    <tr>
      <td>{id}</td>
      <td>{value.english}</td>
      <td>{value.transcription}</td>
      <td>{value.russian}</td>
      <td>
        <button onClick={handleEdit}>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  );
};
