import { useEffect } from "react";

const REELS = [
  "https://www.instagram.com/reel/DX_thk8TC7_/",
  "https://www.instagram.com/reel/DYHqTQ7zzxo/",
  "https://www.instagram.com/reel/DYUYivgzJea/",
  "https://www.instagram.com/reel/DYZiyLDz0XS/",
];

const Reels = () => {
  useEffect(() => {
    const SRC = "https://www.instagram.com/embed.js";
    const process = () => {
      // @ts-ignore
      if (window.instgrm?.Embeds) window.instgrm.Embeds.process();
    };
    const existing = document.querySelector(`script[src="${SRC}"]`);
    if (existing) { process(); return; }
    const s = document.createElement("script");
    s.src = SRC;
    s.async = true;
    s.onload = process;
    document.body.appendChild(s);
  }, []);

  return (
    <section id="reels" className="py-12 md:py-20 bg-muted/30 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">From Our Workshop</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">Swipe through our latest work on Instagram</p>
        </div>

        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4">
          {REELS.map((url) => (
            <div key={url} className="snap-center shrink-0 w-[340px]">
              <blockquote className="instagram-media" data-instgrm-permalink={`${url}?utm_source=ig_embed`} data-instgrm-version="14" style={{ background: "#FFF", border: 0, borderRadius: 3, boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)", margin: 0, maxWidth: "100%", minWidth: 326, width: "100%" }} />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="https://www.instagram.com/msw__1997" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Follow us on Instagram @msw__1997</a>
        </div>
      </div>
    </section>
  );
};

export default Reels;
