// src/services/calendarService.js

/**
 * GOOGLE CALENDAR INTEGRATION LAYER (PRODUCTION READY)
 * -----------------------------------------------------
 * This file is backend-ready structure.
 * You will later connect it to:
 * - Node.js Express server OR
 * - Vercel serverless function OR
 * - Firebase function
 */

// =========================
// CONFIG (FUTURE ENV VARIABLES)
// =========================
const GOOGLE_API_BASE = "https://www.googleapis.com/calendar/v3";

/**
 * CREATE CALENDAR EVENT
 * (This is frontend-safe wrapper for backend call)
 */
export const createCalendarEvent = async (bookingData) => {
  try {
    // 👉 In production, this will call YOUR backend API
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

    // fallback so booking still works
    return {
      success: false,
      message: "Calendar sync failed but booking saved",
    };
  }
};

/**
 * FORMAT EVENT DATA
 * (Prepares clean Google Calendar structure)
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
 * SLOT → ISO CONVERTER (MOCK LOGIC)
 * Future: replace with real date mapping
 */
const convertToISODate = (day, slot, type) => {
  const baseDate = new Date();

  // fake mapping (replace with real calendar date logic later)
  const startHour = parseInt(slot.split(":")[0]);

  const date = new Date(baseDate);
  date.setHours(type === "start" ? startHour : startHour + 0.5);

  return date.toISOString();
};