import create from "zustand";
import { persist } from "zustand/middleware";

type Infos = {
  password: string;
  email: string;
};
type AuthStore = {
  infos: Infos;
  setInfos: (inputInfos: Infos) => void;
  clearAuth: () => void;
  token: string;
  setToken: (tokenResponse: string) => void;
};

const initState = {
  infos: { password: "", email: "" },
  token: "",
};
export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      token: "",
      infos: {
        password: "passpasstest",
        email: "peel@peel.de",
      },
      setToken: (tokenResponse) => set({ token: tokenResponse }),
      setInfos: (inputInfos: Infos) => set({ infos: inputInfos }),
      clearAuth: () => set({ ...initState }),
    }),
    {
      name: "page-auth",
    }
  )
);
