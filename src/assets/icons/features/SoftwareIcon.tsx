import { IconProps } from "@/@types/iconProps";

export const SoftwareIcon = ({ ...props }: IconProps) => {
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.25 3C0.25 1.34315 1.59315 0 3.25 0H16.75C18.4069 0 19.75 1.34315 19.75 3V15C19.75 16.6569 18.4069 18 16.75 18H3.25C1.59315 18 0.25 16.6569 0.25 15V3ZM4.21967 3.96967C4.51256 3.67678 4.98744 3.67678 5.28033 3.96967L7.53033 6.21967C7.82322 6.51256 7.82322 6.98744 7.53033 7.28033L5.28033 9.53033C4.98744 9.82322 4.51256 9.82322 4.21967 9.53033C3.92678 9.23744 3.92678 8.76256 4.21967 8.46967L5.93934 6.75L4.21967 5.03033C3.92678 4.73744 3.92678 4.26256 4.21967 3.96967ZM8.5 8.25C8.08579 8.25 7.75 8.58579 7.75 9C7.75 9.41421 8.08579 9.75 8.5 9.75H11.5C11.9142 9.75 12.25 9.41421 12.25 9C12.25 8.58579 11.9142 8.25 11.5 8.25H8.5Z"
                fill="url(#paint0_linear_222_1816)"
            />

            <defs>
                <linearGradient
                    id="paint0_linear_222_1816"
                    x1="11.006"
                    y1="16.8505"
                    x2="11.006"
                    y2="5.15186"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#D8ECF8" />
                    <stop offset="1" stopColor="#98C0EF" />
                </linearGradient>
            </defs>
        </svg>
    );
};
