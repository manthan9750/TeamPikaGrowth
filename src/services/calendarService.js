/**
 * Google Calendar Integration Service
 * Prepares and sends booking data to the backend calendar API.
 */

const GOOGLE_API_BASE = "https://www.googleapis.com/calendar/v3";

/**
 * Sends a request to the backend to create a new calendar event.
 * * @param {Object} bookingData - The formatted booking details.
 * @returns {Promise<Object>} - The API response or a fallback success object.
 */
export const createCalendarEvent = async (bookingData) => {
  try {
    const response = await fetch("/api/create-calendar-event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    if (!response.ok) {
      throw new Error("Calendar event creation failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Calendar Error:", error);

    // Fallback so the user's booking process isn't interrupted
    return {
      success: false,
      message: "Calendar sync failed but booking was saved",
    };
  }
};

/**
 * Formats raw booking data into the structure required by the Google Calendar API.
 * * @param {Object} booking - The raw booking form data.
 * @returns {Object} - Formatted Google Calendar event object.
 */
export const formatCalendarEvent = (booking) => {
  const { name, brand, phone, slot, day } = booking;

  return {
    summary: `Consultation - ${brand}`,
    description: `
New booking from Team Pika Growth website

Name: ${name}
Brand: ${brand}
Phone: ${phone}
Slot: ${slot}
Day: ${day}
    `,
    start: {
      dateTime: convertToISODate(day, slot, "start"),
      timeZone: "Asia/Kolkata",
    },
    end: {
      dateTime: convertToISODate(day, slot, "end"),
      timeZone: "Asia/Kolkata",
    },
  };
};

/**
 * Helper function to convert a time slot into an ISO date string.
 * Currently uses a mock base date mapping.
 * * @param {string} day - The requested day.
 * @param {string} slot - The requested time slot.
 * @param {string} type - "start" or "end".
 * @returns {string} - ISO 8601 formatted date string.
 */
const convertToISODate = (day, slot, type) => {
  const baseDate = new Date();

  // Basic mapping logic to be expanded when integrating full dynamic dates
  const startHour = parseInt(slot.split(":")[0]);

  const date = new Date(baseDate);
  date.setHours(type === "start" ? startHour : startHour + 0.5);

  return date.toISOString();
};