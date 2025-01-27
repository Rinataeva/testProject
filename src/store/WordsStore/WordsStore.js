import { makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from "uuid";
import {cardApiService} from "../../ApiService/ApiService.js";

class WordsStore {
  words = [];
  currentIndex = 0;
  error = null;
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async loadWords() {
    this.loading = true;
    try {
      const data = await cardApiService.getWords();  
      if (Array.isArray(data)) {
        this.words = data;  
      } else {
        throw new Error("Данные не в ожидаемом формате");
      }
    } catch (err) {
      this.error = "Ошибка загрузки данных. Попробуйте позже.";  
      console.error("Ошибка при загрузке данных", err);
    } finally {
      this.loading = false;
    }
  }

  deleteWord(id) {
    this.words = this.words.filter(word => word.id !== id);
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
    await cardApiService.addWord(newWord);  // Assuming addWord is a method in your API service to save to server
  } catch (err) {
    console.error("Error adding word to the server:", err);
    // Optionally, revert local changes if needed
    this.words = this.words.filter(word => word.id !== newWord.id);
  }
}

  handleBackwardClick() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
    }
  }

  handleForwardClick() {
    if (this.currentIndex < this.words.length - 1) {
      this.currentIndex += 1;
    }
  }

  setError(errorMessage) {
    this.error = errorMessage;
  }

  setLoading(isLoading) {
    this.loading = isLoading;
  }
}

export const wordsStore = new WordsStore();