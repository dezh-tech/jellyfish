import { IconProps } from "@/@types/iconProps";

export const LightingIcon = ({ ...props }: IconProps) => {
    return (
        <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M11.5 1.5L2.5 12.3H10.6L9.7 19.5L18.7 8.7H10.6L11.5 1.5Z"
                stroke="#EAB308"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
