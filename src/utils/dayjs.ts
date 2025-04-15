import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

const getRemaningFormattedTime = (timestamp: number) => {
    if (timestamp <= 0) return "The subscription has ended.";

    const now = dayjs();
    const targetDate = dayjs(timestamp);

    if (targetDate.isBefore(now) || targetDate.isSame(now))
        return "The subscription has ended.";

    const diff = dayjs.duration(targetDate.diff(now));

    const years = diff.years();
    const months = diff.months();
    const days = diff.days();
    const hours = diff.hours();
    const minutes = diff.minutes();

    const remaningTime = `${years} year${years > 1 ? "s" : ""} ${months} month${months > 1 ? "s" : ""} ${days} day${days > 1 ? "s" : ""} ${hours} hour${hours > 1 ? "s" : ""} ${minutes} min${minutes > 1 ? "s" : ""}`;

    return `${remaningTime} remain until the subscription is finished`;
};

export { getRemaningFormattedTime };
