export const DELAY: number = 300;

export const dateWithoutTimeToMilliseconds = (time: string | Date): number => Date.parse(new Date(time).toDateString());

export const pattern = '[A-Za-z]*';
