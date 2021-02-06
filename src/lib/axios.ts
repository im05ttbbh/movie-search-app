import axios from "axios";
import { apiKey } from "./entity";

export const fetchMovie = async (searchValue: string) => {
  try {
    return await axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=${apiKey}`)
  } catch (e) {
    console.error(e)
  }
}
