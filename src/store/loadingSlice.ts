import { StateCreator } from "zustand";

export interface LoadingState {
    loading: boolean;
    setLoading: (loading: boolean) => void;
}

export const createLoadingSlice: StateCreator<LoadingState> = (set, get) => ({
    loading: false,
   setLoading: () => set({ loading: !get().loading }),
});
