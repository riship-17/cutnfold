# Cut N Fold — website

A React site for Cut N Fold: food, café and bakery consultancy, and B2B bakery supply.
Based in New Delhi, working pan India.

Built with React 19, Vite and Tailwind CSS v4. React Router handles the pages.

## Run it

```bash
npm install     # first time only
npm run dev     # local site at http://localhost:5173
npm run build   # production build into dist/
npm run preview # check the production build
```

## Where the content lives

Almost all text sits in **`src/data/site.js`** — contact details, page copy, the
product list, services, projects and the numbers row. Edit that one file and the
whole site updates. You do not need to touch the page files for normal changes.

Pages are in `src/pages`, shared pieces (header, footer, buttons, photos) in
`src/components`, and colours and fonts in `src/index.css`.

## Before the site goes live — fill these in

Search the project for `TODO` and `XX`. The open items are:

| Where | What to fill |
| --- | --- |
| `site.phone`, `site.whatsapp` | Real phone and WhatsApp link |
| `site.instagram` | Instagram profile link |
| `founder` | The short bio under the "Founder" heading. No name and no photo go on this site |
| `projects` | Only needed when the Our Work page is switched back on — see below |
| `products` | Check the list matches what you actually bake, and add minimum order if you have one |
| `services` | Confirm what you can help with on FSSAI and licences |

## Two content rules from the owner

1. **No photo of the owner or founder** anywhere on the site. The About page's founder
   section is text only.
2. **Do not name the restaurants, hotels or cafés he has worked with** — not in his
   background on the About page, not on the Work page, and not in testimonials. Describe
   each one by type and area instead, for example "Café and bakery — South Delhi".

## The Our Work page is switched off

The "Our Work" link is out of the navigation and `/work` redirects to the home page. The
page itself still exists at `src/pages/Work.jsx` with its sample projects in `projects`.
To bring it back: add `{ to: "/work", label: "Our Work" }` to `nav` in `src/data/site.js`,
and restore the real route in `src/App.jsx` (the commented line shows where).

## Photos

Photos are set in the `photos` object in `src/data/site.js`. Right now they point to
sample images. Replace each link with your own photo — put your files in `public/images/`
and use a path like `/images/hero.jpg`. If a photo fails to load, the site shows a quiet
grey box instead of a broken image.

## The contact form

There is no server yet, so the form opens the visitor's email app with all the details
filled in and sends it to `cutnfold0305@gmail.com`. To have enquiries arrive
automatically instead, connect a form service (Formspree, Getform) in
`src/pages/Contact.jsx` — the place to change is marked with a comment.

## Putting it online

`npm run build` makes a `dist/` folder you can upload to Netlify, Vercel or Hostinger.
Because the site uses clean URLs (`/about`, `/supply`), the host must send all paths to
`index.html`. `public/_redirects` already does this for Netlify; on Vercel it works by
default; on plain Apache hosting add an `.htaccess` rewrite.
