import { ClosingCTA, Eyebrow, PageHeader, Photo, Section, Title } from "../components/UI";
import { founder, photos, site, values } from "../data/site";

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title={
          <>
            Nineteen years of flour, fire and <em className="font-normal">hospitality</em>.
          </>
        }
        lead="Cut N Fold began with a simple belief: great food businesses are built, not guessed."
      />

      {/* Story */}
      <Section className="pt-4">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Photo
              src={photos.baker}
              alt="Baker kneading dough early in the morning"
              ratio="aspect-[3/4]"
            />
            <p className="mt-3 text-xs text-muted">
              Our kitchen in {site.city} — where most of our recipes start.
            </p>
          </div>

          <div className="md:col-span-7">
            <Eyebrow>Our story</Eyebrow>
            <Title className="mt-2">Built in real kitchens, not on paper.</Title>
            <div className="mt-6 space-y-5 text-lg leading-8 text-muted">
              <p>
                Our founder has spent more than 19 years across hotel kitchens, bakeries
                and cafés, learning what makes guests return and what quietly sinks a
                business.
              </p>
              <p>
                We started Cut N Fold to share that experience with owners who care about
                doing things properly — people opening their first café, bakers who want
                their bread to be the same every day, and kitchens that need someone
                honest to look at the numbers.
              </p>
              <p>
                We work mostly in and around {site.city}, and we plan for Indian kitchens:
                local suppliers, local teams, Delhi summers and the way our guests
                actually eat.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* The name */}
      <section className="w-full border-y border-line bg-sand/50 px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>The name</Eyebrow>
          <Title className="mt-2">Two simple things, both needed.</Title>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div className="md:pr-10">
              <h3 className="font-serif text-5xl text-olive italic md:text-6xl">Cut.</h3>
              <p className="mt-4 leading-8 text-muted">
                For precision. Costing, planning and systems. Cutting out the extra
                garnish, the wasted steps and the items that never sell.
              </p>
            </div>
            <div className="border-t border-line pt-10 md:border-t-0 md:border-l md:pt-0 md:pl-10">
              <h3 className="font-serif text-5xl text-olive italic md:text-6xl">Fold.</h3>
              <p className="mt-4 leading-8 text-muted">
                For craft. The patient folding of dough, and the patient building of a
                team. Good hospitality needs both.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <Section>
        <Eyebrow>What we believe</Eyebrow>
        <Title className="mt-2">Our values</Title>

        <div className="mt-10 grid border border-line md:grid-cols-2">
          {values.map((v, i) => (
            <div
              key={v.title}
              className={`border-line p-7 md:p-9 ${i % 2 === 0 ? "md:border-r" : ""} ${
                i < values.length - 1 ? "border-b" : ""
              } ${i === values.length - 2 ? "md:border-b-0" : ""}`}
            >
              <Eyebrow>0{i + 1}</Eyebrow>
              <h3 className="mt-2 font-serif text-2xl text-olive">{v.title}</h3>
              <p className="mt-3 leading-7 text-muted">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Founder */}
      <section className="w-full border-t border-line bg-panel px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>Who you will work with</Eyebrow>
          <Title className="mt-2">{founder.name}</Title>
          <p className="eyebrow mt-2 text-muted">{founder.role}</p>
          <div className="mt-6 space-y-4 text-lg leading-8 text-muted">
            {founder.bio.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <blockquote className="mt-8 border-l-2 border-brown bg-cream p-6 font-serif text-xl text-olive italic md:text-2xl">
            “{founder.quote}”
          </blockquote>
        </div>
      </section>

      <ClosingCTA email={site.email} />
    </>
  );
}
