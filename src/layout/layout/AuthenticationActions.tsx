import { NostrIconWhite } from "@/assets/icons/NostrIconWhite";
import { Button } from "@/components/ui/Button";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
    isLogin?: boolean;
    isCollapsed?: boolean;
};

const AuthenticationButton: React.FC<Props> = ({ isLogin, isCollapsed }) => {
    if (isLogin) {
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
        <Button variant="outline" className="w-full h-12 rounded-full">
            <NostrIconWhite /> Log In
        </Button>
    );
};

export default AuthenticationButton;
