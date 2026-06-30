const whatsappMessage =
  "Hi Muthu Suspension Works, I'd like to book a free suspension check for my vehicle. Please let me know the next available slot.";

export const contact = {
  phone: "+91 98843 26229",
  phoneHref: "tel:+919884326229",
  whatsappMessage,
  whatsappHref: `https://wa.me/919884326229?text=${encodeURIComponent(whatsappMessage)}`,
  directionsHref:
    "https://www.google.com/maps/dir/?api=1&destination=Muthu%20Suspension%20Works%2C%20APJ%20Abdul%20Kalam%20Cross%20St%2C%20Angalamman%20Nagar%2C%20Nagalkeni%2C%20Chromepet%2C%20Chennai%2C%20Tamil%20Nadu%20600042",
  googleListingHref: "https://maps.app.goo.gl/A9gNRsYmEgLYVAEMA",
  leaveReviewHref: "https://g.page/r/CTvn218hG-zIEBM/review",
  email: "muthususpensionworks@gmail.com",
} as const;
