# dress.code.latte: landing page

A small static website (no build step, no dependencies, no cookies, no tracking).

## Structure

```
.
├── index.html              Page content
├── assets/
│   ├── css/styles.css      All styles (design tokens at the top)
│   ├── js/main.js          "Copy email" button (no dependencies)
│   └── img/
│       └── favicon.svg         Browser tab icon
├── .editorconfig
├── .gitignore
└── README.md
```

## Contact details

Email and LinkedIn are set in `index.html` (search for `mailto:` and `linkedin.com`).
Update them there if they change. The "Copy email" buttons read the address from their `data-copy` attribute, so change it there too.

## Preview locally

Open `index.html` in a browser, or run a tiny local server:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Change the look

Colors, fonts and spacing live in the `:root` block at the top of `assets/css/styles.css`.
Dark mode colors are in the `prefers-color-scheme: dark` block right below it.
The page currently has no images. If you add one, put it in `assets/img/` and give it a descriptive `alt` text.

## Publish

Any static host works. Common options:

- **GitHub Pages:** push to GitHub, then Settings, Pages, deploy from the `main` branch.
- **Netlify or Cloudflare Pages:** connect the repository; no build command, publish directory `/`.
- **Your own hosting:** upload the whole folder to the domain's web root.

## Git

```sh
git init
git add .
git commit -m "Add landing page"
git branch -M main
git remote add origin <your-repository-url>
git push -u origin main
```
