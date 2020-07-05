import moment from "moment";
import posts from "../../posts.json";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

function Post({ post, date }) {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div className="c-post">
        <h2>{post.title}</h2>
        <p>
          <small>
            <strong>Published on {date}</strong>
          </small>
        </p>
        <p>{post.content}</p>
        <p>
          <Link href="/blog">
            <a>
              <strong>← Blog index</strong>
            </a>
          </Link>
        </p>
        <style jsx>{`
          .c-post {
            max-width: 80ch;
          }

          .c-post p:last-child {
            margin-top: 3rem;
          }

          .c-post p:last-child a {
            border: 1px solid currentColor;
            padding: 0.2em 0.6em;
            border-radius: 2px;
            transition: all 200ms ease;
          }

          .c-post p:last-child a:hover {
            background-color: hsla(210, 40%, 95%, 1);
          }

          h2 {
            font-size: 62px;
            letter-spacing: -0.04em;
            margin-bottom: -1rem;
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

Post.getInitialProps = async ({ query }) => {
  const moment = (await import("moment")).default();
  return {
    date: moment.format("dddd D MMMM YYYY"),
    post: posts[query.id],
  };
};

export default Post;
