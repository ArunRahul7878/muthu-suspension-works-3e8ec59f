## Goals

1. Make the website noticeably better on small Android phone screens (≤414px), without changing the desktop look.
2. Change the "Book Free Suspension Check" button so it opens WhatsApp instead of scrolling to the contact section.

## Mobile improvements (per section)

**Hero (`src/components/Hero.tsx`)**
- Reduce vertical padding on mobile (`py-16 md:py-24`) and switch from `min-h-screen` to `min-h-[90vh]` so the button is closer to the fold on short screens.
- Scale the logo down on mobile (`h-20 md:h-32`).
- Headline: `text-3xl sm:text-4xl md:text-6xl lg:text-7xl` with tighter line-height and `mb-4 md:mb-6` so it doesn't wrap to 6+ lines.
- Subheadline: `text-base sm:text-lg md:text-2xl`, `mb-8 md:mb-12`.
- CTA button: full-width on mobile (`w-full sm:w-auto`), smaller padding (`px-6 py-5 sm:px-8 sm:py-6`), `text-base sm:text-lg`.
- Add horizontal padding safety: `px-4 sm:px-6`.

**About (`src/components/About.tsx`)**
- Section padding: `py-12 md:py-20`.
- Heading: `text-3xl md:text-4xl`, `mb-4 md:mb-6`.
- Body text: `text-base md:text-lg`.
- Feature grid: change to `grid-cols-2 lg:grid-cols-4` so 4 small cards fit nicely on phones (currently 1 column = very long scroll). Reduce card padding (`pt-5`), icon box (`p-2`), icon size (`w-6 h-6 md:w-8 md:h-8`), title `text-base md:text-xl`.

**Services (`src/components/Services.tsx`)**
- Section padding: `py-12 md:py-20`, heading `text-3xl md:text-4xl`, mb-8 md:mb-16.
- Card spacing tightened: `gap-4 md:gap-6`.
- Card title `text-lg md:text-xl`, header padding reduced on mobile.
- Keep single column on phones but reduce overall vertical footprint.

**Testimonials (`src/components/Testimonials.tsx`)**
- Section padding: `py-12 md:py-20`.
- Quote text: `text-base sm:text-lg md:text-2xl`, card padding `p-6 md:p-12`.
- Move carousel arrows inside the card area on mobile (they currently sit off-canvas at narrow widths) by adding `mx-12` to the carousel container or repositioning `CarouselPrevious/Next` with `left-2` / `right-2` on mobile.

**MapSection (`src/components/MapSection.tsx`)**
- Section padding: `py-12 md:py-20`, heading `text-3xl md:text-4xl`.
- iframe height: `h-[300px] md:h-[450px]` (use a wrapper div with responsive height instead of fixed `height="450"`).

**Contact (`src/components/Contact.tsx`)**
- Section padding: `py-12 md:py-20`, heading `text-3xl md:text-4xl`.
- Cards stack as 1 col on mobile already; reduce gap to `gap-4 md:gap-6` and enable text wrapping for long email/address (`break-words`).
- Add a prominent "Chat on WhatsApp" button at the top of the contact grid on mobile.

**Global tweaks (`src/index.css`)**
- Add `html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }` and `body { overflow-x: hidden; }` to prevent horizontal scroll on mobile from any overflow.

## WhatsApp CTA change

In `src/components/Hero.tsx`:
- Remove the `scrollToContact` handler.
- Change the Button to an anchor (`<Button asChild>` wrapping an `<a>`) that opens:
  `https://wa.me/919884326229?partnertoken=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3Nzc5Njg4MjEsInVybCI6Imh0dHBzOi8vd2EubWUvOTE5ODg0MzI2MjI5IiwiaXNzIjoiR29vZ2xlIiwiZXhwIjoxNzc3OTY5MTIxfQ.ez03K9s4-u5EDPkDc1eMXftn3uo9KkDBqqRlQUoCAc3R_V5FFXHbk84hx9V5-urVn88-SsABTurRiV7qAcmphA`
- `target="_blank"`, `rel="noopener noreferrer"`.
- Optionally add a small WhatsApp icon (lucide `MessageCircle`) before the label.

## Files to edit

- `src/components/Hero.tsx` — mobile sizing + WhatsApp link.
- `src/components/About.tsx` — mobile grid + sizing.
- `src/components/Services.tsx` — mobile sizing.
- `src/components/Testimonials.tsx` — mobile padding + carousel arrow positioning.
- `src/components/MapSection.tsx` — responsive iframe height.
- `src/components/Contact.tsx` — mobile sizing + WhatsApp quick-action.
- `src/index.css` — prevent horizontal overflow, text-size-adjust.

No new dependencies. No backend changes.
