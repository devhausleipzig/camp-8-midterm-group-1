import create from "zustand";
import { persist } from "zustand/middleware";

type TicketStore = {
  movieID: number;
  date: string;
  time: string;
  seats: string[];
  totalPrice: number;
  setMovieID: (movieSelected: number) => void;
  setDate: (dateSelected: string) => void;
  setTime: (timeSelected: string) => void;
  setSeats: (seatsSelected: string[]) => void;
  setTotalPrice: (totalPriceSelected: number) => void;
  clear: () => void;
};

const initialState = {
  movieID: 0,
  date: "",
  time: "",
  seats: [],
  totalPrice: 0,
};

export const useTicketStore = create<TicketStore>()(
  persist(
    (set) => ({
      movieID: 0,
      date: "24.01.2023",
      time: "13:40",
      seats: ["C-3", "C-5", "A-10"],
      totalPrice: "43.30$",
      setMovieID: (movieInput: number) => set({ movieID: movieInput }),
      setDate: (dateInput: string) => set({ date: dateInput }),
      setTime: (timeInput: string) => set({ time: timeInput }),
      setSeats: (seatsInput: string[]) => set({ seats: seatsInput }),
      setTotalPrice: (totalPriceInput: number) =>
        set({ totalPrice: totalPriceInput }),
      clear: () => set({ ...initialState }),
    }),
    {
      name: "store-auth",
    }
  )
);
