import axios from "axios";

export type DataResponce = {
  id: number;
  poster_path: string;
};

export class API {
  constructor() {}

  async BuildArray(
    setArray: React.Dispatch<React.SetStateAction<DataResponce[]>>
  ) {
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=5de0d3a9c085fde70b8c91f6f6a927f3"
      )
      .then((res) => {
        setArray(res.data.results);
      });
  }
}
