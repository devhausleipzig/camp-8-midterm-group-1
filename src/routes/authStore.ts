import create from "zustand";
import { persist } from "zustand/middleware";

type Infos = {
  hash: string;
  email: string;
  salt: string;
  avatar: string;
};
type AuthStore = {
  infos: Infos;
  setInfos: (inputInfos: Infos) => void;
  clearAuth: () => void;
};

const initState = {
  infos: { hash: "", email: "", salt: "asdfkjasdfkj$slkjfval", avatar: "" },
};
export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      infos: {
        hash: "$2a$10$8dEUsmfvVx6VB1ibcKTWre1rBOmKumuZhguEemKompS77GPOCMLR.",
        email: "dan@devhausleipzig.de",
        salt: "asdfkjasdfkj",
        avatar: "",
      },
      setInfos: (inputInfos: Infos) => set({ infos: inputInfos }),
      clearAuth: () => set({ ...initState }),
    }),
    {
      name: "page-auth",
    }
  )
);
