import { ClosingCTA, Eyebrow, PageHeader, Photo, Section } from "../components/UI";
import { projects, site } from "../data/site";

export default function Work() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title={
          <>
            Kitchens we’ve <em className="font-normal">shaped</em>.
          </>
        }
        lead="A few of the cafés, bakeries and kitchens we have helped plan, open or fix. We keep our clients’ names private, so each one is listed by type and area."
      />

      <Section className="pt-4">
        <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
          {projects.map((p, i) => (
            <article key={`${p.type}-${i}`} className={i % 2 === 1 ? "md:mt-20" : ""}>
              <Photo src={p.photo} alt={`${p.type} in ${p.place}`} />
              <Eyebrow className="mt-6">
                {p.place} · {p.year}
              </Eyebrow>
              <h2 className="mt-2 font-serif text-3xl text-olive">{p.type}</h2>

              <dl className="mt-5 space-y-4">
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <dt className="eyebrow min-w-28 text-muted">What we did</dt>
                  <dd className="leading-7 text-muted">{p.work}</dd>
                </div>
                <div className="flex flex-col gap-1 border-t border-line pt-4 sm:flex-row sm:gap-4">
                  <dt className="eyebrow min-w-28 text-brown">Result</dt>
                  <dd className="font-serif text-lg text-olive italic">{p.result}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </Section>

      <ClosingCTA
        email={site.email}
        title="Have a café or bakery ready to take shape?"
        text="Tell us about your space and what you want to build."
        buttonLabel="Start a Project"
      />
    </>
  );
}
