import { Alert } from "@/components/ui/Alert";

const IsAvailableUserName = ({
    username,
    status,
    isUsernameAvailable,
}: {
    username: string | null;
    status: string | null;
    isUsernameAvailable: boolean;
}) => {
    return (
        <div className="flex flex-col items-center  ">
            <div>
                {status && (
                    <Alert variant={isUsernameAvailable ? "success" : "error"}>
                        {isUsernameAvailable
                            ? "Congratulation! This NIP-05 is available"
                            : "Sorry, this name is already taken."}
                    </Alert>
                )}
            </div>
            <h2 className="gradient-text text text-center font-bold   text-[64px] animate-fade-up ">
                {username}
            </h2>
        </div>
    );
};

export default IsAvailableUserName;
