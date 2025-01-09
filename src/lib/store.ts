// global store/state

import { create } from "zustand";

export interface IStore {
    count: number;
    setCount: (value: number) => void;
}

export const useStore = create<IStore>(set => ({
    count: 0,
    setCount: value => set(() => ({ count: value })),
}));

// Example:
// const { count, setCount } = useStore();
