import Link from "next/link";
import Head from "next/head";

function Layout({ children }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
        />
      </Head>
      <div className="o-page">
        <header className="p-header">
          <h1>
            <Link href="/">
              <a>App</a>
            </Link>
          </h1>
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="o-main">{children}</main>
        <footer className="p-footer">
          Copyright © 2020 App. All rights reserved.
        </footer>

        <style jsx global>{`
          body {
            margin: 0;
            font-family: "IBM Plex Sans", system-ui, sans-serif;
            color: #333;
          }

          a {
            color: #0066cc;
          }

          a:hover {
            text-decoration: none;
            color: #0055cc;
          }

          h1 {
            font-size: 38px;
            color: #333;
          }

          .o-page {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }

          .o-main {
            flex: 1;
            padding: 2rem;
          }

          .p-header,
          .p-footer {
            padding: 1rem 2rem;
            background-color: #eee;
          }

          .p-header h1 a {
            color: #333;
            text-decoration: none;
            transition: all 200ms ease;
          }

          .p-header h1 a:hover {
            color: #777;
          }

          nav {
            background-color: #333;
            border-radius: 4px;
            overflow: hidden;
          }

          nav ul {
            list-style: none;
            display: flex;
            padding: 0;
            margin: 0;
          }

          nav ul a {
            display: block;
            padding: 0.58em 1em;
            text-decoration: none;
            font-weight: 500;
            color: #fff;
            transition: all 160ms ease;
          }

          nav ul a:hover {
            background-color: #fff;
            color: #0066cc;
          }

          .p-footer {
            margin-top: auto;
            text-align: center;
          }
        `}</style>
      </div>
    </>
  );
}

export default Layout;
