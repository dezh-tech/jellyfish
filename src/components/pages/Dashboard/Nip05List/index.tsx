import AnimateWrapper from "@/components/AnimateWrapper";
import { Skeleton } from "@/components/ui/skeleton";
import { Identifier, Record, nip05Service } from "@/services/api/nip05.service";
import { useEffect, useState } from "react";
import MyNpubsCard from "../MyNpubsCard";

type ProcessedData = {
    id: string;
    username: string;
    items: Record[];
};

const NipList = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<ProcessedData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                // Get identifiers
                const identifiers = await nip05Service.getMyIdentifiers();

                if (identifiers && identifiers.length > 0) {
                    // Fetch records for each identifier
                    const processedData = await Promise.all(
                        identifiers.map(async (identifier: Identifier) => {
                            const records =
                                await nip05Service.getRecordsForIdentifier(
                                    identifier.id,
                                );

                            return {
                                id: identifier.id,
                                username: identifier.fullIdentifier,
                                items: records,
                            };
                        }),
                    );

                    setData(processedData);
                } else {
                    console.log("No identifiers found");
                    setData([]);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setData([]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    console.log(data, "data");
    return (
        <section className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-[107px] pt-16 sm:pt-20 md:pt-24 lg:pt-24">
            <main className="flex flex-col gap-6 min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] lg:min-h-[65dvh]">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] gradient-text uppercase">
                    Nip05 List...
                </h2>
                {loading ? (
                    <>
                        <Skeleton className="w-full h-32 sm:h-36 md:h-40 lg:h-[150px] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[22px]" />
                        <Skeleton className="w-full h-32 sm:h-36 md:h-40 lg:h-[150px] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[22px]" />
                    </>
                ) : data.length === 0 ? (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-xl text-gray-400">
                            No identifiers found
                        </p>
                    </div>
                ) : (
                    data.map((card, key) => (
                        <AnimateWrapper key={card.id} delay={key * 0.2}>
                            <MyNpubsCard {...card} />
                        </AnimateWrapper>
                    ))
                )}
            </main>
        </section>
    );
};
export default NipList;
