"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { SITE } from "@/lib/site-data";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 1200);
    const t2 = setTimeout(() => setShowHint(true), 3500);
    const t3 = setTimeout(() => setShowHint(false), 12000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-24 md:bottom-6 right-4 md:right-6 z-[90] flex items-end gap-2">
      {showHint && (
        <div className="hidden sm:flex items-center gap-2 bg-white border border-[#4A1E3D]/15 shadow-sm px-4 py-3 max-w-[230px] animate-fade-up">
          <button
            type="button"
            aria-label="Close"
            onClick={() => setShowHint(false)}
            className="absolute -top-2 -right-2 w-5 h-5 bg-white border border-[#4A1E3D]/20 inline-flex items-center justify-center text-[#4A1E3D] hover:bg-[#F6EEF2]"
          >
            <X className="w-3 h-3" strokeWidth={2} />
          </button>
          <p className="text-[12px] text-[#434343] leading-snug">
            Need help with a booking? Chat with our team on WhatsApp.
          </p>
        </div>
      )}
      <a
        href={`https://wa.me/${SITE.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative inline-flex items-center justify-center w-14 h-14 bg-[#4A1E3D] text-white rounded-full shadow-lg hover:bg-[#6B2A55] transition-colors group"
      >
        {/* ping ring */}
        <span className="absolute inset-0 rounded-full bg-[#4A1E3D] opacity-40 animate-ping" style={{ animationDuration: "2.4s" }} />
        <MessageCircle className="relative w-6 h-6" strokeWidth={1.6} fill="currentColor" />
      </a>
    </div>
  );
}
