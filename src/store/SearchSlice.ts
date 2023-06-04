import { StateCreator } from "zustand";
import { useAppStore } from "./store";

export type SearchState = {
    search: string;
    setSearch: (search: string) => void;
};

export const searchSlice: StateCreator<SearchState> = (set) => ({
    search: "",
    setSearch: (search) => set({ search }),
});




