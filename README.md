# LitSoc — Literary Society of BMSIT

A responsive, newspaper-inspired website for LitSoc. The production-ready static site lives in `dist/`.

## Deploy on Vercel

1. Sign in to [Vercel](https://vercel.com/) with GitHub.
2. Choose **Add New → Project**.
3. Import `ashutoshbhatt2609/litsoc`.
4. Keep **Root Directory** set to the repository root (`./`).
5. The included `vercel.json` automatically sets the framework to **Other** and the output directory to `dist`.
6. Choose **Deploy**.

No build command, install command, or environment variables are required. Future pushes to `main` will deploy automatically after the GitHub repository is connected.

## Local preview

From the repository root, serve `dist/` with any static file server. For example:

```powershell
python -m http.server 4173 --directory dist
```

Then open `http://localhost:4173/`.
