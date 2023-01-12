import axios from "axios";
<<<<<<< HEAD

export type DataResponce = {
  id: number;
  poster_path: string;
};

export class API {
  constructor() {}

  async BuildArray(
    setArray: React.Dispatch<React.SetStateAction<DataResponce[]>>
  ) {
=======
import { Movie } from "../types/api";

export const API = {
  buildArray: async () => {
    let returnArray: Movie[] = [];
>>>>>>> main
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=5de0d3a9c085fde70b8c91f6f6a927f3"
      )
      .then((res) => {
<<<<<<< HEAD
        setArray(res.data.results);
      });
  }
}
=======
        returnArray = res.data.results;
      });
    return returnArray;
  },
};
>>>>>>> main
