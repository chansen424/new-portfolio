import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Chris Who Codes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="intro">Hi, my name is</h1>

        <h2 className="full-name">Chris Hansen.</h2>

        <h3 className="tagline">Develop better software.</h3>

        <p className="description">
          I'm a CS student at Cornell University. I'm the Technical Product Manager
          for <a href="https://cornelldti.org">Cornell Design & Tech Initiative's</a> campus-wide
          paratransit solution, Carriage.
          Currently interning at Formlabs.
        </p>

        <div className="contact-container">
          <a className="contact" href="mailto:cph64@cornell.edu">Contact Me</a>
        </div>

        <h2 className="section-header">Experience</h2>
        <ul>
          <li>Full Stack Web Intern - Formlabs</li>
          <li>Technical Product Manager - Cornell DTI</li>
          <li>Flutter Developer - Cornell DTI</li>
          <li>Full Stack Web Intern - StartupTree</li>
        </ul>

        <h2 className="section-header">Coursework</h2>
        <ul>
          <li>CS 4670</li>
          <li>CS 3410</li>
          <li>CS 3110</li>
          <li>CS 2800</li>
          <li>CS 2110</li>
        </ul>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
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
          color: #662E9B;
          text-decoration: none;
        }

        .title a {
          color: #662E9B;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .intro {
          font-size: 1.5rem;
          color: #662E9B;
        }

        .full-name {
          margin: 0;
          line-height: 1.15;
          font-size: 2.5rem;
        }

        .tagline {
          margin: 0;
          line-height: 1.15;
          font-size: 2.5rem;
          color: grey;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .contact-container {
          margin: 1rem 0rem;
        }

        .contact {
          padding: 1.25rem 1.75rem;
          border: 1px solid #662E9B;
          border-radius: 3px;
        }

        .section-header {
          font-size:1.5rem;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .logo {
          height: 1em;
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
  )
}
