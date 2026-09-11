"use client";

import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import BlurFade from "@/components/ui/blur-fade";
import ScrollProgress from "@/components/ui/scroll-progress";
import { useMotionPreferences } from "@/components/ui/use-motion-preferences";
import { useMagnet } from "@/hooks/use-magnet";
import { useParallax } from "@/hooks/use-parallax";
import { cn } from "@/lib/utils";

/**
 * Sección `contacto` y pie del sitio.
 *
 * El formulario no hace ninguna petición de red: compone un `mailto:` hacia el
 * correo principal con asunto y cuerpo prellenados y deja que el cliente de
 * correo del visitante se encargue del envío. Por eso el estado de éxito dice
 * que el mensaje está listo, no que se envió.
 */

/** Datos de contacto: valores literales, no prosa; no se traducen. */
const PRIMARY_EMAIL = "mariosnachezmarla@gmail.com";
const ALT_EMAIL = "mayitolalito@hotmail.com";
const PHONE = "+52 443 840 9187";
const LINKEDIN_URL = "https://linkedin.com/in/mario-sánchez-46b341210";
const LINKEDIN_HANDLE = "linkedin.com/in/mario-sánchez-46b341210";
const GITHUB_URL = "https://github.com/Mario-S-M";
const GITHUB_HANDLE = "github.com/Mario-S-M";
const CV_FILE = "/cv-mario-sanchez.pdf";

interface Channel {
  /** Clave i18n de la etiqueta. */
  labelKey: string;
  /** Valor publicado, tal cual. */
  value: string;
  href: string;
  external?: boolean;
}

const CHANNELS: Channel[] = [
  { labelKey: "contact.channel.email", value: PRIMARY_EMAIL, href: `mailto:${PRIMARY_EMAIL}` },
  { labelKey: "contact.channel.emailAlt", value: ALT_EMAIL, href: `mailto:${ALT_EMAIL}` },
  { labelKey: "contact.channel.phone", value: PHONE, href: `tel:${PHONE.replace(/\s/g, "")}` },
  { labelKey: "contact.channel.linkedin", value: LINKEDIN_HANDLE, href: LINKEDIN_URL, external: true },
  { labelKey: "contact.channel.github", value: GITHUB_HANDLE, href: GITHUB_URL, external: true },
];

/** Enlaces del pie: las ocho secciones de la página, en su orden de scroll. */
const FOOTER_LINKS = [
  { id: "inicio", labelKey: "contact.footer.link.inicio" },
  { id: "sobre-mi", labelKey: "contact.footer.link.sobreMi" },
  { id: "proyectos", labelKey: "contact.footer.link.proyectos" },
  { id: "experiencia", labelKey: "contact.footer.link.experiencia" },
  { id: "stack", labelKey: "contact.footer.link.stack" },
  { id: "reconocimientos", labelKey: "contact.footer.link.reconocimientos" },
  { id: "notas", labelKey: "contact.footer.link.notas" },
  { id: "contacto", labelKey: "contact.footer.link.contacto" },
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FIELD_LABEL_CLASS =
  "font-mono text-[10px] tracking-[0.16em] text-fg-subtle uppercase";

const FIELD_CLASS =
  "w-full border-0 border-b border-hairline bg-transparent py-2.5 text-base text-fg outline-none placeholder:text-fg-faint focus:border-accent";

const PILL_CLASS =
  "inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/15 px-[18px] py-3";

const FOOTER_BUTTON_CLASS =
  "inline-flex items-center gap-2 rounded-full border border-white/15 px-[18px] py-2.5 font-mono text-[11px] tracking-[0.12em] text-fg uppercase";

/** Entrada de bloque. Con movimiento reducido el desplazamiento y el desenfoque se anulan. */
function Reveal({
  children,
  still,
  delay = 0,
  className,
}: {
  children: ReactNode;
  still: boolean;
  delay?: number;
  className?: string;
}) {
  return (
    <BlurFade
      className={className}
      delay={still ? 0 : delay}
      duration={still ? 0 : 0.6}
      yOffset={still ? 0 : 18}
      blur={still ? "0px" : "6px"}
    >
      {children}
    </BlurFade>
  );
}

/** Píldora de dato de contacto con efecto imán; el color transiciona en el hijo. */
function ChannelPill({ channel }: { channel: Channel }) {
  const { t } = useTranslation();
  const ref = useMagnet<HTMLAnchorElement>({ radius: 60, maxShift: 10 });

  return (
    <a
      ref={ref}
      href={channel.href}
      target={channel.external ? "_blank" : undefined}
      rel={channel.external ? "noreferrer noopener" : undefined}
      className={cn(PILL_CLASS, "group hover:border-fg")}
    >
      <span className="font-mono text-[10px] tracking-[0.16em] text-fg-subtle uppercase transition-colors duration-300 group-hover:text-accent">
        {t(channel.labelKey)}
      </span>
      <span className="font-mono text-[11px] break-all text-fg transition-colors duration-300">
        {channel.value}
      </span>
    </a>
  );
}

export function ContactSection() {
  const { t } = useTranslation();
  const { reducedMotion } = useMotionPreferences();
  const glowRef = useParallax<HTMLDivElement>({ speed: 0.18 });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const canSend = useMemo(
    () =>
      name.trim().length > 0 &&
      message.trim().length > 0 &&
      EMAIL_PATTERN.test(email.trim()),
    [name, email, message]
  );

  /** El imán no debe atraer al cursor mientras el envío está bloqueado. */
  const submitRef = useMagnet<HTMLButtonElement>({ radius: 70, maxShift: 12, disabled: !canSend });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSend) return;

    const subject = `${t("contact.mail.subject")} · ${name.trim()}`;
    const body = [
      message.trim(),
      "",
      `${t("contact.mail.from")}: ${name.trim()}`,
      `${t("contact.mail.replyTo")}: ${email.trim()}`,
    ].join("\r\n");

    window.location.href = `mailto:${PRIMARY_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  };

  const resetForm = () => {
    setSent(false);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section
      id="contacto"
      className="relative overflow-hidden border-t border-white/[0.07] bg-surface px-[5vw] pt-[clamp(90px,13vw,170px)] pb-[clamp(60px,8vw,90px)]"
    >
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-[-10%] left-1/2 h-[60vw] max-h-[760px] w-[60vw] max-w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,30,86,0.16),transparent_62%)] blur-[46px]"
      />

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 gap-[clamp(44px,6vw,80px)] lg:grid-cols-2">
        <div>
          <Reveal still={reducedMotion}>
            <p className="mb-[22px] font-mono text-[11px] tracking-[0.26em] text-accent uppercase">
              {t("contact.eyebrow")}
            </p>
          </Reveal>

          <Reveal still={reducedMotion} delay={0.08}>
            <h2 className="font-display text-[clamp(32px,5.6vw,76px)] leading-[0.96] font-bold tracking-[-0.04em] text-balance text-fg">
              {t("contact.title")}
            </h2>
          </Reveal>

          <Reveal still={reducedMotion} delay={0.16}>
            <p className="mt-[26px] max-w-[46ch] text-[clamp(15px,1.8vw,18px)] leading-[1.7] text-pretty text-fg-muted">
              {t("contact.description")}
            </p>
          </Reveal>

          <Reveal still={reducedMotion} delay={0.24}>
            <ul
              aria-label={t("contact.channels.label")}
              className="mt-9 flex list-none flex-wrap gap-2.5 p-0"
            >
              {CHANNELS.map((channel) => (
                <li key={channel.labelKey} className="max-w-full">
                  <ChannelPill channel={channel} />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div aria-live="polite" className="relative">
          {sent ? (
            <Reveal still={reducedMotion}>
              <div className="flex min-h-[320px] flex-col items-start justify-center gap-3.5 border border-accent/45 bg-bg px-[clamp(26px,3.4vw,40px)] py-[clamp(40px,5vw,64px)]">
                <span aria-hidden="true" className="text-[34px] leading-none text-accent">
                  ✓
                </span>
                <h3 className="font-display text-[28px] font-bold tracking-[-0.02em] text-fg">
                  {t("contact.sent.title")}
                </h3>
                <p className="text-[15px] leading-[1.6] text-fg-subtle">
                  {t("contact.sent.body")}
                </p>
                <p className="text-[15px] leading-[1.6] text-fg-subtle">
                  {t("contact.sent.fallback")}{" "}
                  <a href={`mailto:${PRIMARY_EMAIL}`} className="font-mono text-[13px] break-all text-accent hover:text-accent-hover">
                    {PRIMARY_EMAIL}
                  </a>
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-2 cursor-pointer rounded-full border border-white/15 px-[18px] py-2.5 font-mono text-[11px] tracking-[0.12em] text-fg uppercase transition-colors duration-300 hover:border-fg hover:bg-hairline-soft"
                >
                  {t("contact.sent.again")}
                </button>
              </div>
            </Reveal>
          ) : (
            <Reveal still={reducedMotion} delay={0.12}>
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-5 border border-hairline bg-bg p-[clamp(26px,3.4vw,40px)]"
              >
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="contacto-nombre" className={FIELD_LABEL_CLASS}>
                    {t("contact.form.name")}
                  </label>
                  <input
                    id="contacto-nombre"
                    name="nombre"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder={t("contact.form.namePlaceholder")}
                    className={FIELD_CLASS}
                  />
                </div>

                <div className="flex flex-col gap-2.5">
                  <label htmlFor="contacto-correo" className={FIELD_LABEL_CLASS}>
                    {t("contact.form.email")}
                  </label>
                  <input
                    id="contacto-correo"
                    name="correo"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder={t("contact.form.emailPlaceholder")}
                    className={FIELD_CLASS}
                  />
                </div>

                <div className="flex flex-col gap-2.5">
                  <label htmlFor="contacto-mensaje" className={FIELD_LABEL_CLASS}>
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    id="contacto-mensaje"
                    name="mensaje"
                    rows={4}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder={t("contact.form.messagePlaceholder")}
                    className={cn(FIELD_CLASS, "resize-y")}
                  />
                </div>

                <button
                  ref={submitRef}
                  type="submit"
                  disabled={!canSend}
                  aria-describedby="contacto-envio-nota"
                  className={cn(
                    "mt-1.5 rounded-full px-[26px] py-[17px] text-[14px] font-extrabold tracking-[0.05em] uppercase",
                    canSend
                      ? "cursor-pointer bg-accent text-bg shadow-[0_14px_40px_rgba(255,30,86,0.3)] hover:bg-accent-active"
                      : "cursor-not-allowed border border-hairline bg-transparent text-fg-faint"
                  )}
                >
                  {t("contact.form.submit")}
                </button>

                <p id="contacto-envio-nota" className="font-mono text-[11px] leading-[1.6] text-fg-subtle">
                  {canSend ? t("contact.form.hint") : t("contact.form.incomplete")}
                </p>
              </form>
            </Reveal>
          )}
        </div>
      </div>

      <footer className="relative mx-auto mt-[clamp(60px,8vw,100px)] max-w-[1200px] border-t border-white/[0.09] pt-[34px]">
        <nav aria-label={t("contact.footer.navLabel")}>
          <ul className="flex list-none flex-wrap gap-x-5 gap-y-3 p-0">
            {FOOTER_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="font-mono text-[11px] tracking-[0.12em] text-fg-subtle uppercase transition-colors duration-300 hover:text-fg"
                >
                  {t(link.labelKey)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-[18px]">
          <span className="font-mono text-[11px] tracking-[0.12em] text-fg-faint">
            {t("contact.footer.copyright")}
          </span>

          <span className="flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] text-fg-faint uppercase">
            {t("contact.footer.progress")}
            <ScrollProgress
              label={t("contact.footer.progressLabel")}
              className="text-[11px] tracking-[0.12em] text-fg"
            />
          </span>

          <div className="flex flex-wrap gap-2.5">
            <a
              href={CV_FILE}
              download
              className={cn(FOOTER_BUTTON_CLASS, "transition-colors duration-300 hover:border-fg hover:bg-hairline-soft")}
            >
              {t("contact.footer.cv")}
              <span aria-hidden="true">↓</span>
            </a>
            <a
              href="#inicio"
              className={cn(FOOTER_BUTTON_CLASS, "transition-colors duration-300 hover:border-fg hover:bg-fg hover:text-bg")}
            >
              {t("contact.footer.top")}
              <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
