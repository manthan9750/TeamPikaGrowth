// src/utils/timeSlots.js

/**
 * Generates fixed 30-min slots between start and end time
 * This makes system scalable later (calendar / backend upgrade ready)
 */

export const generateTimeSlots = () => {
  const slots = [];

  const startHour = 15; // 3 PM
  const endHour = 18;   // 6 PM

  for (let hour = startHour; hour < endHour; hour++) {
    slots.push(`${format(hour)}:00 - ${format(hour)}:30`);
    slots.push(`${format(hour)}:30 - ${format(hour + 1)}:00`);
  }

  return slots;
};

/**
 * Format hour into 12-hour display (optional improvement layer)
 */
const format = (hour) => {
  const h = hour % 12 === 0 ? 12 : hour % 12;
  return h < 10 ? `0${h}` : `${h}`;
};

/**
 * Simulated booked slots (replace later with backend/DB)
 */
export const getBookedSlots = () => {
  return [
    "15:30 - 16:00",
    "17:00 - 17:30",
  ];
};