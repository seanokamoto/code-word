import axios from "axios";

const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export default async function getDefinition(word: string) {
  const response = await axios.get(API_URL + word);
  return response.data;
}