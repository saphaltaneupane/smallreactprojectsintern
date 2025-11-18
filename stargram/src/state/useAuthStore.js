import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,
  isLoading: false,
  error: null,

  login: (username, password) => {
    set({ isLoading: true, error: null });

    if (username === "test@test.com" && password === "1234") {
      const userData = { username };
      localStorage.setItem("user", JSON.stringify(userData));
      set({ user: userData, isLoading: false });
      return true;
    }

    set({ error: "Invalid credentials", isLoading: false });
    return false;
  },

  logout: () => {
    localStorage.removeItem("user");
    set({ user: null, error: null });
  },

  clearError: () => set({ error: null }),
}));
