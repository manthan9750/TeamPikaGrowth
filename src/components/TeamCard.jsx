import Image from "next/image";
import { Users } from "lucide-react";

export default function TeamCard({ name, role, bio, description, image }) {
  // Handle prop mapping gracefully whether passed 'bio' or 'description'
  const displayDesc = bio || description;

  return (
    <div className="group bg-surface border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
      
      {/* IMAGE CONTEXT CONTAINER */}
      <div className="relative w-full aspect-square overflow-hidden bg-bg-secondary border-b border-border">
        {image ? (
          <Image
            src={image}
            alt={`${name} — ${role} at Team Pika Growth`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-xs text-content-muted gap-2">
            <Users className="w-8 h-8 opacity-20" />
            <span>No photo available</span>
          </div>
        )}
      </div>

      {/* INFO SECTION */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-col items-start gap-1 mb-3">
          <h3 className="text-lg font-bold text-ink dark:text-white tracking-tight group-hover:text-primary transition-colors">
            {name || "Team Member"}
          </h3>
          {role && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-bg-secondary text-content-secondary border border-border">
              {role}
            </span>
          )}
        </div>

        <p className="text-sm text-content-secondary leading-relaxed flex-grow">
          {displayDesc || "Dedicated member of the Team Pika Growth operational team."}
        </p>
      </div>

    </div>
  );
}