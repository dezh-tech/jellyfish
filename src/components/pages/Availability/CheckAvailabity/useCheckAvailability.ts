import {
    UsernameCheckResponse,
    usernameService,
} from "@/services/api/username.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const schema = yup
    .object({
        username: yup
            .string()
            .required("Username is required")
            .min(3, "Username must be at least 3 characters")
            .matches(
                /^[a-zA-Z0-9_-]+$/,
                "Username can only contain letters, numbers, underscores, and hyphens",
            ),
        domainId: yup.string().required("domain is required"),
    })
    .required();

const useCheckAvailability = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: { username: string; domainId: string }) => {
        try {
            setLoading(true);
            const res = (await usernameService.checkAvailability(
                data.username,
                data.domainId,
            )) as unknown as UsernameCheckResponse;
            console.log(res, "res");

            // Access the data directly as it's already the right type
            const fullIdentifier = res?.fullIdentifier;
            const price = res?.price || 0;

            navigate(
                `/set-username?username=${fullIdentifier}&domainId=${data.domainId}&price=${price}&status=${0}`,
            );
        } catch (error: any) {
            if (error.response?.data?.error === "Conflict") {
                navigate(`/set-username?username=${data.username}&status=${1}`);
            } else {
                console.log(error, "sdasdasdasda");
            }

            //  TODO : add toast
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
        control,
    };
};

export default useCheckAvailability;
