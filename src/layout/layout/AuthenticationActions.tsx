import { NostrIconWhite } from "@/assets/icons/NostrIconWhite";
import { Button } from "@/components/ui/Button";

import React, { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useNostrLogin } from "@/providers/NostrLoginProvider";
import useProfileStore from "@/stores/profile-store";
import { useQuery } from "@tanstack/react-query";

import { generateNip98Token, resolveProfile } from "@/utils/nostr";
import { useNavigate } from "react-router-dom";

type Props = {
    isCollapsed?: boolean;
};

const AuthenticationButton: React.FC<Props> = ({ isCollapsed }) => {
    const navigate = useNavigate();
    const { login, pubkey: nostrLoginPubkey } = useNostrLogin();

    // Get and Set pubKey from profile store
    const { pubKey, profile, setToken, setPubKey, setProfile, setIsLoggedIn } =
        useProfileStore(state => state);

    // Get Profile Api
    const getProfileQuery = useQuery({
        queryKey: ["profile", pubKey],
        queryFn: async () => {
            if (!pubKey) return null;
            return await resolveProfile(pubKey);
        },
        enabled: !!pubKey,
    });

    const setProfileToStore = (profileData: any) => {
        try {
            if (pubKey && profileData && profileData !== profile) {
                setProfile(profileData);
            }
        } catch (err: unknown) {
            console.error(err);
        }
    };

    const handleNavigateToDashboard = () => {
        navigate("/dashboard");
    };

    useEffect(() => {
        if (pubKey) {
            getProfileQuery.refetch();
        }
    }, [pubKey]);

    useEffect(() => {
        if (getProfileQuery.isFetched) {
            setProfileToStore(getProfileQuery.data);
        }
    }, [getProfileQuery.isFetched]);

    // Sync nostr-login state with profile store
    useEffect(() => {
        if (nostrLoginPubkey && nostrLoginPubkey !== pubKey) {
            console.log('Syncing pubkey from nostr-login to profile store:', nostrLoginPubkey);
            setPubKey(nostrLoginPubkey);

            // Generate NIP-98 token for API authentication
            generateNip98Token(
                "GET",
                import.meta.env.VITE_API_BASE_URL + "/subscriptions/remaining"
            )
                .then(token => {
                    setToken(token);
                    setIsLoggedIn(true);
                    console.log('Successfully generated NIP-98 token and set login state');
                })
                .catch(err => {
                    console.error("Error generating token: ", err);
                });
        } else if (!nostrLoginPubkey && pubKey) {
            // User logged out in nostr-login, clear profile store
            console.log('User logged out, clearing profile store');
            setPubKey('');
            setProfile(undefined);
            setToken('');
            setIsLoggedIn(false);
        }
    }, [nostrLoginPubkey, pubKey, setPubKey, setProfile, setToken, setIsLoggedIn]);

    if (getProfileQuery?.isLoading && getProfileQuery?.isFetching) {
        // Handle laoding
        return (
            <Button variant="outline" className="w-full h-12 rounded-full">
                <NostrIconWhite /> loading...
            </Button>
        );
    }

    if (profile || pubKey) {
        return (
            <>
                {isCollapsed ? (
                    <Avatar
                        className="w-8 h-8"
                        title={profile?.display_name ?? pubKey?.substring(0, 6)}
                        onClick={() => handleNavigateToDashboard()}
                    >
                        <AvatarImage
                            src={
                                profile?.picture ??
                                "/images/avatar-paceholder2.png"
                            }
                            alt="User Avatar"
                        />
                        <AvatarFallback>
                            {" "}
                            {profile?.display_name ?? pubKey?.substring(0, 6)}
                        </AvatarFallback>
                    </Avatar>
                ) : (
                    <Button
                        variant="outline"
                        className="justify-start min-w-[100px] w-full h-12 rounded-full"
                        onClick={() => handleNavigateToDashboard()}
                        title={profile?.display_name ?? pubKey?.substring(0, 6)}
                    >
                        <Avatar className="w-8 h-8 shrink-0">
                            <AvatarImage
                                src={
                                    profile?.picture ??
                                    "/images/avatar-paceholder2.png"
                                }
                                alt="User Avatar"
                            />
                            <AvatarFallback>User name</AvatarFallback>
                        </Avatar>

                        <p className="text-sm font-medium line-clamp-1">
                            {profile?.display_name ?? pubKey?.substring(0, 6)}
                        </p>
                    </Button>
                )}
            </>
        );
    }

    return (
        <Button
            variant="outline"
            className="w-full h-12 rounded-full"
            onClick={() => login()}
        >
            <img src="/svg/nostr.svg" alt="nostr icon" /> Log In
        </Button>
    );
};

export default AuthenticationButton;
