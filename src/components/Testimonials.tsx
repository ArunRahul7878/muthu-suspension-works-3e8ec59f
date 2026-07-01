import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { contact } from "@/config/contact";

const REVIEWS_URL = "https://msw-billing.duckdns.org/reviews";
const REVIEWS_PAGE = "https://search.google.com/local/reviews?placeid=ChIJ2-y2t_tdUjoRO-fbXyEb7Mg";

type Review = { author: string; text: string; rating: number };
type ReviewData = { rating: number | null; count: number | null; reviews: Review[] };

const Stars = ({ size = "w-4 h-4" }: { size?: string }) => (
  <span className="inline-flex" aria-hidden="true">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`${size} fill-yellow-400 text-yellow-400`} />
    ))}
  </span>
);

const Testimonials = () => {
  const [data, setData] = useState<ReviewData | null>(null);

  useEffect(() => {
    let alive = true;
    fetch(REVIEWS_URL).then((r) => r.json()).then((d) => { if (alive) setData(d); }).catch(() => { if (alive) setData(null); });
    return () => { alive = false; };
  }, []);

  const reviews = data?.reviews ?? [];

  return (
    <section id="reviews" className="py-12 md:py-20 bg-muted/30 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          <a href={REVIEWS_PAGE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-background border border-border rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-shadow">
            {data?.rating ? <span className="text-lg font-bold text-foreground">{data.rating}</span> : null}
            <Stars />
            <span className="text-sm text-muted-foreground">{data?.count ? `${data.count} Google reviews` : "Rated highly on Google"}</span>
          </a>
        </div>

        {reviews.length > 0 ? (
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4">
            {reviews.map((r, i) => (
              <a key={i} href={REVIEWS_PAGE} target="_blank" rel="noopener noreferrer" className="snap-center shrink-0 w-[300px] sm:w-[340px] bg-background border border-border rounded-xl p-6 flex flex-col text-left hover:shadow-md transition-shadow">
                <Stars />
                <p className="text-sm text-foreground mt-3 line-clamp-6">"{r.text}"</p>
                <p className="mt-4 font-semibold text-foreground">— {r.author}</p>
                <p className="text-xs text-muted-foreground">via Google · tap to read on Google</p>
              </a>
            ))}
          </div>
        ) : null}

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <Button asChild variant="outline"><a href={REVIEWS_PAGE} target="_blank" rel="noopener noreferrer">Read all reviews on Google</a></Button>
          <Button asChild><a href={contact.leaveReviewHref} target="_blank" rel="noopener noreferrer">Leave a Google review</a></Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
