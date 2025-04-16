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

type Actions = {
    setPubKey: (pubKey?: string) => void;
    setProfile: (picture?: TProfile) => void;
    setIsLoggedIn: (isLoggedIn?: boolean) => void;
    setToken: (token?: string) => void;
};

type Store = State & Actions;

const useProfileStore = create(
    persist<Store>(
        set => ({
            setPubKey: (pubKey?: string) => set({ pubKey }),
            setProfile: (profile?: TProfile) => set({ profile }),
            setIsLoggedIn: (isLoggedIn?: boolean) => set({ isLoggedIn }),
            setToken: (token?: string) => set({ token }),
        }),
        {
            name: "profile-storage",
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
);

export default useProfileStore;
