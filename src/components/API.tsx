import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const APIKey = "5de0d3a9c085fde70b8c91f6f6a927f3";

type DataResponce = {
  id: number;
  poster_path: string;
};
type Person = {
  image: string;
  name: string;
  role: string;
};
type MovieResponce = {
  cast: Person[];
  crew: Person[];
} & DataResponce;

export class API {
  state;
  constructor() {
    this.state = {
      color: "#ffffff",
    };
  }

  getData() {
    async function Hello() {
      await axios
        .get(
          "https://api.themoviedb.org/3/movie/now_playing?api_key=5de0d3a9c085fde70b8c91f6f6a927f3"
        )
        .then((res) => console.log(res.data));
    }
    Hello();
    return <div style={{ backgroundColor: "red" }}>Check Console log</div>;
  }

  NowPlayingArray(wrapper: string, element: string) {
    const [Array, setArray] = useState<DataResponce[]>([]);
    async function BuildArray() {
      await axios
        .get(
          "https://api.themoviedb.org/3/movie/now_playing?api_key=5de0d3a9c085fde70b8c91f6f6a927f3"
        )
        .then((res) => {
          setArray(res.data.results);
        });
    }

    BuildArray();
    return (
      <div className={wrapper}>
        {Array.map((film) => {
          return (
            <div className={element} key={film.id}>
              {/* <Link to={`/${film.id}`}> */}
              <p>{film.id}</p>
              <img
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt=""
              />
              {/* </Link> */}
            </div>
          );
        })}
      </div>
    );
  }
}
