import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Auto-loads every image in src/assets/gallery/
// Names sort alphabetically — prefix 01-, 02-, ... to control order.
const modules = import.meta.glob(
  "../assets/gallery/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true }
);

const images: string[] = Object.keys(modules)
  .sort()
  .map((key) => (modules[key] as { default: string }).default);

const Gallery = () => {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    []
  );
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % images.length)),
    []
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close, prev, next]);

  if (images.length === 0) return null;

  return (
    <section id="gallery" className="py-12 md:py-20 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Workshop</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            A look inside the workshop and the suspension jobs we deliver
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="group relative overflow-hidden rounded-lg aspect-square focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={`Open photo ${i + 1}`}
            >
              <img
                src={src}
                alt={`Muthu Suspension Works workshop photo ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={close}
        >
          <button onClick={close} className="absolute top-4 right-4 text-white/80 hover:text-white p-2" aria-label="Close">
            <X className="w-7 h-7" />
          </button>
          {images.length > 1 && (
            <>
              <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-2 md:left-6 text-white/80 hover:text-white p-2" aria-label="Previous photo">
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-2 md:right-6 text-white/80 hover:text-white p-2" aria-label="Next photo">
                <ChevronRight className="w-8 h-8" />
              </button>
            </>
          )}
          <img
            src={images[active]}
            alt={`Muthu Suspension Works photo ${active + 1}`}
            className="max-h-[85vh] max-w-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
