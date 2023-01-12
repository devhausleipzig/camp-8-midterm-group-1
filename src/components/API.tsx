import axios from "axios";
import { Movie } from "../types/api";

export class API {
  constructor() {}

  async buildArray() {
    let returnArray: Movie[] = [];
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=5de0d3a9c085fde70b8c91f6f6a927f3"
      )
      .then((res) => {
        returnArray = res.data.results;
      });
    return returnArray;
  }
}
