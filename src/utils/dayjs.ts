import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

const getRemaningFormattedTime = (seconds: number) => {
    if (seconds <= 0) return "The subscription has ended.";

    let time = dayjs.duration(seconds, "seconds");

    let years = Math.floor(time.asYears());
    let months = Math.floor(time.asMonths()) % 12; // Approximate months
    let days = Math.floor(time.asDays()) % 30;
    let hours = Math.floor(time.asHours()) % 24;
    let minutes = Math.floor(time.asMinutes()) % 60;

    const remaningTime = `${years} year${years > 1 ? "s" : ""} ${months} month${months > 1 ? "s" : ""} ${days} day${days > 1 ? "s" : ""} ${hours} hour${hours > 1 ? "s" : ""} ${minutes} min${minutes > 1 ? "s" : ""}`;

    return `${remaningTime} remain until the subscription is finished`;
};

export { getRemaningFormattedTime };
