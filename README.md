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

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Routing-Demo
This is a simple routing demo using Next.js. It includes the following routes:
- `/`: The home page.
- `/about`: The about page.
- `/profile`: The profile page.

## Nested Routes
This demo also includes nested routes:
- `/blogs/first`: The first blog.
- `/blogs/second`: The second blog.

## Dynamic Routes
This demo also includes dynamic routes:
- `/products/[productId]`: 
- `/products/1`: The product with id 1.
- `/products/2`: The product with id 2.
- `/products/3`: The product with id 3.
- `/products/100`: The product with id 100 and so on.

## Nested Dynamic Routes
This demo also includes nested dynamic routes:
- `/products/[productsId]/reviews/[reviewsId]`:
- `/products/3/reviews/10`: Review 10 for product 3.
- `/products/3/reviews/20`: Review 20 for product 3.
- `/products/1/reviews/8`: Review 8 for product 1.

## Catch-All-Segments
This demo also includes catch-all segments:
- `/docs/[...slug]`:
- `/docs/nextjs`: The nextjs documentation.
- `/docs/nextjs/getting-started`: The getting started documentation for nextjs.
- `/docs/nextjs/advanced-features`: The advanced features documentation for nextjs.


