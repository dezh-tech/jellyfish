import { Button } from "@/components/ui/Button";
import TagsInput from "@/components/ui/TagsInput";
import { Textfield } from "@/components/ui/Textfield";
import { nip05Service } from "@/services/api/nip05.service";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const NpubEditForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [identifier, setIdentifier] = useState<any>(null);
    const [formValues, setFormValues] = useState({
        npub: "",
        lightning: "",
        relays: [] as string[],
    });

    // Function to handle Textfield changes
    const handleTextChange = (type: string, value: string) => {
        setFormValues(prev => ({
            ...prev,
            [type.toLowerCase()]: value,
        }));
    };

    // Function to handle TagsInput changes
    const handleRelaysChange = (value: string[]) => {
        setFormValues(prev => ({
            ...prev,
            relays: value,
        }));
    };

    // Fetch the records for the identifier
    useEffect(() => {
        const fetchData = async () => {
            if (!id) return;

            try {
                setLoading(true);
                // Get the identifier details first
                const identifiers = await nip05Service.getMyIdentifiers();
                const currentIdentifier = identifiers.find(
                    item => item.id === id,
                );
                setIdentifier(currentIdentifier);

                // Then get all records for this identifier
                const recordsData =
                    await nip05Service.getRecordsForIdentifier(id);

                // Initialize form values from records
                const initialValues = {
                    npub: "",
                    lightning: "",
                    relays: [] as string[],
                };

                recordsData.forEach(record => {
                    if (record.type === "NAMES" || record.type === "NPUB") {
                        initialValues.npub = record.value as string;
                    } else if (record.type === "LIGHTNING") {
                        initialValues.lightning = record.value as string;
                    } else if (record.type === "RELAYS") {
                        initialValues.relays = Array.isArray(record.value)
                            ? (record.value as string[])
                            : [];
                    }
                });

                setFormValues(initialValues);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!id) return;

        try {
            setLoading(true);
            await nip05Service.updateRecordsForIdentifier(id, formValues);
            navigate("/dashboard/nip05");
            // window.location.href = "/dashboard"; // Navigate to dashboard after success
        } catch (error) {
            console.error("Error updating records:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="pt-16 text-center">Loading...</div>;
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="pt-16 sm:pt-20 md:pt-24 lg:pt-24 space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-20 min-h-[60vh] sm:min-h-[70vh] md:min-h-[75vh] lg:min-h-[80dvh]"
        >
            <header className="flex flex-col items-center sm:flex-row">
                <div className="flex-1 space-y-1">
                    <p className="font-roboto-mono text-sm sm:text-base md:text-lg lg:text-base text-[#80899F]">
                        Edit your Nip-05 records
                    </p>
                    <h3 className="gradient-text text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold">
                        {identifier?.fullIdentifier}
                    </h3>
                </div>
                <Button
                    variant="secondary"
                    className="min-w-[112px] sm:min-w-[130px] md:min-w-[145px] lg:min-w-[153px]"
                    type="submit"
                    disabled={loading}
                >
                    Save Changes
                </Button>
            </header>

            <main className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-12">
                {/* NPUB Field */}
                <div className="space-y-1 sm:space-y-2">
                    <Textfield
                        label="NPUB:"
                        value={formValues.npub}
                        onChange={e => handleTextChange("npub", e.target.value)}
                    />
                </div>

                {/* Lightning Field */}
                <div className="space-y-1 sm:space-y-2">
                    <Textfield
                        label="LIGHTNING:"
                        value={formValues.lightning}
                        onChange={e =>
                            handleTextChange("lightning", e.target.value)
                        }
                    />
                </div>

                {/* Relays Field - using TagsInput */}
                <div className="space-y-1 sm:space-y-2">
                    <TagsInput
                        className="h-14"
                        label="RELAYS:"
                        value={formValues.relays}
                        onValueChange={handleRelaysChange}
                        placeholder="Add relay URL and press Enter"
                    />
                </div>
            </main>
        </form>
    );
};

export default NpubEditForm;
