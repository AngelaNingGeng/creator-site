import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatNumber(n: number): string {
  if (n >= 10000) {
    return (n / 10000).toFixed(1) + '万';
  }
  if (n >= 1000) {
    return (n / 1000).toFixed(1) + 'k';
  }
  return n.toString();
}
