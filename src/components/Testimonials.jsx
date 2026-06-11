import ScrollReveal from "./ScrollReveal";

export default function Testimonials() {
  const reviews = [
    {
      name: "Client A",
      text: "The system they built completely changed how we get leads. Very structured approach."
    },
    {
      name: "Client B",
      text: "Clean design + strong strategy. Our conversion rate improved noticeably."
    },
    {
      name: "Client C",
      text: "Professional execution. Feels like working with a real agency team."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-[#0f0f18]">

      <div className="max-w-6xl mx-auto">

        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 dark:text-white">
            What Clients Say
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid md:grid-cols-3 gap-8">

          {reviews.map((r, i) => (
            <ScrollReveal key={i}>
              <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#11111a] hover-lift">

                <p className="text-sm text-gray-600 dark:text-gray-300">
                  "{r.text}"
                </p>

                <p className="mt-4 text-sm font-medium text-gray-900 dark:text-white">
                  — {r.name}
                </p>

              </div>
            </ScrollReveal>
          ))}

        </div>

      </div>

    </section>
  );
}