import { buttonVariants } from "@/components/ui/Button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import useProfileStore from "@/stores/profile-store";
import { getRemaningFormattedTime } from "@/utils/dayjs";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RelayList = () => {
    const { token } = useProfileStore(state => state);

    console.log(token, "token");

    const [remaring, setRemaring] = useState<number>(0);

    // Get Remaining Api
    const getRemainingQuery = useQuery<number>({
        queryKey: ["remaining"],
        queryFn: () => {
            const url =
                import.meta.env.VITE_API_BASE_URL + "/subscriptions/remaining";

            return fetch(url, {
                headers: {
                    Accept: "application/json",
                    Authorization: token ?? "",
                },
            }).then(res => res.json());
        },
        enabled: false,
    });

    useEffect(() => {
        getRemainingQuery.refetch();
    }, [token]);

    useEffect(() => {
        if (getRemainingQuery.data) {
            const remaining = getRemainingQuery.data;
            setRemaring(remaining);
        }
    }, [getRemainingQuery.data]);
    return (
        <main className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-[107px] pt-16 sm:pt-20 md:pt-24 lg:pt-24">
            <div
                className="relative rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[22px]"
                style={{
                    background:
                        "linear-gradient(329.52deg, rgba(160, 197, 247, 0.248) -2.39%, rgba(191, 224, 240, 0.458552) 54.92%, rgba(17, 22, 40, 0.62) 98.88%)",
                }}
            >
                <div
                    className="py-4 sm:py-5 md:py-6 lg:py-7 px-6 sm:px-7 md:px-8 lg:px-8 space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-6 scale-y-[99.1%] scale-x-[99.8%] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[22px]"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(31, 36, 58, 0.75) 0%, rgba(17, 22, 40, 0.675) 100%)",
                    }}
                >
                    <header className="flex justify-between gap-4 max-md:flex-col">
                        {getRemainingQuery.isLoading ? (
                            <>
                                <Skeleton className="flex-1 h-10 sm:h-12 md:h-14 lg:h-16 rounded-md bg-[#ACCDF2]/40" />
                                <Skeleton className="h-10 sm:h-11 md:h-12 lg:h-12 min-w-[80px] sm:min-w-[96px] md:min-w-[104px] lg:min-w-[112px] rounded-md bg-[#ACCDF2]/40" />
                            </>
                        ) : (
                            <>
                                <p className="flex-1 text-[#ACCDF2] font-roboto-mono text-2xl sm:text-3xl md:text-4xl lg:text-[36px]">
                                    {getRemaningFormattedTime(remaring)}
                                </p>

                                <Link
                                    to={`/relay`}
                                    className={cn(
                                        buttonVariants(),
                                        "flex min-w-[80px] sm:min-w-[96px] md:min-w-[104px] lg:min-w-[112px] h-10 sm:h-11 md:h-12 lg:h-12",
                                    )}
                                >
                                    Renew
                                </Link>
                            </>
                        )}
                    </header>
                </div>
            </div>
        </main>
    );
};
export default RelayList;
