import { UsernameStatus } from "@/enums/usernameStatus";
import { cn } from "@/lib/utils";
import { useSearchParams } from "react-router-dom";
import CheckAvailabilityForm from "../Availability/CheckAvailabity/CheckAvailabilityForm";
import IsAvailableUserName from "./IsAvailableUserName";
import SetUserNameForm from "./SetUserNameForm";
// import NameSuggestions from "./NameSuggestions";

const SetUserName = () => {
    const [searchParams] = useSearchParams();
    const username = searchParams.get("username");
    const status = searchParams.get("status");
    const domainId = searchParams.get("domainId");
    const price = searchParams.get("price");
    const isUsernameAvailable = Number(status) === UsernameStatus.AVAILABLE;

    return (
        <section
            className={cn(
                "py-10 sm:py-20 md:py-24 lg:py-[152px]", // Adjust padding for different screen sizes
                {
                    "space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-[111px]":
                        isUsernameAvailable,
                    "space-y-6 sm:space-y-10 md:space-y-12 lg:space-y-[72px]":
                        !isUsernameAvailable,
                },
            )}
        >
            <IsAvailableUserName
                isUsernameAvailable={isUsernameAvailable}
                username={username}
                status={status}
            />
            <div className="max-w-full sm:max-w-md md:max-w-lg lg:max-w-[645px] mx-auto space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-6">
                {isUsernameAvailable ? (
                    <>
                        <SetUserNameForm
                            username={username}
                            domainId={domainId}
                        />
                        <div>
                            <p className="text-sm sm:text-base md:text-lg lg:text-sm font-roboto-mono text-[#80899F]">
                                Lifetime payment for{" "}
                                <span className="text-base font-light sm:text-lg md:text-xl lg:text-base font-bankGothic">
                                    {username}
                                </span>{" "}
                                is {price} sats
                            </p>
                        </div>
                    </>
                ) : (
                    <>
                        {/* <NameSuggestions /> */}
                        <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-6">
                            <h4 className="text-base font-bold sm:text-lg md:text-xl lg:text-xl gradient-text">
                                Type another name:
                            </h4>
                            <CheckAvailabilityForm />
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default SetUserName;
