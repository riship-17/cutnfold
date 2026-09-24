import { ClosingCTA, Eyebrow, PageHeader, Photo, Section, Title } from "../components/UI";
import { clientTypes, engagements, expertise, photos, services, site } from "../data/site";

export default function Consultancy() {
  return (
    <>
      <PageHeader
        eyebrow="Consultancy"
        title={
          <>
            From concept to <em className="font-normal">counter</em>.
          </>
        }
        lead="Whether you are opening your first café or fixing a bakery that isn’t performing, we work alongside you at every stage."
      >
        <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2">
          {expertise.map((item) => (
            <span key={item} className="eyebrow border border-line px-4 py-2 text-muted">
              {item}
            </span>
          ))}
        </div>
        <div className="mt-10">
          <Photo
            src={photos.kitchen}
            alt="Open kitchen planned for easy movement during service"
            ratio="aspect-[16/9]"
          />
        </div>
      </PageHeader>

      {/* Services */}
      <Section className="pt-6">
        <Eyebrow>What we do</Eyebrow>
        <Title className="mt-2">Services</Title>

        <div className="mt-10 border-t border-line">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="grid items-baseline gap-2 border-b border-line py-7 md:grid-cols-12 md:gap-8"
            >
              <span className="font-serif text-2xl text-brown md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-xl text-olive md:col-span-4 md:text-2xl">
                {service.title}
              </h3>
              <p className="leading-7 text-muted md:col-span-7">{service.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Who we work with */}
      <section className="w-full border-y border-line bg-panel px-5 py-14 md:px-10">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Who we work with</Eyebrow>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
            {clientTypes.map((type, i) => (
              <span key={type} className="font-serif text-xl text-olive md:text-2xl">
                {type}
                {i < clientTypes.length - 1 && <span className="ml-5 text-brown">·</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement types */}
      <Section>
        <Eyebrow>How we can work together</Eyebrow>
        <Title className="mt-2">Three ways to start</Title>

        <div className="mt-10 grid border-y border-line md:grid-cols-3">
          {engagements.map((e, i) => (
            <div
              key={e.title}
              className={`border-line py-8 md:px-8 ${
                i < engagements.length - 1 ? "border-b md:border-b-0 md:border-r" : ""
              } ${i === 0 ? "md:pl-0" : ""}`}
            >
              <Eyebrow>{e.time}</Eyebrow>
              <h3 className="mt-2 font-serif text-2xl text-olive">{e.title}</h3>
              <p className="mt-3 leading-7 text-muted">{e.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <ClosingCTA
        email={site.email}
        title="Ready to plan your kitchen?"
        text="Tell us about your space, your menu idea or what is not working."
        buttonLabel="Book a Consultation"
      />
    </>
  );
}
