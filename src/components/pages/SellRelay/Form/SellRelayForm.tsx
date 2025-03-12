import { Button } from "@/components/ui/Button";
import useCheckAvailability from "./useCheckAvailability";
import { Textfield } from "@/components/ui/Textfield";

import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { arrayRange, secondsToMonths } from "@/utils/functions";
import { LightingIcon } from "@/assets/icons/nav/LightingIcon";
import { Skeleton } from "@/components/ui/skeleton";

type TSubscriptionsGetOutput = {
    fees: { subscription: TSubscriptions[] };
};

type TSubscriptions = {
    amount: number;
    period: number;
    unit: "sats";
};

const SellRelayForm = () => {
    const { handleSubmit, register, setValue, getValues, errors } =
        useCheckAvailability();

    const [selectedMonth, setSelectedMonth] = useState<number>(-1);

    const query = useQuery<TSubscriptionsGetOutput>({
        queryKey: ["subscriptions"],
        queryFn: () => {
            return fetch("https://api-manager.jellyfish.land/", {
                headers: {
                    Accept: "application/nostr+json",
                },
            }).then(res => res.json());
        },
    });

    const handleCheckboxChange = (value: number) => {
        const currentValue = getValues("month");
        if (currentValue === value) {
            // If the same checkbox is clicked, unselect it.
            setSelectedMonth(-1);
            setValue("month", -1);
        } else {
            setSelectedMonth(value);
            setValue("month", value);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-6"
        >
            <div className="space-y-2">
                <div className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-4 animate-fade-up animate-delay-300">
                    <Textfield
                        className="flex-1 w-full"
                        {...register("npub")}
                        type="text"
                        placeholder="Input your inpub1..."
                    />
                </div>

                {errors.npub && (
                    <p className="text-xs sm:text-sm md:text-base lg:text-sm text-[#F6543E] font-roboto-mono animate-fade-right">
                        {errors.npub.message}
                    </p>
                )}
            </div>

            {/* -- Months -- */}
            <div className="space-y-2">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 animate-fade-up animate-delay-400">
                    {query?.isLoading || query?.isFetching
                        ? arrayRange(1, 5)?.map(item => (
                              <Skeleton
                                  key={item}
                                  className="h-[42px] w-full"
                              />
                          ))
                        : query?.data?.fees?.subscription?.map(item => (
                              <label
                                  key={`month-${item}`}
                                  className="flex items-center gap-2 px-4 py-3 border border-solid rounded-[14px] cursor-pointer border-stone-600"
                                  htmlFor={`month-${item}`}
                              >
                                  <Checkbox
                                      id={`month-${item}`}
                                      value={item.period}
                                      checked={selectedMonth === item.period}
                                      onClick={() =>
                                          handleCheckboxChange(item.period)
                                      }
                                  />
                                  <div className="gap-1.5 leading-none select-none flex items-center">
                                      <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                          {`${secondsToMonths(item.period)} Month`}
                                      </p>
                                      |
                                      <div className="flex items-center flex-shrink-0 gap-1">
                                          <LightingIcon
                                              width={16}
                                              height={16}
                                          />
                                          {item.amount / 1000}K
                                      </div>
                                  </div>
                              </label>
                          ))}
                </div>
            </div>

            <Button
                className="w-full h-12 font-medium sm:h-14 md:h-16 lg:h-14 font-roboto-mono animate-fade-up animate-delay-500"
                disabled={
                    !!(query?.error || query?.isLoading || query?.isFetching)
                }
                type="submit"
            >
                Submit
            </Button>
        </form>
    );
};

export default SellRelayForm;
