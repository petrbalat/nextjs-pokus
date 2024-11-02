import { MDXRemote } from 'next-mdx-remote/rsc'

export default async function RemoteMdxPage() {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  const res = await fetch('https://raw.githubusercontent.com/vercel/next.js/refs/heads/canary/packages/next-mdx/readme.md')
  const markdown = await res.text()
  return <MDXRemote source={markdown} />
}
