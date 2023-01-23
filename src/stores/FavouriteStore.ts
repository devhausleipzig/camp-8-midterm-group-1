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
      setMovie: (inputMov) =>
        set((state) => ({ movie: [...state.movie, inputMov] })),
      removeMov: (inputMov) =>
        set((state) => ({
          movie: state.movie.filter((todo) => todo !== inputMov),
        })),
      clearAuth: () => set({ ...initState }),
    }),
    {
      name: "page-auth",
    }
  )
);
