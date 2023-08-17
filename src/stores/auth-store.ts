import { create } from "zustand";

interface AuthState {
  token: string | null;
  // eslint-disable-next-line no-unused-vars
  setToken: (token: string | null) => void;
  logout: () => void;
}

const authStore = create<AuthState>((set) => ({
  token: localStorage.getItem("token"),
  setToken: (token) => {
    localStorage.setItem("token", token!);
    set({ token });
  },
  logout: () => {
    localStorage.removeItem("token");
    set({ token: null });
  },
}));

export default authStore;
