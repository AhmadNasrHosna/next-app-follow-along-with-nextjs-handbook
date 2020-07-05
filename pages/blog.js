import posts from "../posts.json";
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";

function Blog() {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <ul>
        {Object.entries(posts).map((value, index) => {
          return (
            <li key={index}>
              <Link href="/blog/[id]" as={"/blog/" + value[0]}>
                <a>{value[1].title}</a>
              </Link>
            </li>
          );
        })}

        <style jsx>{`
          ul {
            list-style-type: square;
          }

          li {
            font-size: 20px;
            line-height: 1.75;
            font-weight: 700;
            margin: 0;
            padding: 0;
          }
        `}</style>
      </ul>
    </Layout>
  );
}

export default Blog;
