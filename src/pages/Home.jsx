import { Link } from "react-router-dom";
import {
  Button,
  ClosingCTA,
  Eyebrow,
  Photo,
  Section,
  Title,
} from "../components/UI";
import { expertise, photos, process, site, stats, testimonial, whyUs } from "../data/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Section className="pb-10 md:pb-14">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>Food · Café · Bakery Consultancy — Pan India</Eyebrow>
            <h1 className="mt-5 font-serif text-5xl leading-[1.05] text-olive md:text-7xl">
              We help food businesses <em className="font-normal">rise</em>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              From the first sketch of your café to the bread on your counter every
              morning, we bring 19+ years of hospitality experience to every kitchen we
              work with.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Button to="/contact">Start a Project</Button>
              <Link
                to="/supply"
                className="eyebrow border-b border-olive pb-1 text-olive hover:text-brown"
              >
                Explore B2B Supply →
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <Photo
              src={photos.hero}
              alt="Baker shaping dough in the Cut N Fold kitchen"
              ratio="aspect-[3/4]"
            />
          </div>
        </div>
      </Section>

      {/* Intro strip */}
      <section className="w-full border-y border-line bg-panel px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="max-w-3xl font-serif text-2xl leading-[1.5] text-olive md:text-3xl">
            Cut N Fold is a hospitality consultancy and B2B bakery partner based in{" "}
            {site.city}, working with food businesses across India. We plan, build and fix
            kitchens, and we supply bakes that other cafés, hotels and restaurants are
            proud to serve.
          </p>
        </div>
      </section>

      {/* What we do */}
      <Section className="pb-0 md:pb-0">
        <Eyebrow>What we do</Eyebrow>
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
          {expertise.map((item, i) => (
            <span key={item} className="font-serif text-xl text-olive md:text-2xl">
              {item}
              {i < expertise.length - 1 && <span className="ml-5 text-brown">·</span>}
            </span>
          ))}
        </div>
      </Section>

      {/* Two ways we work */}
      <Section>
        <Eyebrow>Two ways we work</Eyebrow>
        <Title className="mt-2">Plan it with us. Or let us bake for you.</Title>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {[
            {
              no: "01",
              kicker: "Consultancy",
              title: "Concept, menu, kitchen, team",
              text: "We help you open right, or run better. Costed menus, working kitchens and staff who know what to do.",
              to: "/consultancy",
              cta: "See consultancy services →",
              photo: photos.consultancy,
              alt: "Café kitchen laid out for easy work flow",
            },
            {
              no: "02",
              kicker: "B2B Bakery Supply",
              title: "Breads, cakes and daily bakes",
              text: "Breads, croissants, cookies and desserts, baked fresh and delivered to your kitchen every morning.",
              to: "/supply",
              cta: "See the product list →",
              photo: photos.supply,
              alt: "Fresh baked loaves cooling on a rack",
            },
          ].map((panel) => (
            <div key={panel.no} className="flex flex-col border border-line bg-cream p-6 md:p-8">
              <Photo src={panel.photo} alt={panel.alt} />
              <Eyebrow className="mt-6">
                {panel.no} — {panel.kicker}
              </Eyebrow>
              <h3 className="mt-2 font-serif text-2xl text-olive md:text-3xl">{panel.title}</h3>
              <p className="mt-3 flex-1 leading-7 text-muted">{panel.text}</p>
              <Link
                to={panel.to}
                className="eyebrow mt-6 w-fit border-b border-olive pb-1 text-olive hover:text-brown"
              >
                {panel.cta}
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Numbers */}
      <section className="w-full border-y border-line bg-sand px-5 py-14 md:px-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-serif text-4xl leading-none text-olive md:text-5xl">{s.value}</p>
              <p className="eyebrow mt-2 text-olive-dark">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Cut N Fold */}
      <Section>
        <Eyebrow>Why Cut N Fold</Eyebrow>
        <Title className="mt-2">What you get when you work with us</Title>

        <div className="mt-10 border-t border-line">
          {whyUs.map((item, i) => (
            <div
              key={item.title}
              className="grid items-baseline gap-3 border-b border-line py-7 md:grid-cols-12 md:gap-8"
            >
              <span className="font-serif text-xl text-brown md:col-span-1">
                0{i + 1}
              </span>
              <h3 className="font-serif text-xl text-olive md:col-span-4 md:text-2xl">
                {item.title}
              </h3>
              <p className="leading-7 text-muted md:col-span-7">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <section className="w-full border-y border-line bg-panel px-5 py-14 md:px-10">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>How we work</Eyebrow>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
            {process.map((step, i) => (
              <div key={step} className="flex items-center gap-6">
                <span className="font-serif text-2xl text-olive md:text-3xl">{step}</span>
                {i < process.length - 1 && <span className="text-line">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <Section className="text-center">
        <div className="mx-auto max-w-3xl">
          <blockquote className="font-serif text-2xl leading-relaxed text-olive italic md:text-3xl">
            “{testimonial.quote}”
          </blockquote>
          <p className="eyebrow mt-8 text-muted">{testimonial.credit}</p>
        </div>
      </Section>

      <ClosingCTA email={site.email} />
    </>
  );
}
