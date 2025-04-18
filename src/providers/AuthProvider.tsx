import useProfileStore from "@/stores/profile-store";
import { useLogin } from "nostr-hooks";
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
    const { logout: nostrLogout } = useLogin();

    const { isLoggedIn, reset } = useProfileStore(state => state);

    const logout = () => {
        reset();
        nostrLogout();
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated: !!isLoggedIn, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
