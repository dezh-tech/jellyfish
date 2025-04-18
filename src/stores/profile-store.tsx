import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type TProfile = {
    picture?: string;
    display_name?: string;
};

type State = {
    pubKey?: string;
    isLoggedIn?: boolean;
    profile?: TProfile;
    token?: string;
};

const initialState: State = {
    profile: undefined,
    pubKey: undefined,
    isLoggedIn: undefined,
    token: undefined,
};

type Actions = {
    setPubKey: (pubKey?: string) => void;
    setProfile: (profile?: TProfile) => void;
    setIsLoggedIn: (isLoggedIn?: boolean) => void;
    setToken: (token?: string) => void;
    reset: () => void;
};

type Store = State & Actions;

const useProfileStore = create(
    persist<Store>(
        set => ({
            ...initialState,
            setPubKey: pubKey => set({ pubKey }),
            setProfile: profile => set({ profile }),
            setIsLoggedIn: isLoggedIn => set({ isLoggedIn }),
            setToken: token => set({ token }),
            reset: () => {
                set({ ...initialState });
            },
        }),
        {
            name: "profile-storage",
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
);

export default useProfileStore;
