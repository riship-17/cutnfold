import {
  Button,
  ClosingCTA,
  Eyebrow,
  PageHeader,
  Photo,
  Section,
  Title,
} from "../components/UI";
import { orderSteps, photos, products, site, supplyReasons } from "../data/site";

export default function Supply() {
  return (
    <>
      <PageHeader
        eyebrow="B2B Bakery Supply"
        title={
          <>
            Bakes your guests will <em className="font-normal">remember</em>.
          </>
        }
        lead={`We supply cafés, restaurants, hotels, caterers and cloud kitchens with fresh, consistent bakery products, made with the same standards we teach. Delivery across ${site.deliveryAreas}.`}
      >
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Button to="/contact">Request a Sample Box</Button>
          <a
            href={`mailto:${site.email}?subject=Product%20list%20request`}
            className="eyebrow border-b border-olive pb-1 text-olive hover:text-brown"
          >
            Ask for the product list →
          </a>
        </div>
        <div className="mt-10">
          <Photo
            src={photos.supply}
            alt="Trays of fresh bread ready for the morning delivery"
            ratio="aspect-[16/9]"
          />
        </div>
      </PageHeader>

      {/* Product range */}
      <Section className="pt-6">
        <Eyebrow>What we bake</Eyebrow>
        <Title className="mt-2">Our range</Title>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {products.map((group) => (
            <div key={group.group} className="border border-line bg-cream p-6 md:p-8">
              <div className="flex items-baseline justify-between border-b border-line pb-3">
                <h3 className="font-serif text-2xl text-olive">{group.group}</h3>
                <span className="eyebrow text-brown">{group.note}</span>
              </div>
              <ul className="mt-5 flex flex-col gap-4">
                {group.items.map((item) => (
                  <li key={item.name} className="border-b border-line/60 pb-3 last:border-0">
                    <p className="font-serif text-lg text-ink">{item.name}</p>
                    <p className="mt-0.5 text-sm text-muted">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted">
          Need something that is not on this list? We develop custom items for your menu.
        </p>
      </Section>

      {/* Why partner with us */}
      <section className="w-full border-y border-line bg-panel px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Photo
              src={photos.baker}
              alt="Baker checking loaves coming out of the oven"
              ratio="aspect-[4/5]"
            />
          </div>
          <div className="md:col-span-7">
            <Eyebrow>Why partner with us</Eyebrow>
            <Title className="mt-2">Same quality, every single day.</Title>
            <div className="mt-8 border-t border-line">
              {supplyReasons.map((r, i) => (
                <div key={r.title} className="border-b border-line py-6">
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-xl text-brown">0{i + 1}</span>
                    <div>
                      <h3 className="font-serif text-xl text-olive">{r.title}</h3>
                      <p className="mt-2 leading-7 text-muted">{r.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How ordering works */}
      <Section>
        <Eyebrow>How ordering works</Eyebrow>
        <Title className="mt-2">Four simple steps</Title>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {orderSteps.map((step, i) => (
            <div key={step.title} className="border border-line bg-cream p-6">
              <div className="flex h-10 w-10 items-center justify-center border border-line font-serif text-xl text-brown">
                {i + 1}
              </div>
              <h3 className="mt-5 font-serif text-xl text-olive">{step.title}</h3>
              <p className="mt-2 leading-7 text-muted">{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <ClosingCTA
        email={site.email}
        title="Want to taste before you decide?"
        text="Ask for a sample box for your kitchen."
        buttonLabel="Request a Sample Box"
      />
    </>
  );
}
