import useProfileStore from "@/stores/profile-store";
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
    const { isLoggedIn, setToken, setPubKey, setProfile, setIsLoggedIn } =
        useProfileStore(state => state);

    const logout = () => {
        setPubKey(undefined);
        setProfile(undefined);
        setToken(undefined);
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated: !!isLoggedIn, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
