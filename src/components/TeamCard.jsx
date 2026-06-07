
/**
 * TEAM PIKA GROWTH - TEAM CARD COMPONENT
 * --------------------------------------
 * Purpose:
 * - show real human trust layer
 * - support About page credibility
 * - consistent SaaS-style profile cards
 */

export default function TeamCard({ name, role, description, image }) {
  return (
    <div className="group relative rounded-xl border border-gray-200 dark:border-gray-800 p-5 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">

      {/* IMAGE SECTION */}
      <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 mb-4 mx-auto">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-sm text-gray-500">
            {name?.charAt(0)}
          </div>
        )}
      </div>

      {/* NAME */}
      <h3 className="text-center font-semibold text-base">
        {name}
      </h3>

      {/* ROLE */}
      <p className="text-center text-sm text-primary mt-1">
        {role}
      </p>

      {/* DESCRIPTION */}
      <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">
        {description}
      </p>

      {/* SUBTLE HOVER ACCENT */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-5 bg-primary transition-all duration-300"></div>

    </div>
  );
}
