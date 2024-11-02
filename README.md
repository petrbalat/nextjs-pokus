# Deploy Next.js to Deno

[showcase](https://petrbalat-nextjs-pokus.deno.dev/)

1. Build your app

```bash
deno task build
```

2. Deploy

After installing [`deployctl`](https://github.com/denoland/deployctl):

```bash
deno task build && deployctl deploy --p
```

Learn more about configuring
[`jsr:@deno/nextjs-start`](https://jsr.io/@deno/nextjs-start).

Using Next.js 15? Try the below deploy command, which uses another entrypoint:

```bash
deployctl deploy --project=petrbalat-nextjs-pokus --include=.next --include=public https://raw.githubusercontent.com/arnauorriols/deno-next-start/refs/heads/v15/main.ts
```

## Learn More

To learn more about Next.js and Deno Deploy, take a look at the following
resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Deno Deploy](https://docs.deno.com/deploy/manual/) - Deno Deploy
  documentation.

You can check out
[the Next.js GitHub repository](https://github.com/vercel/next.js) - your
feedback and contributions are welcome!
