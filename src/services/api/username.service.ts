import { mainApi } from "../../config/axios.config";

export interface UsernameCheckResponse {
    fullIdentifier: string;
    price: number;
    // status: number | string;
}
// export interface CheckOutResponse {
//     fullIdentifier: string;
//     price: number;
//     // status: number | string;
// }

export const usernameService = {
    checkAvailability: (username: string, domainId: string) =>
        mainApi.get<UsernameCheckResponse>(
            `identifiers?name=${username}&domainId=${domainId}`,
        ),
    checkout: (
        username: string | null,
        domainId: string | null,
        npub: string,
    ) =>
        mainApi.get<any>(
            `identifiers/checkout-session?name=${username}&domainId=${domainId}&npub=${npub}`,
        ),

    // getSuggestions: () =>
    //     mainApi.get<ApiResponse<string[]>>("/username/suggestions"),
};
