import ScrollReveal from "./ScrollReveal";

export default function CaseStudies() {
  const cases = [
    {
      title: "Real Estate Lead System",
      desc: "Built a conversion-focused website + funnel system increasing lead quality by 3x."
    },
    {
      title: "Local Business Growth Setup",
      desc: "Helped a service business improve online visibility and booking rate by 2.4x."
    },
    {
      title: "Startup Branding System",
      desc: "Created full brand identity + landing system for early-stage SaaS startup."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white dark:bg-[#0b0b12]">

      <div className="max-w-6xl mx-auto">

        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 dark:text-white">
            Case Studies
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid md:grid-cols-3 gap-8">

          {cases.map((item, i) => (
            <ScrollReveal key={i}>
              <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover-lift bg-white dark:bg-[#11111a]">

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                  {item.desc}
                </p>

              </div>
            </ScrollReveal>
          ))}

        </div>

      </div>

    </section>
  );
}