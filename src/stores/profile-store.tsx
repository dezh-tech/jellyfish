import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type TProfile = {
    icon?: string;
    displayName?: string;
};

type State = {
    pubKey?: string;
    profile?: TProfile;
};

type Actions = {
    setPubKey: (pubKey: string) => void;
    setProfile: (profile: TProfile) => void;
};

type Store = State & Actions;

const useProfileStore = create(
    persist<Store>(
        set => ({
            setPubKey: (pubKey: string) => set({ pubKey }),
            setProfile: (profile?: TProfile) => set({ profile }),
        }),
        {
            name: "profile-storage",
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
);

export default useProfileStore;
