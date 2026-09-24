import { Link } from "react-router-dom";
import { nav, site } from "../data/site";

export default function Footer() {
  return (
    <footer className="w-full border-t border-line bg-panel px-5 pt-16 pb-10 md:px-10">
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-serif text-2xl text-olive">{site.name}</p>
          <p className="eyebrow mt-2 text-brown">{site.tagline}</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
            We help food businesses plan, open and run better — and we bake breads, cakes
            and everyday counter items for cafés, hotels and restaurants across India.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-olive">Pages</p>
          <ul className="mt-4 flex flex-col gap-2.5">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm text-muted hover:text-olive">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow text-olive">Get in touch</p>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-muted">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-olive">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.whatsapp} className="hover:text-olive">
                {site.phone} (call / WhatsApp)
              </a>
            </li>
            <li>{site.address}</li>
            <li>
              <a href={site.instagram} className="hover:text-olive">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-6xl flex-col gap-2 border-t border-line pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
        <span>
          © {site.year} {site.name}. All rights reserved.
        </span>
        <span>Based in {site.city} · Working pan India</span>
      </div>
    </footer>
  );
}
