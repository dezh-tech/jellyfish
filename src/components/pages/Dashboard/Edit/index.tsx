import { Button } from "@/components/ui/Button";
import TagsInput from "@/components/ui/TagsInput";
import { Textfield } from "@/components/ui/Textfield";
import { nip05Service } from "@/services/api/nip05.service";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { nip19 } from "nostr-tools";

const NpubEditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [identifier, setIdentifier] = useState<any>(null);
  const [formValues, setFormValues] = useState({
    npub: "",       // will show npub encoded string
    lightning: "",
    relays: [] as string[],
  });

  const [errors, setErrors] = useState({
    npub: "",
    lightning: "",
    relays: "",
  });

  // Convert raw hex pubkey to npub string for display
  const pubkeyHexToNpub = (pubkeyHex: string): string => {
    try {
      return nip19.npubEncode(pubkeyHex);
    } catch {
      return pubkeyHex; // fallback, just return raw if error
    }
  };

  // Convert npub string to raw hex pubkey for sending
  const npubToPubkeyHex = (npub: string): string | null => {
    try {
      const decoded = nip19.decode(npub);
      if (decoded.type === "npub" && typeof decoded.data === "string") {
        return decoded.data;
      }
      return null;
    } catch {
      return null;
    }
  };

  const handleTextChange = (type: string, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      [type.toLowerCase()]: value,
    }));
  };

  const handleRelaysChange = (value: string[]) => {
    setFormValues((prev) => ({
      ...prev,
      relays: value,
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { npub: "", lightning: "", relays: "" };

    // Validate npub format by decoding
    if (!npubToPubkeyHex(formValues.npub)) {
      newErrors.npub = "Invalid Nostr public key (npub).";
      valid = false;
    }

    if (
      formValues.lightning &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.lightning)
    ) {
      newErrors.lightning =
        "Lightning address must be in the format user@domain.tld";
      valid = false;
    }

    if (
      formValues.relays.some(
        (url) => !/^wss?:\/\/[^\s/$.?#].[^\s]*$/.test(url)
      )
    ) {
      newErrors.relays = "One or more relay URLs are invalid.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;

      try {
        setLoading(true);
        const identifiers = await nip05Service.getMyIdentifiers();
        const currentIdentifier = identifiers.find((item) => item.id === id);
        setIdentifier(currentIdentifier);

        const recordsData = await nip05Service.getRecordsForIdentifier(id);

        const initialValues = {
          npub: "",
          lightning: "",
          relays: [] as string[],
        };

        recordsData.forEach((record) => {
          if (record.type === "NAMES" || record.type === "NPUB") {
            // convert raw hex to npub for display
            initialValues.npub = pubkeyHexToNpub(record.value as string);
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

    if (!validateForm()) return;

    // Convert npub back to raw hex before sending
    const hexPubkey = npubToPubkeyHex(formValues.npub);
    if (!hexPubkey) {
      setErrors((prev) => ({ ...prev, npub: "Invalid npub format" }));
      return;
    }

    const payload = {
      ...formValues,
      npub: hexPubkey,
    };

    try {
      setLoading(true);
      await nip05Service.updateRecordsForIdentifier(id, payload);
      navigate("/dashboard/nip05");
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
        <div className="space-y-1 sm:space-y-2">
          <Textfield
            label="NPUB:"
            value={formValues.npub}
            onChange={(e) => handleTextChange("npub", e.target.value)}
          />
          {errors.npub && (
            <p className="text-sm text-red-500 mt-1">{errors.npub}</p>
          )}
        </div>

        <div className="space-y-1 sm:space-y-2">
          <Textfield
            label="LIGHTNING:"
            value={formValues.lightning}
            onChange={(e) => handleTextChange("lightning", e.target.value)}
          />
          {errors.lightning && (
            <p className="text-sm text-red-500 mt-1">{errors.lightning}</p>
          )}
        </div>

        <div className="space-y-1 sm:space-y-2">
          <TagsInput
            className="h-14"
            label="RELAYS:"
            value={formValues.relays}
            onValueChange={handleRelaysChange}
            placeholder="Add relay URL and press Enter"
          />
          {errors.relays && (
            <p className="text-sm text-red-500 mt-1">{errors.relays}</p>
          )}
        </div>
      </main>
    </form>
  );
};

export default NpubEditForm;
