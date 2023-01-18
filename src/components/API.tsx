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

  // movieDetail: async (id: number) => {
  //   return await axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/${id}?api_key=5de0d3a9c085fde70b8c91f6f6a927f3`
  //     )
  //     .then((res) => res.data);
  // },
  movieDetail: async (id: number) => {
    const a = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=5de0d3a9c085fde70b8c91f6f6a927f3`
      )
      .then((res) => {
        return [res.data.crew[0].name, res.data.crew[1].name];
      });
    const b = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=5de0d3a9c085fde70b8c91f6f6a927f3`
      )
      .then((res) => res.data);
    return {
      ...b,
      writer: a[0],
      director: a[0],
    }},
  castAndCrew: async (id: number) => {
    return await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=5de0d3a9c085fde70b8c91f6f6a927f3&language=en-US`
      )
      .then((response) => response.data);
  },
};
