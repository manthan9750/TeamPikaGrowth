import { Clock, Video, ShieldCheck, User, Building2, Phone, Mail } from "lucide-react";

export const FADE_UP_ANIMATION = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } 
  },
  exit: { 
    opacity: 0, 
    y: -12, 
    transition: { duration: 0.25, ease: [0.7, 0, 0.84, 0] } 
  }
};

export const BOOKING_SLOTS = [
  "10:00 AM - 10:30 AM",
  "11:00 AM - 11:30 AM",
  "12:00 PM - 12:30 PM",
  "3:00 PM - 3:30 PM",
  "5:00 PM - 5:30 PM"
];

export const SYSTEM_SPECIFICATIONS = [
  {
    id: "duration",
    label: "Duration Parameters",
    value: "30 Minutes Focused Sync",
    icon: Clock
  },
  {
    id: "format",
    label: "Communication Protocol",
    value: "High-Fidelity Remote Video Link",
    icon: Video
  },
  {
    id: "security",
    label: "Security State",
    value: "Instant validation & reference hash routing",
    icon: ShieldCheck
  }
];

export const FORM_SCHEMA = [
  {
    id: "fullName",
    label: "Full Name Identity",
    placeholder: "e.g. Alexander Wright",
    type: "text",
    icon: User,
    required: true,
    validation: (val) => val.trim().length >= 2
  },
  {
    id: "brandName",
    label: "Brand Entity / Corporation Name",
    placeholder: "e.g. Pika Frameworks Corp",
    type: "text",
    icon: Building2,
    required: true,
    validation: (val) => val.trim().length >= 2
  },
  {
    id: "businessPhone",
    label: "Primary Business Line",
    placeholder: "10-digit identifier",
    type: "tel",
    icon: Phone,
    required: true,
    validation: (val) => /^[0-9]{10}$/.test(val)
  },
  {
    id: "personalPhone",
    label: "Secondary Routing (Optional)",
    placeholder: "Backup parameter",
    type: "tel",
    icon: Phone,
    required: false,
    validation: (val) => val === "" || /^[0-9]{10}$/.test(val)
  },
  {
    id: "email",
    label: "Communication Endpoint Mail",
    placeholder: "alexander@pikagrowth.com",
    type: "email",
    icon: Mail,
    required: true,
    validation: (val) => /\S+@\S+\.\S+/.test(val)
  }
];