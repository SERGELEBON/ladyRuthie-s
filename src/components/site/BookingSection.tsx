"use client";

import { useState } from "react";
import { Check, Send, Loader2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { EVENT_SPACES, SITE } from "@/lib/site-data";

export function BookingSection() {
  const { t, lang } = useI18n();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");

  const spaceOptions = EVENT_SPACES.map((s) => ({
    value: s.id,
    label: lang === "fr" ? s.frenchName : s.name,
  }));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
      dates: data.get("dates"),
      guests: data.get("guests"),
      space: data.get("space"),
      message: data.get("message"),
      lang,
    };
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Network error");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unknown error");
    }
  };

  return (
    <section id="book" className="w-full bg-[#4A1E3D] text-white">
      <div className="container-edge py-16 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          {/* Left: heading + alt contacts */}
          <div className="md:col-span-5">
            <p className="nav-link text-[#D4B3C4] mb-4">{t.bookDirect}</p>
            <h2 className="font-serif text-white text-[34px] sm:text-[44px] md:text-[52px] leading-[1.05] mb-6">
              {t.bookFormTitle}
            </h2>
            <div className="w-12 h-px bg-white/40 mb-8" />
            <p className="text-white/85 text-[16px] leading-[1.65] mb-8">
              {t.bookFormIntro}
            </p>

            <div className="space-y-4">
              <div>
                <div className="nav-link text-white/60 mb-1">{t.callUs}</div>
                <div className="flex flex-wrap gap-x-6 gap-y-1">
                  {SITE.phones.map((p) => (
                    <a key={p} href={`tel:${p}`} className="font-serif text-white text-[22px] hover:text-[#D4B3C4] transition-colors">
                      {p}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <div className="nav-link text-white/60 mb-1">{t.whatsappUs}</div>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="font-serif text-white text-[22px] hover:text-[#D4B3C4] transition-colors"
                >
                  +{SITE.whatsapp}
                </a>
              </div>
              <div>
                <div className="nav-link text-white/60 mb-1">Email</div>
                <a href={`mailto:${SITE.email}`} className="text-white/90 hover:text-white text-[15px] underline underline-offset-4 decoration-white/40">
                  {SITE.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="md:col-span-7">
            <div className="bg-white text-[#1F0E19] p-6 md:p-10">
              {status === "success" ? (
                <div className="text-center py-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-[#F6EEF2] text-[#4A1E3D] mb-5">
                    <Check className="w-7 h-7" strokeWidth={1.8} />
                  </div>
                  <h3 className="serif-h3 mb-3">{t.bookSuccessTitle}</h3>
                  <p className="body-text max-w-md mx-auto">{t.bookSuccessBody}</p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-8 btn-jazcaf btn-jazcaf-outline"
                  >
                    {t.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label={t.nameLabel} name="name" required />
                    <Field label={t.phoneLabel} name="phone" type="tel" required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label={t.emailLabel} name="email" type="email" />
                    <Field label={t.datesLabel} name="dates" placeholder="dd/mm/yyyy — dd/mm/yyyy" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label={t.guestsLabel} name="guests" type="number" min="1" placeholder="2" />
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="space" className="nav-link text-[#434343]">
                        {t.roomLabel}
                      </label>
                      <select
                        id="space"
                        name="space"
                        defaultValue=""
                        className="h-12 border border-[#4A1E3D]/20 bg-white px-3 text-[15px] focus:outline-none focus:border-[#4A1E3D] transition-colors"
                      >
                        <option value="" disabled>—</option>
                        {spaceOptions.map((s) => (
                          <option key={s.value} value={s.value}>{s.label}</option>
                        ))}
                        <option value="not-sure">{lang === "fr" ? "Pas encore sûr / plusieurs espaces" : "Not sure yet / multiple spaces"}</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="nav-link text-[#434343]">
                      {t.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="border border-[#4A1E3D]/20 bg-white px-3 py-2 text-[15px] focus:outline-none focus:border-[#4A1E3D] transition-colors resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-[13px] text-[#6B2A55]">
                      {error || (lang === "fr" ? "Une erreur est survenue. Réessayez ou appelez-nous." : "Something went wrong. Please try again or call us.")}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-jazcaf btn-jazcaf-primary self-start inline-flex items-center gap-2 disabled:opacity-60"
                  >
                    {status === "submitting" ? (
                      <Loader2 className="w-4 h-4 animate-spin" strokeWidth={1.8} />
                    ) : (
                      <Send className="w-4 h-4" strokeWidth={1.6} />
                    )}
                    {status === "submitting" ? t.submitting : t.submitBooking}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  min,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  min?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="nav-link text-[#434343]">
        {label}
        {required && <span className="text-[#6B2A55]"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        min={min}
        className="h-12 border border-[#4A1E3D]/20 bg-white px-3 text-[15px] focus:outline-none focus:border-[#4A1E3D] transition-colors"
      />
    </div>
  );
}
