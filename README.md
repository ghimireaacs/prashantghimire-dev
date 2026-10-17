# prashantghimire.dev

Professional portfolio built with HTML, CSS and lightweight JavaScript. No framework, build step, external font requests or trackers.

Deployed on Netlify: each push publishes the repo as-is (see `netlify.toml`).

## Structure

- `index.html`: personal introduction, illustrated projects, capabilities, expandable architecture and toolkit, field notes, experience, education and contact
- `style.css`: design tokens, responsive layouts, illustrations and motion
- `script.js`: motion controls, mobile navigation, section highlighting and entrance animations

## Design

A professional portfolio with a friendly, personal voice. The name and capabilities lead; a short personal note adds curiosity, DIY interests and enthusiasm for technology. Restrained cobalt, a luminous lime accent and technical illustrations keep the visual character without an agency-style presentation. Colors and fonts are defined in `style.css` under `:root`.

Motion respects the visitor's reduced-motion preference and can be paused using the navigation control. Content and links remain available without JavaScript. The architecture, full toolkit and field notes use native HTML disclosures.

## Editing and preview

Keep `index.html`, `style.css` and `script.js` in sync with `../prashantdev/`. Open `index.html` directly or preview locally:

```bash
python3 -m http.server 8080
```

The previous Hugo setup was removed in July 2026. The graphic redesign uses the same static Netlify deployment.
