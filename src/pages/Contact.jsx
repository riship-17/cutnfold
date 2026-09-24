import { useState } from "react";
import { Eyebrow, PageHeader, Photo, Section, Title } from "../components/UI";
import { photos, site } from "../data/site";

const interests = [
  { value: "consultancy", label: "Consultancy" },
  { value: "supply", label: "B2B Supply" },
  { value: "both", label: "Both" },
];

const empty = {
  name: "",
  business: "",
  phone: "",
  email: "",
  interest: "consultancy",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  // No backend yet, so the form opens the visitor's email app with everything
  // filled in. TODO: swap this for a form service (Formspree, Getform) or your
  // own API if you want enquiries to land in an inbox automatically.
  const handleSubmit = (e) => {
    e.preventDefault();
    const label = interests.find((i) => i.value === form.interest)?.label;
    const body = [
      `Name: ${form.name}`,
      `Business: ${form.business}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Interested in: ${label}`,
      "",
      form.message,
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Enquiry from ${form.name || "website"} — ${label}`
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field =
    "w-full border-b border-line bg-transparent pb-2 text-ink placeholder:text-muted/50 focus:border-olive focus:outline-none";

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let’s make something <em className="font-normal">good</em> together.
          </>
        }
        lead={`Tell us about your idea or your business. We usually reply within ${site.replyTime}.`}
      />

      <Section className="pt-4">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Details */}
          <div className="md:col-span-5">
            <div className="flex flex-col gap-6">
              <div className="border-t border-line pt-4">
                <Eyebrow>Email</Eyebrow>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 block font-serif text-xl text-olive hover:text-brown"
                >
                  {site.email}
                </a>
              </div>
              <div className="border-t border-line pt-4">
                <Eyebrow>Phone / WhatsApp</Eyebrow>
                <a href={site.whatsapp} className="mt-1 block text-ink hover:text-olive">
                  {site.phone}
                </a>
              </div>
              <div className="border-t border-line pt-4">
                <Eyebrow>Where we are</Eyebrow>
                <p className="mt-1 text-muted">{site.address}</p>
              </div>
              <div className="border-t border-line pt-4">
                <Eyebrow>Delivery areas</Eyebrow>
                <p className="mt-1 text-muted">{site.deliveryAreas}</p>
              </div>
              <div className="border-y border-line py-4">
                <Eyebrow>Hours</Eyebrow>
                <p className="mt-1 text-muted">
                  Monday to Saturday, 9 am to 6 pm. Deliveries go out early morning.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Photo src={photos.table} alt="Coffee and fresh bakes on a table" ratio="aspect-[4/3]" />
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-7 md:pl-8">
            <Title as="h2">Send us a message</Title>

            {sent && (
              <div className="mt-6 border border-line bg-panel p-5">
                <p className="font-serif text-xl text-olive">Thank you.</p>
                <p className="mt-1 text-sm text-muted">
                  Your email app should have opened with the details filled in. If it did
                  not, write to us directly at{" "}
                  <a href={`mailto:${site.email}`} className="underline">
                    {site.email}
                  </a>
                  .
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-7">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="eyebrow text-muted">
                  Your name *
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={update("name")}
                  className={field}
                  placeholder="Full name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="business" className="eyebrow text-muted">
                  Business name
                </label>
                <input
                  id="business"
                  value={form.business}
                  onChange={update("business")}
                  className={field}
                  placeholder="Café, bakery or company name"
                />
              </div>

              <div className="grid gap-7 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="eyebrow text-muted">
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={update("phone")}
                    className={field}
                    placeholder="+91 98XXX XXXXX"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="eyebrow text-muted">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    className={field}
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="eyebrow text-muted">I’m interested in *</span>
                <div className="grid grid-cols-3 gap-2">
                  {interests.map((i) => (
                    <button
                      key={i.value}
                      type="button"
                      onClick={() => setForm({ ...form, interest: i.value })}
                      className={`eyebrow border px-3 py-3 transition-colors ${
                        form.interest === i.value
                          ? "border-olive bg-olive text-cream"
                          : "border-line text-muted hover:border-olive"
                      }`}
                    >
                      {i.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="eyebrow text-muted">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={update("message")}
                  className={`${field} resize-none`}
                  placeholder="Tell us about your space, your menu, or how much you need every day."
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="eyebrow bg-olive px-8 py-4 text-cream transition-colors hover:bg-olive-dark"
                >
                  Send message
                </button>
                <p className="mt-3 text-xs text-muted">
                  Prefer WhatsApp? Message us on {site.phone} and we will reply the same way.
                </p>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}
