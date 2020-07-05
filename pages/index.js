import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Just a Next.js App!</title>
      </Head>
      <h2>Just a Next.js App!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatibus consequatur porro quos voluptas vel!
      </p>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </Layout>
  );
}
