import CheckAvailabilityForm from "./CheckAvailabilityForm";

const CheckAvailability = () => {
    return (
        <section className="space-y-[50px]">
            <h1 className="gradient-text text text-center font-bold   text-[80px] uppercase max-w-[873px] mx-auto leading-[56px]  animate-fade-up ">
                Get a better nostr id for yourself
            </h1>
            <div className="max-w-[575px] mx-auto ">
                <CheckAvailabilityForm />
            </div>
        </section>
    );
};

export default CheckAvailability;
