import useProfileStore from "@/stores/profile-store";
import { useNostrLogin } from "@/providers/NostrLoginProvider";
import React, { createContext, PropsWithChildren, useContext } from "react";

const AuthContext = createContext<{
    isAuthenticated: boolean;
    logout?: () => void;
}>({ isAuthenticated: false });

type Props = PropsWithChildren;

export function useAuth() {
    return useContext(AuthContext);
}

const AuthProvider: React.FC<Props> = ({ children }) => {
    const { logout: nostrLogout } = useNostrLogin();

    const { isLoggedIn, reset } = useProfileStore(state => state);

    const logout = async () => {
        reset();
        await nostrLogout();
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated: !!isLoggedIn, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
