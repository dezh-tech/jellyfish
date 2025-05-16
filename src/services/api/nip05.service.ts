import { mainApi } from "@/config/axios.config";

export type Identifier = {
    id: string;
    name: string;
    domainId: string;
    fullIdentifier: string;
    userId: string;
    status: string;
    expireAt: string;
};

export type Record = {
    id: string;
    createdAt: string;
    updatedAt: string;
    identifierId: string;
    type: string;
    key: string;
    value: string | [];
    priority: number;
    ttl: number;
};

export interface UpdateRecordsDto {
    npub: string;
    lightning?: string;
    relays?: string[];
}

// The responseInterceptor in axios.config.ts returns response.data directly
export const nip05Service = {
    getMyIdentifiers: async (): Promise<Identifier[]> => {
        const response = await mainApi.get<Identifier[]>("identifiers/my");
        return response as unknown as Identifier[];
    },

    getRecordsForIdentifier: async (
        identifierId: string,
    ): Promise<Record[]> => {
        const response = await mainApi.get<Record[]>(`records/${identifierId}`);
        return response as unknown as Record[];
    },

    updateRecordsForIdentifier: async (
        identifierId: string,
        data: UpdateRecordsDto,
    ): Promise<any> => {
        const response = await mainApi.patch(`records/${identifierId}`, data);
        return response;
    },
};
