import posts from "../../posts.json";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

function Post({ post }) {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div className="c-post">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <p>
          <Link href="/blog">
            <a>
              <strong>← Blog index</strong>
            </a>
          </Link>
        </p>
        <style jsx>{`
          h2 {
            font-size: 32px;
            letter-spacing: -0.04em;
            margin-bottom: 1.25rem;
            margin-top: 1.25rem;
          }

          p {
            line-height: 1.75;
            font-size: 17px;
          }
        `}</style>
      </div>
    </Layout>
  );
}

Post.getInitialProps = ({ query }) => {
  return {
    post: posts[query.id],
  };
};

export default Post;
