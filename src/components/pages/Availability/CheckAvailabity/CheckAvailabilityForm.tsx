import { Button } from "@/components/ui/Button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
} from "@/components/ui/Select";
import { Textfield } from "@/components/ui/Textfield";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Controller } from "react-hook-form";
import useCheckAvailability from "./useCheckAvailability";

type Domain = {
    id: string;
    domain: string;
    basePrice: number;
    defaultTTL: number;
    status: string;
    createdAt: string;
    updatedAt: string;
};

const CheckAvailabilityForm = () => {
    const [,setDomainId] = useState("");
    const { handleSubmit, register, errors, control } = useCheckAvailability();

    const { data } = useQuery<Domain[]>({
        queryKey: ["domainlist"],
        queryFn: () => {
            return fetch(`https://nostr.eco/seasnail/domains/list`, {
                headers: {
                    Accept: "application/nostr+json",
                },
            }).then(res => res.json());
        },
    });

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-6"
        >
            <div className="space-y-2">
                <div className="flex w-full items-center gap-2 sm:gap-4 md:gap-6 lg:gap-4 animate-fade-up animate-delay-300">
                    <Textfield
                        className=" flex-1"
                        {...register("username")}
                        type="text"
                        placeholder="username"
                    />
                    @
                    <Controller
                        name="domainId"
                        control={control}
                        render={({ field }) => (
                            <Select
                                value={field.value}
                                onValueChange={value => {
                                    field.onChange(value);
                                    setDomainId(value);
                                }}
                            >
                                <SelectTrigger className="rounded-[14px] w-[30%] mt-1"></SelectTrigger>
                                <SelectContent>
                                    {data?.map(item =>
                                        item.status === "ACTIVE" ? (
                                            <SelectItem
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {item.domain}
                                            </SelectItem>
                                        ) : null,
                                    )}
                                </SelectContent>
                            </Select>
                        )}
                    />
                </div>

                {errors.username && (
                    <p className="text-xs sm:text-sm md:text-base lg:text-sm text-[#F6543E] font-roboto-mono animate-fade-right">
                        {errors.username.message}
                    </p>
                )}
                {errors.domainId && (
                    <p className="text-xs sm:text-sm md:text-base lg:text-sm text-[#F6543E] font-roboto-mono animate-fade-right">
                        {errors.domainId.message}
                    </p>
                )}
            </div>
            <div>
                By clicking submit, you agree to our{" "}
                <a
                    target="_blank"
                    referrerPolicy="no-referrer"
                    href="https://jellyfish.land/tos.txt"
                    className="underline"
                >
                    ToS
                </a>
                .
            </div>
            <Button
                className="w-full h-12 font-medium sm:h-14 md:h-16 lg:h-14 font-roboto-mono animate-fade-up animate-delay-500 rounded-full"
                type="submit"
                variant="outline"
            >
                Check availability
            </Button>
        </form>
    );
};

export default CheckAvailabilityForm;
