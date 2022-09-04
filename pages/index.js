import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Aitor Lancharro - FullStack Developer | UX/UI Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Aitor Lancharro</h1>

        <p className="description">
          FullStack <code>Developer</code> | UX/UI Design
        </p>

        <div>
          <div className="card">
            <h3>New Website coming soon!</h3>
            <p> 🚧 🚧 🚧 🚧 </p>
          </div>
        </div>
        <div className="social">
          <div>
            <a href="https://github.com/Alanch8">
              <img src="/github-icon.svg"></img>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/aitorlancharrohurtado/">
              <img src="/linkedin-icon.svg"></img>
            </a>
          </div>
          <div>
            <a href="https://twitter.com/alanch_8">
              <img src="/twitter-icon.svg"></img>
            </a>
          </div>
        </div>
      </main>

      <footer>
        <p>© 2022 Aitor Lancharro. Code with ☕️</p>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #ffd700;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #ffd700;
          border-color: #ffd700;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.3rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
          text-align: center;
        }

        .logo {
          height: 1em;
        }

        .social {
          width: 110px;
          display: flex;
          justify-content: space-between;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
