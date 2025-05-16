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
            .min(1, "Username must be at least 1 character")
            .matches(
                /^[a-zA-Z0-9_-]+$/,
                "Username can only contain letters, numbers, underscores, and hyphens",
            ),
        domainId: yup.string().required("Domain is required"),
    })
    .required();

    // services/api/domain.service.ts
export const domainService = {
    async getDomainById(id: string): Promise<{ id: string; value: string }> {
        const res = await fetch(`/api/domains/${id}`);
        return await res.json();
    },
};

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

            const fullIdentifier = res?.fullIdentifier;
            const price = res?.price || 0;

            navigate(
                `/set-username?username=${fullIdentifier}&domainId=${data.domainId}&price=${price}&status=0`,
            );
        } catch (error: any) {
            if (error.response?.data?.error === "Conflict") {
                try {
                    // Get domain name from domain ID
                    const domain = await domainService.getDomainById(data.domainId); // Should return { id, value }
                    const domainName = domain?.value || data.domainId;

                    const takenIdentifier = `${data.username}@${domainName}`;
                    navigate(`/set-username?username=${takenIdentifier}&status=1`);
                } catch (domainErr) {
                    console.error("Failed to resolve domain name:", domainErr);
                }
            } else {
                console.error("Unexpected error:", error);
            }
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
