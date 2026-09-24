import { useState } from "react";
import { Link } from "react-router-dom";

export function Section({ children, className = "", ...rest }) {
  return (
    <section className={`w-full px-5 py-16 md:px-10 md:py-24 ${className}`} {...rest}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className = "" }) {
  return <span className={`eyebrow block text-brown ${className}`}>{children}</span>;
}

export function Title({ children, as: Tag = "h2", className = "" }) {
  return (
    <Tag className={`font-serif text-3xl leading-tight text-olive md:text-4xl ${className}`}>
      {children}
    </Tag>
  );
}

export function Lead({ children, className = "" }) {
  return (
    <p className={`max-w-2xl text-lg leading-8 text-muted ${className}`}>{children}</p>
  );
}

export function Button({ to, href, children, variant = "solid", className = "" }) {
  const base =
    "eyebrow inline-flex items-center justify-center px-7 py-3.5 transition-colors";
  const styles = {
    solid: "bg-olive text-cream hover:bg-olive-dark",
    outline: "border border-olive text-olive hover:bg-olive hover:text-cream",
    light: "bg-cream text-olive hover:bg-sand",
  };
  const cls = `${base} ${styles[variant]} ${className}`;
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={cls}>
      {children}
    </Link>
  );
}

/** Photo with a calm fallback box if the image does not load. */
export function Photo({ src, alt, ratio = "aspect-[4/3]", className = "" }) {
  const [failed, setFailed] = useState(!src);
  return (
    <div className={`${ratio} w-full overflow-hidden border border-line bg-panel ${className}`}>
      {failed ? (
        <div className="flex h-full w-full items-center justify-center p-6 text-center">
          <span className="eyebrow text-muted/70">{alt}</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
}

export function PageHeader({ eyebrow, title, lead, children }) {
  return (
    <Section className="pb-8 md:pb-10">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.08] text-olive md:text-6xl">
        {title}
      </h1>
      {lead && <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{lead}</p>}
      {children}
    </Section>
  );
}

export function ClosingCTA({
  title = "Have an idea, or a kitchen that needs fixing?",
  text = "Let’s talk over coffee.",
  email,
  buttonLabel = "Book a Consultation",
}) {
  return (
    <section className="w-full bg-olive px-5 py-20 text-cream md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <Eyebrow className="text-sand">Let’s talk</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl leading-tight md:text-5xl">{title}</h2>
          <p className="mt-4 text-lg font-light leading-8 text-cream/85">
            {text}{" "}
            <a href={`mailto:${email}`} className="underline underline-offset-4 hover:text-sand">
              {email}
            </a>
          </p>
        </div>
        <Button to="/contact" variant="light">
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
}
