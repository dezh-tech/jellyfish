import { NostrIconWhite } from "@/assets/icons/NostrIconWhite";
import { Button } from "@/components/ui/Button";

import React, { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useLogin, useActiveUser } from "nostr-hooks";
import useProfileStore from "@/stores/profile-store";
import { useQuery } from "@tanstack/react-query";

import { useNip98 } from "nostr-hooks";

type Props = {
    isCollapsed?: boolean;
};

type TProfileGetOutput = {
    events: { kind: number; content?: string }[];
};

const AuthenticationButton: React.FC<Props> = ({ isCollapsed }) => {
    const { loginWithExtension } = useLogin();
    const { activeUser } = useActiveUser();
    const { getToken } = useNip98();

    // Get and Set pubKey from profile store
    const { pubKey, profile, setToken, setPubKey, setProfile } =
        useProfileStore(state => state);

    // Get Profile Api
    const getProfileQuery = useQuery<TProfileGetOutput>({
        queryKey: ["profile"],
        queryFn: () => {
            const relay = import.meta.env.VITE_JELLYFISH_RELAY;
            const filters = [
                {
                    kinds: [0],
                    limit: 1,
                    authors: [pubKey],
                },
            ];

            // Convert filters to a JSON string and encode it
            const encodedFilters = encodeURIComponent(JSON.stringify(filters));

            const url = `${import.meta.env.VITE_PROFILE_API_BASE_URL}?relay=${encodeURIComponent(relay)}&filters=${encodedFilters}`;

            return fetch(url, {
                // headers: {
                //     Accept: "application/json",
                // },
            }).then(res => res.json());
        },
        enabled: false,
    });

    const setProfileToStore = (data: TProfileGetOutput | undefined) => {
        try {
            if (
                data &&
                data?.events[0] &&
                data?.events[0].kind === 0 &&
                data?.events[0].content
            ) {
                // Set profile to store
                const parsedProfile = JSON.parse(data?.events[0].content);
                if (parsedProfile && parsedProfile !== profile) {
                    setProfile(parsedProfile);
                }
            }
        } catch (err: unknown) {
            // Not do anyting
            console.error(err);
        }
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

    useEffect(() => {
        console.log(
            "LOGIN USER",
            activeUser,
            pubKey,
            activeUser?.pubkey && activeUser?.pubkey !== pubKey,
        );
        if (activeUser?.pubkey && activeUser?.pubkey !== pubKey) {
            setPubKey(activeUser?.pubkey);
            getToken({
                method: "GET",
                url:
                    import.meta.env.VITE_API_BASE_URL +
                    "/subscriptions/remaining",
            })
                .then(token => {
                    setToken(token);
                })
                .catch(err => {
                    console.error("Error get token: ", err);
                });
        }
    }, [activeUser]);

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
                    <Avatar className="w-8 h-8" title="John Doe">
                        <AvatarImage
                            src={
                                profile?.picture ??
                                "/images/avatar-paceholder.png"
                            }
                            alt="User Avatar"
                        />
                        <AvatarFallback>User name</AvatarFallback>
                    </Avatar>
                ) : (
                    <Button
                        variant="outline"
                        className="justify-start min-w-[100px] w-full h-12 rounded-full"
                    >
                        <Avatar className="w-8 h-8 shrink-0">
                            <AvatarImage
                                src={
                                    profile?.picture ??
                                    "/images/avatar-paceholder.png"
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
            onClick={() => loginWithExtension()}
        >
            <img src="/svg/nostr.svg" alt="nostr icon" /> Log In
        </Button>
    );
};

export default AuthenticationButton;
