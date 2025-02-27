import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

// const sampleData: MyNpubsCardProps[] = [
//     {
//         username: "Ehsan@nosrt.eco",
//         npub: "npub1h5h535j4809uf23j8y9t4n23090",
//         id: "1",
//         // items: [
//         //     {
//         //         name: "npub",
//         //         value: "npub1h5h535j4809uf23j8y9t4n23090",
//         //     },
//         // ],
//     },
// ];

const Dashboard = () => {
    // const fetchUsernames = useCallback(() => {
    //     return dashboardService.getMyUsernames().then(res => res.data.data);
    // }, []);

    // const { data, loading, error } = useFetch(fetchUsernames);

    // if (error)
    //     return (
    //         <p className="flex h-[70vh] sm:h-[75vh] md:h-[80vh] items-center text-4xl sm:text-5xl md:text-6xl lg:text-[56px] text-center justify-center gradient-text">
    //             Error: {error.message}
    //         </p>
    //     );

    return (
        <main className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-[107px] pt-16 sm:pt-20 md:pt-24 lg:pt-24">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] gradient-text uppercase">
                Hi, welcome Yaser Sharifi
                {/* TODO: add username */}
            </h2>

            <div
                className="relative rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[22px]"
                style={{
                    background:
                        "linear-gradient(329.52deg, rgba(160, 197, 247, 0.248) -2.39%, rgba(191, 224, 240, 0.458552) 54.92%, rgba(17, 22, 40, 0.62) 98.88%)",
                }}
            >
                <div
                    className="py-4 sm:py-5 md:py-6 lg:py-7 px-3 sm:px-4 md:px-5 lg:px-4 space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-6 scale-y-[99.1%] scale-x-[99.8%] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[22px]"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(31, 36, 58, 0.75) 0%, rgba(17, 22, 40, 0.675) 100%)",
                    }}
                >
                    <header className="flex justify-between gap-4 max-md:flex-col">
                        <p className="flex-1 text-[#ACCDF2] font-roboto-mono text-2xl sm:text-3xl md:text-4xl lg:text-[36px]">
                            365 days remain until the subscription is finished
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
                    </header>
                </div>
            </div>

            {/* <section className="flex flex-col gap-6 min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] lg:min-h-[65dvh]">
                {loading ? (
                    <>
                        <Skeleton className="w-full h-32 sm:h-36 md:h-40 lg:h-[150px] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[22px]" />
                        <Skeleton className="w-full h-32 sm:h-36 md:h-40 lg:h-[150px] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[22px]" />
                    </>
                ) : data && data.length > 0 ? (
                    data?.map((card, key) => (
                        <AnimateWrapper key={key} delay={key * 0.2}>
                            <MyNpubsCard {...card} />
                        </AnimateWrapper>
                    ))
                ) : sampleData ? (
                    sampleData?.map((card, key) => (
                        <AnimateWrapper key={key} delay={key * 0.2}>
                            <MyNpubsCard {...card} />
                        </AnimateWrapper>
                    ))
                ) : (
                    "Not any username"
                )}
            </section> */}
        </main>
    );
};

export default Dashboard;
