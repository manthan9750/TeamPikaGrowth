import Link from "next/link";
import { globalCTAs } from "@/src/data/nav";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Link
        href={globalCTAs.primary.path}
        className="block px-5 py-3 rounded-full bg-ink text-white dark:bg-white dark:text-ink text-sm font-medium shadow-md hover:scale-[1.03] transition-transform"
      >
        {globalCTAs.primary.label}
      </Link>
    </div>
  );
}