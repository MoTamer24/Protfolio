# Portfolio — Mohamed Tamer Abdo Farh

Personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Motion.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build   # static export into ./out
```

## Content

All copy (profile, skills, experience, projects, certificates) lives in
`src/data/portfolio.ts`. Add an optional `image` to a project or certificate to
show a picture; leave it out and the card simply renders without one.

Images use `src/components/SmartImage.tsx`: the frame is sized by a CSS
`ratio` prop (not by the file's intrinsic dimensions), and nothing is rendered
when the source is missing, a placeholder string, or fails to load.

## Deployment

`.github/workflows/deploy.yml` builds a static export and publishes it to
GitHub Pages on every push to `master` (enable Pages → Source: GitHub Actions).
`NEXT_PUBLIC_BASE_PATH` is set to the repository name so asset URLs resolve
under `https://<user>.github.io/<repo>/`. For a root domain or Vercel, leave
that variable unset.
