const API_URL = "http://itgirlschool.justmakeit.ru/api/words";
class WordApiService {
  async fetchWords() {
    const response = await fetch(API_URL);
    return await response.json();
  }
  async create(word) {
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(word),
    });
  }
  async update(word, id) {
    await fetch(`${API_URL}/${id}/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(word),
    });
  }
  async delete(id) {
    await fetch(`${API_URL}/${id}/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export const wordApiService = new WordApiService();

