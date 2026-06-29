import { Phone, MessageCircle } from "lucide-react";
import { contact } from "@/config/contact";

const MobileContactBar = () => {
  return (
    <div
      className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-background border-t border-border shadow-lg"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2">
        <a
          href={contact.phoneHref}
          aria-label="Call Muthu Suspension Works"
          className="flex items-center justify-center gap-2 py-3 font-semibold text-primary-foreground bg-primary hover:bg-primary/90 transition-colors"
        >
          <Phone className="w-5 h-5" />
          Call
        </a>
        <a
          href={contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="flex items-center justify-center gap-2 py-3 font-semibold text-accent-foreground bg-accent hover:bg-accent/90 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default MobileContactBar;