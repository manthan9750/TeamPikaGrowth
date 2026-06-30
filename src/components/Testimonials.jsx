import { Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Testimonials() {
  // {/* TODO: Replace these placeholder reviews with real, verifiable client testimonials before launch */}
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
    <section className="py-24 px-6 bg-bg">
      <div className="max-w-6xl mx-auto">
        
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-h2 text-ink dark:text-white">
              What Clients Say
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="p-8 rounded-2xl border border-border bg-surface shadow-sm hover:shadow-md transition-shadow h-full flex flex-col relative group">
                
                <Quote className="w-8 h-8 text-primary/20 mb-4 group-hover:text-primary/40 transition-colors" />
                
                <p className="text-sm text-content-secondary leading-relaxed flex-grow">
                  "{r.text}"
                </p>
                
                <p className="mt-6 pt-6 border-t border-border text-sm font-bold text-ink dark:text-white">
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