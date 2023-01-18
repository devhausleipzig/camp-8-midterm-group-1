import { create } from "zustand";
import { persist } from "zustand/middleware";


type TicketStore = {
  movieID: number,
  date: string,
  time: string,
  seats: string[],
  totalPrice: number 
  setMovieID:(movieSelected:number)=>void;
  setDate:(dateSelected:number)=>void;
  setTime:(timeSelected:number)=>void;
  setSeats:(seatsSelected:number)=>void;
  setTotalPrice:(totalPriceSelected:number)=>void;
};

export const useTicketStore = create<TicketStore>()(
  persist(
    (set) => ({
      movieID: 0,
      date: "",
      time: "",
      seats: [],
      totalPrice: 0,
      setMovieID: (movieInput:number) => set({ movieID: movieInput }),
      setDate: (dateInput:string) => set({ date: dateInput }),
      setTime: (timeInput:string) => set({ time: timeInput }),
      setSeats: (seatsInput:string[]) => set({ seats: seatsInput }),
      setTotalPrice: (totalPriceInput:number) => set({ totalPrice: totalPriceInput }),
    }),
    {
      name:"store-auth"
    }
  )
);