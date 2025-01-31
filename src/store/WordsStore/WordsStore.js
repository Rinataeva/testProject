// WordsStore.js
import { makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from "uuid";
import { wordApiService } from "../../ApiService/ApiService.js";

class WordsStore {
  words = [];
  loading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  // Load words from API
  async loadWords() {
    this.loading = true;
    try {
      const data = await wordApiService.getWords();
      if (Array.isArray(data)) {
        this.words = data; // Update words
      } else {
        throw new Error("Invalid data format");
      }
    } catch (err) {
      this.error = "Error loading data. Try again later.";
      console.error("Error loading data", err);
    } finally {
      this.loading = false;
    }
  }

  async addWord(english, transcription, russian) {
    const newWord = {
      id: uuidv4(),
      english,
      transcription,
      russian,
    };

    this.words.push(newWord);

    try {
      await wordApiService.addWord(newWord);
    } catch (err) {
      console.error("Error adding word to server:", err);

      this.words = this.words.filter((word) => word.id !== newWord.id);
    }
  }

  deleteWord(id) {
    this.words = this.words.filter((word) => word.id !== id);
    wordApiService.deleteWord(id); // Delete from server
  }

  async updateWord(updatedWord) {
    const { id, english, transcription, russian } = updatedWord;
    const wordToUpdate = {
      id,
      english,
      transcription,
      russian,
      tags: "",
      tags_json: "",
    };
    await wordApiService.updateWord(wordToUpdate, id);
    this.words = this.words.map((word) =>
      word.id === id ? { ...word, ...updatedWord } : word
    );
  }
}

export const wordsStore = new WordsStore();
