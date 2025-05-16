import { usernameService } from "@/services/api/username.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
const schema = yup
    .object({
        // username: yup
        //     .string()
        //     .required("Username is required")
        //     .min(3, "Username must be at least 3 characters")
        //     .matches(
        //         /^[a-zA-Z0-9_-]+$/,
        //         "Username can only contain letters, numbers, underscores, and hyphens",
        //     ),
        // domainId: yup.string().required("domain is required"),
        npub: yup.string().required("npub is required"),
    })
    .required();

const useCheckOut = ({
    username,
    domainId,
}: {
    username: string | null;
    domainId: string | null;
}) => {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: { npub: string }) => {
        try {
            setLoading(true);
            const result = await usernameService.checkout(
                username?.split("@")[0] as string,
                domainId,
                data.npub,
            );
            window.location.replace(result as unknown as string);
        } catch (error: any) {
            if (error) {
                setError("npub", {
                    type: "manual",
                    message: error.response?.data?.message,
                });
            } else {
                console.log(error, "");
            }

            console.log(error);
            // navigate("");
        } finally {
            setLoading(false);
        }
    };

    return {
        register,
        onSubmit,
        errors,
        handleSubmit: handleSubmit(onSubmit),
        loading,
    };
};

export default useCheckOut;
