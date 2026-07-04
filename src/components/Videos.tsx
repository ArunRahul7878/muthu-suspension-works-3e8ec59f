import { Play } from "lucide-react";
import { useState } from "react";

const videos = [
  {
    id: "9-nlddyWvHI",
    title: "MSW × Birla's Parvai — How We Work",
    description:
      "A collaboration with Birla's Parvai explaining our approach to suspension repair.",
  },
  {
    id: "Jjo_Dyxm-Bs",
    title: "Featured on Thanthi TV with Birla",
    description:
      "Muthu Suspension Works featured in a Birla × Thanthi TV segment.",
  },
];

const Videos = () => {
  const [playing, setPlaying] = useState<Record<string, boolean>>({});

  return (
    <section id="featured" className="py-12 md:py-20 bg-background scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            As Featured
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            See our work in action — collaborations and media features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {videos.map((video) => {
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