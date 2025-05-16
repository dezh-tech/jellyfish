import { Button } from "@/components/ui/Button";
import { Textfield } from "@/components/ui/Textfield";
import useProfileStore from "@/stores/profile-store";
import { nip19 } from "nostr-tools";
import useCheckOut from "./useSetUserNameForm";

const SetUserNameForm = ({
    username,
    domainId,
}: {
    username: string | null;
    domainId: string | null;
}) => {
    const { handleSubmit, register, errors } = useCheckOut({
        username,
        domainId,
    });
    const { pubKey } = useProfileStore(state => state);
    return (
        <form onSubmit={handleSubmit} className=" space-y-6    ">
            <div className="space-y-2">
                <Textfield
                    defaultValue={pubKey ? nip19.npubEncode(pubKey) : ""}
                    labelClasses="uppercase"
                    label="your npub:"
                    className="flex-1"
                    {...register("npub")}
                    type="text"
                    placeholder="npub..."
                />

                {errors.npub && (
                    <p className="text-[#F6543E] text-sm font-roboto-mono animate-fade-right">
                        {errors.npub.message}
                    </p>
                )}
            </div>
            {/* <div>
                By clicking on submit you are agree with our{" "}
                <a href="https://jellyfish.land/tos.txt" className="underline">
                    ToS
                </a>
                .
            </div> */}
            <Button
                className="w-full h-12 font-medium sm:h-14 md:h-16 lg:h-14 font-roboto-mono animate-fade-up animate-delay-500 rounded-full"
                type="submit"
                variant="outline"
            >
                Pay
            </Button>
        </form>
    );
};

export default SetUserNameForm;
