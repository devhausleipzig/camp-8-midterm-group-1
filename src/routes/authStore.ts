import create from "zustand";
import { persist } from "zustand/middleware";
import zustand from "zustand";

type AuthStore = {
  user: User;
  token: string;
  setUser: (inputUser: User) => void;
  setToken: (tokenResponse: string) => void;
  setInfos: (inputInfos: Infos) => void;
  clearAuth: () => void;
};

type Infos = {
  password: string;
  email: string;
}

type User = {
  username: string;
  avatar: string;
};

const initState = {
  user: { username: "", avatar: "" },
  token: "",
  infos: { password:"", email: ""},
};
export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: { username: "", avatar: "" },
      token: "",
      infos: { password: "", email: ""},
      setUser: (inputUser: User) => set({ user: inputUser }),
      setToken: (tokenResponse: string) => set({ token: tokenResponse }),
      setInfos: (inputInfos: Infos) => set ({infos: inputInfos}),
      clearAuth: () => set({ ...initState }),
    }),
    {
      name: "page-auth",
    }
  )
);