This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## CI/CD and deployment

The GitHub Actions workflow in `.github/workflows/ci-cd.yml` runs linting and a
TypeScript check for pull requests and pushes to `main`. It also builds and
verifies the static export. Successful `main` builds are deployed to GitHub
Pages.

Before the first deployment, open the repository's **Settings → Pages** and set
**Source** to **GitHub Actions**.

The site uses an empty `PAGES_BASE_PATH` during local development. GitHub's
`configure-pages` action supplies the correct repository base path during a
deployment build.

Run the same core checks locally with:

```bash
npm ci
npm run check
PAGES_BASE_PATH=/portfolio npm run build
PAGES_BASE_PATH=/portfolio npm run verify:export
```

Replace `/portfolio` if the GitHub repository has a different name. To run the
development server on another port, use `npm run dev -- -p 3001`; a port does
not belong in `PAGES_BASE_PATH`.
