# prashantghimire.dev

Personal portfolio site built with [Hugo](https://gohugo.io), deployed on Netlify.

Uses the [grain-resume](https://github.com/ghimireaacs/grain-resume) theme — a separate repo linked here as a git submodule.

---

## Two-repo structure

| Repo | What it is |
|---|---|
| `prashantghimire-hugo` (this) | Site content — data files, config, Netlify config |
| `grain-resume` | The Hugo theme — templates, CSS, JS |

**Why submodule and not Hugo modules?**
Hugo modules require Go installed in the build environment and add `go.mod` complexity. For a single theme used on one site, a git submodule is simpler — Netlify supports it natively with one env variable.

---

## Local setup

Requires [Hugo](https://gohugo.io/installation/) (extended edition recommended).

**First clone:**
```bash
git clone --recurse-submodules https://github.com/ghimireaacs/prashantghimire-hugo
cd prashantghimire-hugo
```

If you already cloned without `--recurse-submodules`:
```bash
git submodule update --init
```

**Run dev server:**
```bash
hugo server
# open http://localhost:1313
```

**Build for production:**
```bash
hugo
# output in public/
```

---

## Updating content

All content lives in `data/` and `hugo.toml` — no need to touch the theme.

| File | What to edit |
|---|---|
| `hugo.toml` | Name, role, bio, email, LinkedIn, GitHub, avatar |
| `data/skills_support.yaml` | IT support skills tab |
| `data/skills_homelab.yaml` | Homelab skills tab |
| `data/experience.yaml` | Work history entries |
| `data/certifications.yaml` | Certs and education |
| `data/projects.yaml` | Project cards |

### Adding a profile photo

1. Drop the image in `static/img/photo.jpg`
2. In `hugo.toml`, uncomment and set:
   ```toml
   avatar = "/img/photo.jpg"
   ```
   If `avatar` is not set, the site shows your initials instead.

---

## Updating the theme

The theme is pinned to a specific commit. To pull in theme changes:

```bash
git submodule update --remote themes/grain-resume
git add themes/grain-resume
git commit -m "update theme"
```

---

## Netlify deployment

**First deploy:**

1. Push this repo to GitHub
2. In Netlify: **Add new site → Import an existing project** → connect the repo
3. Build settings are auto-detected from `netlify.toml` (see below)
4. Set one environment variable in Netlify dashboard:
   - Key: `GIT_SUBMODULE_STRATEGY`
   - Value: `recursive`

This tells Netlify to pull the theme submodule during build.

**`netlify.toml`** (create this at the repo root):
```toml
[build]
  command = "hugo"
  publish = "public"

[build.environment]
  HUGO_VERSION = "0.154.5"
```

Deploys automatically on every push to `main`.

---

## Project structure

```
prashantghimire-hugo/
├── hugo.toml              # site config and all personal params
├── netlify.toml           # build config for Netlify
├── content/
│   └── _index.md          # empty — required by Hugo for homepage
├── data/
│   ├── skills_support.yaml
│   ├── skills_homelab.yaml
│   ├── experience.yaml
│   ├── certifications.yaml
│   └── projects.yaml
├── static/
│   └── img/               # drop avatar here if using photo
└── themes/
    └── grain-resume/      # git submodule — do not edit directly
```
