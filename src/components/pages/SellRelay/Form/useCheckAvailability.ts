import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom";

const schema = yup
    .object({
        npub: yup.string().required().required("Npub"),
        month: yup.number().required().label("Plan"),
    })
    .required();

const useCheckAvailability = () => {
    // const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        control,
        watch,
        formState: { errors, isLoading, isSubmitting },
    } = useForm({
        resolver: yupResolver(schema),
    });

    // Mutations
    const mutation = useMutation({
        mutationFn: (inputData: { subscriber: string; planId: string }) => {
            return fetch(
                "https://api-manager.jellyfish.land/subscriptions/checkout-session",
                {
                    method: "POST",
                    headers: {
                        accept: "*/*",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(inputData),
                },
            ).then(res => res.text());
        },
        onSuccess: (res: string) => {
            console.log({ res, con: res && res?.startsWith("https://") });
            if (res && res.startsWith("https://")) {
                window.location.href = res;
            }
        },
        onError: err => {
            console.error("Error", err);
        },
    });

    const onSubmit = async (data: { npub: string; month: number }) => {
        mutation.mutate({
            subscriber: data.npub,
            planId: data.month.toString(),
        });
    };

    return {
        register,
        onSubmit,
        errors,
        getValues,
        setValue,
        control,
        watch,
        handleSubmit: handleSubmit(onSubmit),
        loading: isLoading || isSubmitting || mutation.isLoading,
    };
};

export default useCheckAvailability;
