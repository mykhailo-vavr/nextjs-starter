import { format } from 'date-fns';

export const dateFormats = {
  hoursMinutes: 'hh:mm aaa',
  yearMonthDay: 'yyyy-MM-dd',
} as const;

export const formatDate = (date: string | number | Date, dateFormat: keyof typeof dateFormats) =>
  format(new Date(date), dateFormats[dateFormat]);
