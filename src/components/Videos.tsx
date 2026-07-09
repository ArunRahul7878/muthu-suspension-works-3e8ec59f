import { Play } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

type Video = {
  id: string;
  title: string;
  description: string;
  publishedAt: string; // ISO date
  views: number; // approx views for ranking
};

// Update `views` / `publishedAt` here as numbers change.
const videos: Video[] = [
  {
    id: "9-nlddyWvHI",
    title: "MSW × Birla's Parvai — How We Work",
    description:
      "A collaboration with Birla's Parvai explaining our approach to suspension repair.",
    publishedAt: "2023-01-01",
    views: 500000,
  },
  {
    id: "Jjo_Dyxm-Bs",
    title: "Featured on Thanthi TV with Birla",
    description:
      "Muthu Suspension Works featured in a Birla × Thanthi TV segment.",
    publishedAt: "2024-06-01",
    views: 150000,
  },
  {
    id: "0e2vESDfffw",
    title: "MSW × Rider Machine — Inside Our Suspension Service",
    description:
      "A collaboration with Rider Machine walking through how we service and rework suspensions at MSW.",
    publishedAt: "2026-06-01",
    views: 20000,
  },
];

type SortKey = "top" | "latest";

const Videos = () => {
  const [playing, setPlaying] = useState<Record<string, boolean>>({});
  const [sort, setSort] = useState<SortKey>("top");

  const sortedVideos = useMemo(() => {
    const arr = [...videos];
    if (sort === "latest") {
      arr.sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
    } else {
      arr.sort((a, b) => b.views - a.views);
    }
    return arr;
  }, [sort]);

  const scrollRef = useRef<HTMLDivElement>(null);

  // Snap the horizontal row back to the leftmost card on every sort change
  useEffect(() => {
    scrollRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  }, [sort]);

  return (
    <section id="featured" className="py-12 md:py-20 bg-background scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            As Featured
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            See our work in action — collaborations and media features.
          </p>
          <div
            role="tablist"
            aria-label="Sort videos"
            className="inline-flex items-center gap-1 p-1 rounded-full border border-border bg-muted/50"
          >
            {([
              { key: "top", label: "Top Rated" },
              { key: "latest", label: "Latest" },
            ] as { key: SortKey; label: string }[]).map((t) => (
              <button
                key={t.key}
                role="tab"
                aria-selected={sort === t.key}
                onClick={() => setSort(t.key)}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${
                  sort === t.key
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile: horizontal snap scroll. Desktop: grid. */}
        <div ref={scrollRef} className="md:hidden -mx-4 px-4 overflow-x-auto snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-4 pb-2">
            {sortedVideos.map((video) => {
              const isPlaying = playing[video.id];
              return (
                <div
                  key={video.id}
                  className="group shrink-0 w-[85%] snap-center rounded-lg overflow-hidden border border-border bg-card shadow-sm"
                >
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    {isPlaying ? (
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
                        title={video.title}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full border-0"
                      />
                    ) : (
                      <button
                        type="button"
                        onClick={() =>
                          setPlaying((prev) => ({ ...prev, [video.id]: true }))
                        }
                        aria-label={`Play ${video.title}`}
                        className="absolute inset-0 w-full h-full cursor-pointer"
                      >
                        <img
                          src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                          alt={video.title}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg">
                            <Play className="w-8 h-8 fill-current ml-1" />
                          </div>
                        </div>
                      </button>
                    )}
                  </div>
                  <div className="p-4 flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold text-card-foreground mb-1 line-clamp-2">
                        {video.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {video.description}
                      </p>
                    </div>
                    <a
                      href={`https://youtu.be/${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Watch ${video.title} on YouTube`}
                      title="Watch on YouTube"
                      className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-2">Swipe to see more →</p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {sortedVideos.map((video) => {
            const isPlaying = playing[video.id];
            return (
              <div
                key={video.id}
                className="group block rounded-lg overflow-hidden border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden bg-muted">
                  {isPlaying ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
                      title={video.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full border-0"
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() =>
                        setPlaying((prev) => ({ ...prev, [video.id]: true }))
                      }
                      aria-label={`Play ${video.title}`}
                      className="absolute inset-0 w-full h-full cursor-pointer"
                    >
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                        alt={video.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 md:w-10 md:h-10 fill-current ml-1" />
                        </div>
                      </div>
                    </button>
                  )}
                </div>
                <div className="p-4 md:p-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      {video.description}
                    </p>
                  </div>
                  <a
                    href={`https://youtu.be/${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Watch ${video.title} on YouTube`}
                    title="Watch on YouTube"
                    className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Videos;
