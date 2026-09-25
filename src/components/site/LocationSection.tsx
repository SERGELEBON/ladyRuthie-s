"use client";

import { MapPin, Navigation, Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site-data";

export function LocationSection() {
  const { t, lang } = useI18n();

  return (
    <section id="location" className="w-full bg-white">
      <div className="grid md:grid-cols-2">
        {/* Left: text */}
        <div className="container-edge py-16 md:py-28 flex flex-col justify-center">
          <p className="eyebrow mb-4">{t.locationEyebrow}</p>
          <h2 className="serif-h2 mb-6">{t.locationTitle}</h2>
          <div className="section-divider mb-6 max-w-[80px]" />
          <p className="body-text mb-8">{t.locationBody}</p>

          <div className="space-y-4 mb-10">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#4A1E3D] mt-0.5 shrink-0" strokeWidth={1.5} />
              <div>
                <div className="nav-link text-[#434343]">{t.findUs}</div>
                <p className="body-small mt-1">
                  {SITE.addressFull}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[#4A1E3D] mt-0.5 shrink-0" strokeWidth={1.5} />
              <div>
                <div className="nav-link text-[#434343]">{t.callUs}</div>
                <p className="body-small mt-1">
                  {SITE.phones.map((p) => (
                    <a key={p} href={`tel:${p}`} className="hover:text-[#4A1E3D] transition-colors mr-3">
                      {p}
                    </a>
                  ))}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={SITE.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="btn-jazcaf btn-jazcaf-primary inline-flex items-center gap-2"
            >
              <Navigation className="w-4 h-4" strokeWidth={1.5} />
              {t.getDirections}
            </a>
            <a href="#book" className="btn-jazcaf btn-jazcaf-outline">
              {t.bookNow}
            </a>
          </div>
        </div>

        {/* Right: map */}
        <div className="relative min-h-[360px] md:min-h-[640px] bg-[#F6EEF2]">
          <iframe
            title="LadyRuthie's Events Center location map"
            src={SITE.mapsEmbed}
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
