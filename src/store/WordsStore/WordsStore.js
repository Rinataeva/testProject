import { makeAutoObservable } from "mobx";
import { wordApiService } from "../../ApiService/ApiService.js";

class WordsStore {
  words = [];
  loading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
    this.loadWords();
  }

  async loadWords() {
    this.loading = true;
    try {
      const data = await wordApiService.fetchWords();
      if (Array.isArray(data)) {
        this.words = data;
      } else {
        throw new Error("Формат данных не соответствует ожидаемому");
      }
    } catch (err) {
      this.error = "Ошибка загрузки слов. Попробуйте позже";
      console.error("Ошибка загрузки данных", err);
    } finally {
      this.loading = false;
    }
  }

  async addWord(english, transcription, russian) {
    const newWord = {
      id: this.words.length,
      english,
      transcription,
      russian,
    };

    this.words.push(newWord);

    try {
      await wordApiService.create(newWord);
    } catch (err) {
      console.error("Error adding word to server:", err);
      this.words = this.words.filter((word) => word.id !== newWord.id);
    }
  }

  deleteWord(id) {
    this.words = this.words.filter((word) => word.id !== id);
    wordApiService.delete(id);
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
    try {
      await wordApiService.update(wordToUpdate, id);
      this.words = this.words.map((word) =>
        word.id === id ? { ...word, ...updatedWord } : word
      );
    } catch (err) {
      console.log("Error updating on server", err);
    }
  }
}

export const wordsStore = new WordsStore();
