import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { nav, site } from "../data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const linkClass = ({ isActive }) =>
    `eyebrow pb-1 transition-colors ${
      isActive ? "border-b border-olive text-olive" : "text-muted hover:text-olive"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-cream/95 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-5 md:px-10">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-serif text-2xl text-olive">{site.name}</span>
          <span className="eyebrow mt-1 text-brown">{site.city}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="eyebrow hidden border border-olive px-5 py-2.5 text-olive transition-colors hover:bg-olive hover:text-cream lg:inline-flex"
          >
            Enquire
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-line md:hidden"
          >
            <span className="block h-px w-5 bg-olive" />
            <span className="block h-px w-5 bg-olive" />
            <span className="block h-px w-5 bg-olive" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-cream px-5 py-4 md:hidden">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="eyebrow block border-b border-line py-4 text-muted last:border-0"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
