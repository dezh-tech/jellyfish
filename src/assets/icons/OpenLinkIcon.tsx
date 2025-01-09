import { IconProps } from "@/@types/iconProps";

export const OpenLinkIcon = ({ ...props }: IconProps) => {
    return (
        <svg
            {...props}
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7 7.08154H17V17.0815"
                stroke="url(#paint0_linear_2_400)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M7 17.0815L17 7.08154"
                stroke="url(#paint1_linear_2_400)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_2_400"
                    x1="12.0068"
                    y1="9.78568"
                    x2="10.2217"
                    y2="12.979"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#ACCDF2" />
                    <stop offset="1" stop-color="#D4E9F7" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_2_400"
                    x1="12.0068"
                    y1="9.78568"
                    x2="10.2217"
                    y2="12.979"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#ACCDF2" />
                    <stop offset="1" stop-color="#D4E9F7" />
                </linearGradient>
            </defs>
        </svg>
    );
};
