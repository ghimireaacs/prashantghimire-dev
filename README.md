# prashantghimire.dev

Personal portfolio. Plain HTML and CSS at the repo root — no framework, no build step, no JavaScript, no trackers.

Deployed on Netlify: every push publishes the repo as-is (see `netlify.toml`).

## Structure

- `index.html` — the whole site: hero, lab, network map (inline SVG), field notes, experience, skills, certifications, contact
- `style.css` — design tokens in `:root` (colors, fonts); change tokens, not scattered values

## Editing

Edit the two files directly and push. To preview locally, open `index.html` in a browser or:

```bash
python3 -m http.server 8080
```

The previous Hugo + grain-hugo-theme setup was removed in July 2026; it lives in git history if ever needed.
