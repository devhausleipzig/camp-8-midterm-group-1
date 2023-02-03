import create from "zustand";
import { persist } from "zustand/middleware";

type FavStore = {
  movie: number[];
  setMovie: (inputMov: number) => void;
  removeMov: (inputMov: number) => void;
  clearAuth: () => void;
};

const initState = {
  movie: [],
};
export const useFavStore = create<FavStore>()(
  persist(
    (set) => ({
      movie: [],
      setMovie: (inputMov) => {
        set((state) => {
          return !state.movie.includes(inputMov)
            ? { movie: [...state.movie, inputMov] }
            : { movie: [...state.movie] };
        });
      },
      removeMov: (inputMov) => {
        set((state) => ({
          movie: state.movie.filter((todo) => todo !== inputMov),
        }));
      },
      clearAuth: () => set({ ...initState }),
    }),
    {
      name: "page-auth",
    }
  )
);

/*


(set, get) => {

  return {
    cats: [],
    updateCats: (value) => {
      get().cats
      set((state) => {
        const cats = [...state.cats, "white"]
        return {cats: cats}
      })
    }
  }
}

======


// ver1 state
{
  cats: [],
  amHungry: true
}

// ver2 state
{
  cats: ["black"],
  amHungry: true
}


// ver3 state
{
  cats: [],
  amHungry: false
}

*/
