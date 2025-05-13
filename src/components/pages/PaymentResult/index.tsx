import { buttonVariants } from "@/components/ui/Button/buttonVariants";
import Tag from "@/components/ui/Tag";
import { PaymentType } from "@/enums/pamentType";
import { PaymentStatus } from "@/enums/paymentStatus";
import { cn } from "@/lib/utils";
import { Link, useSearchParams } from "react-router-dom";

const PaymentResult = () => {
    const [searchParams] = useSearchParams();
    const paymentStatus = searchParams.get("status");
    const paymentType = searchParams.get("type");
    const isItPayed = Number(paymentStatus) === PaymentStatus.SUCCESSFUL;
    const isItRelay = Number(paymentType) === PaymentType.RELAY;
    const title =
        isItPayed && isItRelay
            ? "Welcome to Jellyfish club!"
            : isItPayed && !isItRelay
              ? "Payment was Successful"
              : !isItPayed && isItRelay
                ? "Oh no, Something went wrong!"
                : "Payment was Failed";
    const description =
        isItPayed && isItRelay
            ? "You can publish your notes to jellyfish relay now!"
            : isItPayed && !isItRelay
              ? "you can use your nip-05 address on your client right now and share it with everyone!"
              : !isItPayed && isItRelay
                ? "If the sats are gone from your wallet, try to contact us on nostr or using email for support."
                : "Nibh ante pellentesque eget. Nunc lectus amet sem purus accumsan. Amet sed pulvinar nibh et eget. Sed egestas ultrices et fringilla.";

    return (
        <main className="space-y-12 sm:space-y-14 md:space-y-16 lg:space-y-16 mx-auto pt-16 sm:pt-20 md:pt-24 lg:pt-[254px] min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] lg:min-h-[90dvh]">
            <div className="flex flex-col items-center gap-6 sm:gap-7 md:gap-8 lg:gap-7">
                <Tag
                    className={`${isItPayed ? "text-green-500" : "text-red-500"} animate-fade-down animate-delay-100`}
                >
                    {isItPayed ? "Success" : "Failed"}
                </Tag>
                <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-4">
                    <h2 className="gradient-text text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] uppercase animate-fade-up animate-delay-300">
                        {title}
                    </h2>
                    <p className="text-center text-sm sm:text-base md:text-lg lg:text-lg text-[#80899F] max-w-full sm:max-w-md md:max-w-lg lg:max-w-[729px] mx-auto font-roboto-mono animate-fade-up animate-delay-500">
                        {description}
                    </p>
                </div>
                <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-5 max-w-full sm:max-w-md md:max-w-lg lg:max-w-[729px] mx-auto animate-fade-up animate-delay-700">
                    {/* TODO: update links */}
                    <Link
                        className={cn(
                            buttonVariants({ variant: "secondary" }),
                            "flex-1",
                        )}
                        to={isItPayed ? "/" : "mailto:hi@dezh.tech"}
                    >
                        {isItPayed ? "Back to home" : "Contact support"}
                    </Link>
                    {!isItPayed && isItRelay ? (
                        <Link
                            className={cn(buttonVariants(), "flex-1")}
                            to="/relay"
                        >
                            Try again
                        </Link>
                    ) : !isItPayed && !isItRelay ? (
                        <Link
                            className={cn(buttonVariants(), "flex-1")}
                            to="/nip05"
                        >
                            Try again
                        </Link>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </main>
    );
};

export default PaymentResult;
