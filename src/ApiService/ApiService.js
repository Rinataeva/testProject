class CardApiService {
  async getWords() {
    try {
      const response = await fetch(
        "http://itgirlschool.justmakeit.ru/api/words"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
      return []; 
    }
  }
}
export const cardApiService = new CardApiService();
