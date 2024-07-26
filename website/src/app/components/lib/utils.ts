import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDateRange = (startDate: string, endDate: string): string => {
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const formatSingleDate = (date: Date): string => {
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    return `${month} ${day < 10 ? "0" + day : day}`;
  };

  const start = new Date(startDate);
  const end = new Date(endDate);
  const formattedStart = formatSingleDate(start);
  const formattedEnd = formatSingleDate(end);

  return `${formattedStart}  —  ${formattedEnd}`;
};
