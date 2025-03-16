import SellRelayForm from "./SellRelayForm";

const CheckAvailability = () => {
    return (
        <section className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-[50px] lg:px-0">
            <h1 className="gradient-text text text-center font-bold sm:text-4xl md:text-2xl lg:text-[60px] uppercase max-w-full sm:max-w-lg md:max-w-xl lg:max-w-[873px] mx-auto leading-8 sm:leading-10 md:leading-12 lg:leading-[56px] animate-fade-up">
                Join a modern, spam-free, well-moderated, relay!
            </h1>
            <div className="max-w-full sm:max-w-md md:max-w-lg lg:max-w-[575px] mx-auto">
                <SellRelayForm />
            </div>
        </section>
    );
};

export default CheckAvailability;
