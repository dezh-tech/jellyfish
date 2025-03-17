import { NostrIconWhite } from "@/assets/icons/NostrIconWhite";
import { Button } from "@/components/ui/Button";

import React, { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useLogin, useActiveUser } from "nostr-hooks";

type Props = {
    isCollapsed?: boolean;
};

const AuthenticationButton: React.FC<Props> = ({ isCollapsed }) => {
    const { loginWithExtension, loginFromLocalStorage } = useLogin();
    const { activeUser } = useActiveUser();
    const profile = activeUser ? activeUser?.profile : null; // Set null, Not set undefined

    useEffect(() => {
        if (activeUser === null) {
            loginFromLocalStorage();
        }
    }, [activeUser, loginFromLocalStorage]);

    useEffect(() => {
        console.log({ activeUser });
    }, [activeUser]);

    if (profile === undefined) {
        // Handle laoding
        return (
            <Button variant="outline" className="w-full h-12 rounded-full">
                <NostrIconWhite /> loading...
            </Button>
        );
    }

    if (profile) {
        return (
            <>
                {isCollapsed ? (
                    <Avatar className="w-8 h-8" title="John Doe">
                        <AvatarImage
                            src="/images/team-members/1.png"
                            alt="User Avatar"
                        />
                        <AvatarFallback>My User Name</AvatarFallback>
                    </Avatar>
                ) : (
                    <Button
                        variant="outline"
                        className="justify-start w-full h-12 rounded-full"
                    >
                        <Avatar className="w-8 h-8 shrink-0">
                            <AvatarImage
                                src="/images/team-members/1.png"
                                alt="User Avatar"
                            />
                            <AvatarFallback>My User Name</AvatarFallback>
                        </Avatar>

                        <p className="text-sm font-medium line-clamp-1">
                            John Doe
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
