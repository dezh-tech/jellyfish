import AnimateWrapper from "@/components/AnimateWrapper";
import { Skeleton } from "@/components/ui/skeleton";
import { Identifier, Record, nip05Service } from "@/services/api/nip05.service";
import { useEffect, useState } from "react";
import MyNpubsCard from "../MyNpubsCard";
import { nip19 } from "nostr-tools";

type ProcessedData = {
  id: string;
  username: string;  // will store npub format
  items: Record[];
};

const isHex = (str: string) => /^[0-9a-fA-F]{64}$/.test(str);

const pubkeyHexToNpub = (pubkeyHex: string): string => {
  try {
    return nip19.npubEncode(pubkeyHex);
  } catch {
    return pubkeyHex;
  }
};

const NipList = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ProcessedData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const identifiers = await nip05Service.getMyIdentifiers();

        if (identifiers && identifiers.length > 0) {
          const processedData = await Promise.all(
            identifiers.map(async (identifier: Identifier) => {
              const records = await nip05Service.getRecordsForIdentifier(identifier.id);

              // Convert username if it's a hex pubkey to npub
              let username = identifier.fullIdentifier;
              if (isHex(username)) {
                username = pubkeyHexToNpub(username);
              }

              // Convert any record values of type NAMES or NPUB from hex to npub for display
              const convertedRecords = records.map((record) => {
                if ((record.type === "NAMES" || record.type === "NPUB") && typeof record.value === "string" && isHex(record.value)) {
                  return {
                    ...record,
                    value: pubkeyHexToNpub(record.value),
                  };
                }
                return record;
              });

              return {
                id: identifier.id,
                username,
                items: convertedRecords,
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
            <p className="text-xl text-gray-400">No identifiers found</p>
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
