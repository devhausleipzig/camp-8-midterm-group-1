import create from "zustand";
import { persist } from "zustand/middleware";
import zustand from "zustand";
import { UserCircleIcon } from "@heroicons/react/24/solid";

type AuthStore = {
  user: User;
  token: string;
  setUser: (inputUser: string) => void;
  setToken: (tokenResponse: string) => void;
  clearAuth: () => void;
};

type User =  {
  username: string;
  avatar: string;
}

const initState = {
    user: "",
    token: "",
};
export const useAuthStore = create<AuthStore>()(
    persist(
      (set) => ({
        user: {username: "", avatar:""},
        token: "",
        setUser: (inputUser: string) => set({ user: {...user, username: inputUser} }),
        setToken: (tokenResponse: string) => set({ token: tokenResponse }),
        clearAuth: () => set({ ...initState }),
      }),
      {
        name: "blog-auth",
      }
    )
  );
  
    