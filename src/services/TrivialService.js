import axios from "axios";

const API = axios.create({
  baseURL: "https://opentdb.com/api.php",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  async getQuestions(difficulty) {
    const response = await API.get("?amount=20&difficulty=" + difficulty);
    return response.data;
  },
  async getquestionsByCategory(category) {
    const response = await API.get("?amount=20&category=" + category);
    return response.data;
  },

};