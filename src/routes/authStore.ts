import create from "zustand";
import { persist } from "zustand/middleware";

type AuthStore = {
  user: User;
  token: string;
  setUser: (inputUser: User) => void;
  setToken: (tokenResponse: string) => void;
  clearAuth: () => void;
};

type User = {
  username: string;
  avatar: string;
};

const initState = {
  user: { username: "", avatar: "" },
  token: "",
};
export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: { username: "", avatar: "" },
      token: "",
      setUser: (inputUser: User) => set({ user: inputUser }),
      setToken: (tokenResponse: string) => set({ token: tokenResponse }),
      clearAuth: () => set({ ...initState }),
    }),
    {
      name: "page-auth",
    }
  )
);
