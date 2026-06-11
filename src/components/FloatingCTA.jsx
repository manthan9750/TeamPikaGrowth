import { Link } from "react-router-dom";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-50">

      <Link
        to="/contact"
        className="px-5 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm font-medium shadow-soft hover:scale-[1.03] transition"
      >
        Book Free Consultation
      </Link>

    </div>
  );
}