# Jewellers Petlawad Wala

A responsive luxury jewelry storefront built with Next.js App Router, React, TypeScript, and Tailwind CSS. All imagery is served locally from `public/images`.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Routes

- `/` - Homepage
- `/about-us` - Brand heritage and team
- `/gold` - Gold collection
- `/silver` - Silver collection
- `/contact` - Contact details and showroom information
- `/products/royal-kundan-bridal-necklace-set` - Product detail

## Structure

- `src/app` - App Router pages, root layout, and global styles
- `src/components` - Shared header, footer, product, collection, and trust components
- `src/data` - Product content
- `public/images` - Local runtime imagery

The previous standalone Figma script has been removed, and Figma/plugin documentation is excluded from TypeScript compilation.
