# DEVELOPER GUIDELINES
Before getting started with development, please read through everything!

## Folder Structure
### Pages
Every component file in `src/pages` maps to a URL
E.g. src/aboutus.tsx -> https://hackdavis.io/aboutus
### Components
Components will all be located in `/src/components`
### Stylesheets 
Stylesheets will be located in `/src/styles`

## Naming Conventions
### Files
camelCase.tsx || camelCase.module.scss
### SCSS Classes
camelCase only.
### Variables
camelCase only.
### Images
camelCase.svg || camelCase.png

## Git
### Branches
Branch names should be in the following format: `group[1|2]-feature`
### Pull Requests
Post your PRs to the `technical-work` channel on Slack and try to get at least 2 code reviews before merging the code.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

If you don't have `yarn`:

```bash
npm install --global yarn
```

```bash
Install packages: yarn add
Run the dev server: yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
