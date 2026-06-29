import { Play } from "lucide-react";

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
  return (
    <section className="py-12 md:py-20 bg-background">
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
          {videos.map((video) => (
            <a
              key={video.id}
              href={`https://youtu.be/${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-lg overflow-hidden border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
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
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  {video.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;