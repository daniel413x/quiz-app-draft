import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const formatTime = (time: number) => {
  const milliseconds = time % 100;
  const totalSeconds = Math.floor(time / 100);
  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60);

  const pad = (num: number, size: number) => num.toString().padStart(size, '0');

  return `${pad(minutes, 2)}:${pad(seconds, 2)}:${pad(milliseconds, 2)}`;
};
