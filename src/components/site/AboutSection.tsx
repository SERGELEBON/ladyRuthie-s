"use client";

import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site-data";

export function AboutSection() {
  const { t } = useI18n();
  return (
    <section id="about" className="w-full bg-white">
      <div className="container-edge py-16 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* Left: image */}
          <div className="md:col-span-5 lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#F6EEF2]">
              <img
                src="/images/about-signage.jpg"
                alt="The LadyRuthie's Events Center signage at the venue entrance in Haatso, Accra"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="nav-link text-[#434343] mt-3">{SITE.area} · {SITE.country}</p>
          </div>

          {/* Right: text */}
          <div className="md:col-span-7 lg:col-span-6 md:col-start-7 lg:col-start-7">
            <p className="eyebrow mb-4">{t.aboutEyebrow}</p>
            <h2 className="serif-h2 mb-8">{t.aboutTitle}</h2>
            <div className="section-divider mb-8 max-w-[80px]" />
            <p className="body-text mb-6">{t.aboutBody}</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              <div>
                <div className="font-serif text-[#4A1E3D] text-[40px] leading-none">04</div>
                <div className="nav-link text-[#434343] mt-2">{t.aboutStat1}</div>
              </div>
              <div>
                <div className="font-serif text-[#4A1E3D] text-[40px] leading-none">500</div>
                <div className="nav-link text-[#434343] mt-2">{t.aboutStat2}</div>
              </div>
              <div>
                <div className="font-serif text-[#4A1E3D] text-[40px] leading-none">100%</div>
                <div className="nav-link text-[#434343] mt-2">{t.aboutStat3}</div>
              </div>
            </div>

            {/* Services we host — straight from the on-site signage */}
            <div className="mt-10">
              <h3 className="nav-link text-[#4A1E3D] mb-4">{t.eventTypesTitle}</h3>
              <p className="body-small text-[#434343] mb-5">{t.eventTypesIntro}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {t.eventTypes.map((ev) => (
                  <li key={ev.name} className="flex items-baseline gap-2.5">
                    <span className="inline-block w-1.5 h-1.5 bg-[#C9A227] shrink-0 translate-y-[-2px]" aria-hidden />
                    <span className="body-small text-[#434343]">
                      <span className="font-medium text-[#4A1E3D]">{ev.name}</span>
                      <span className="text-[#434343]/70"> — {ev.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <a href="#book" className="btn-jazcaf btn-jazcaf-outline">
                {t.discoverMore}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
