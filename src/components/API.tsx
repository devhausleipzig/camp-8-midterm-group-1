import axios from "axios";
import { Movie } from "../types/api";

export const API = {
  buildArray: async () => {
    let returnArray: Movie[] = [];
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=5de0d3a9c085fde70b8c91f6f6a927f3"
      )
      .then((res) => {
        returnArray = res.data.results;
      });
    return returnArray;
  },
  searchResult: async (input: string) => {
    const info: Movie[] = await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=5de0d3a9c085fde70b8c91f6f6a927f3&include_adult=false&query=${input}`
      )
      .then((res) => {
        return res.data.results;
      });
    const returnStuff = info.map((x) => {
      return { title: x.title, genre: x.genre_ids, id: x.id };
    });
    return returnStuff;
  },
  genresList: async () => {
    return await axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=5de0d3a9c085fde70b8c91f6f6a927f3&include_adult=false`
      )
      .then((res) => {
        return res.data.genres;
      });
  },
};
