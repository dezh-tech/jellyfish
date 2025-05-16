import { nip05Service } from "@/services/api/nip05.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";

type FormValues = {
    npub: string;
    lightning: string;
    relays: string[];
};

// Cast the schema type to make TypeScript happy
const schema = yup
    .object({
        npub: yup.string().required("NPUB is required"),
        lightning: yup.string(),
        relays: yup.array(),
    })
    .required() as yup.ObjectSchema<FormValues>;

const useEdit = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [relaysValue, setRelaysValue] = useState<string[]>([]);
    const { id } = useParams();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        watch,
        control,
    } = useForm<FormValues>({
        resolver: yupResolver(schema),
        defaultValues: {
            npub: "",
            lightning: "",
            relays: [],
        },
    });

    const onSubmit = async (data: FormValues) => {
        // Include the relays value from state
        const submitData = {
            ...data,
            relays: relaysValue,
        };

        try {
            setLoading(true);
            await nip05Service.updateRecordsForIdentifier(
                id as string,
                submitData,
            );
            navigate("/dashboard");
        } catch (error) {
            console.error("Error updating records:", error);
        } finally {
            setLoading(false);
        }
    };

    return {
        setValue,
        register,
        onSubmit,
        errors,
        handleSubmit: handleSubmit(onSubmit),
        loading,
        control,
        watch,
        relaysValue,
        setRelaysValue,
    };
};

export default useEdit;
