import { IconProps } from "@/@types/iconProps";

export const LockIcon = ({ ...props }: IconProps) => {
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
                d="M12 1.5C9.10051 1.5 6.75 3.85051 6.75 6.75V9.75C5.09315 9.75 3.75 11.0931 3.75 12.75V19.5C3.75 21.1569 5.09315 22.5 6.75 22.5H17.25C18.9069 22.5 20.25 21.1569 20.25 19.5V12.75C20.25 11.0931 18.9069 9.75 17.25 9.75V6.75C17.25 3.85051 14.8995 1.5 12 1.5ZM15.75 9.75V6.75C15.75 4.67893 14.0711 3 12 3C9.92893 3 8.25 4.67893 8.25 6.75V9.75H15.75Z"
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
