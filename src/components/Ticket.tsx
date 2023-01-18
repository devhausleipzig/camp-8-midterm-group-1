import { create } from "zustand";
import { persist } from "zustand/middleware";
type AuthStore = {
  movieID: number,
  title: string
  date: string,
  time: string,
  seats: string[],
  totalPrice: number 
  setMovieID: () => void;
  setTitle: () => void;
  setDate: () => void;
  setTime: () => void;
  setSeats: () => void;
  setTotalPric: () => void;
};


export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      movieID: ,
      title: "",
      date: "",
      time: "",
      seats: "",
      totalPrice: "",
      setMovieID: () => void;
      setTitle: () => void;
      setDate: () => void;
      setTime: () => void;
      setSeats: () => void;
      setTotalPric: () => void;
    }),
    {
      name:"blog-auth"
    }
  )
);