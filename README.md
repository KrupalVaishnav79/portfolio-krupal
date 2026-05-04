# Krupal Vaishnav Portfolio

Professional dark-mode portfolio website for Krupal Vaishnav, built with React, Vite, and custom CSS animations.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## GitHub Pages Deployment

This repo includes a GitHub Actions workflow at `.github/workflows/deploy-github-pages.yml`.

1. Push the repository to GitHub.
2. Open repository `Settings > Pages`.
3. Set `Build and deployment > Source` to `GitHub Actions`.
4. Push to `main`; the workflow will build and deploy `dist`.

## Render Deployment

This repo includes `render.yaml` for Render Static Site deployment.

Build command:

```bash
npm ci && npm run build
```

Publish directory:

```bash
dist
```
