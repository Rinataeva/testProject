import { useState, useContext } from "react";
import { WordsStoreContext } from "../../store/WordsStore/WordsStoreContext";
import "./styles.css";

export const AddWordForm = () => {
  const [english, setEnglish] = useState("");
  const [russian, setRussian] = useState("");
  const [transcription, setTranscription] = useState("");
  const store = useContext(WordsStoreContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (english && russian && transcription) {
      store.addWord(english, transcription, russian);
      setEnglish("");
      setRussian("");
      setTranscription("");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="add-word-form">
        <input
          type="text"
          placeholder="English"
          value={english}
          onChange={(e) => setEnglish(e.target.value)}
          className="add-word-input"
        />
        <input
          type="text"
          placeholder="Russian"
          value={russian}
          onChange={(e) => setRussian(e.target.value)}
          className="add-word-input"
        />
        <input
          type="text"
          placeholder="Transcription"
          value={transcription}
          onChange={(e) => setTranscription(e.target.value)}
          className="add-word-input"
        />
        <button type="submit" className="add-word-button">
          Add word
        </button>
      </form>
    </div>
  );
};
