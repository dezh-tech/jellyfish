export const secondsToMonths = (seconds: number) => {
    if (!seconds) return 0;

    // There are approximately 2,629,744 seconds in a month
    const SECONDS_PER_MONTH = 2629744;
    const month = seconds / SECONDS_PER_MONTH;
    return Math.ceil(month);
};

export const arrayRange = (start: number, end: number) => {
    if (end <= 0 || !start || !end) return [];

    const arr = [];

    for (let i = start; i < end; i++) {
        arr.push(i);
    }

    return arr;
};
