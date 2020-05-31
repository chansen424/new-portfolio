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

        <h2 className="full-name">Christopher Hansen.</h2>

        <h3 className="tagline">Develop better software.</h3>

        <p className="description">
          I'm a CS student at Cornell University. I'm the Technical Product Manager
          for <a className="underline-link" href="https://cornelldti.org">Cornell Design & Tech Initiative's</a> campus-wide
          paratransit solution, Carriage.
          Currently interning at Formlabs.
        </p>

        <div className="contact-container">
          <a className="contact" href="mailto:cph64@cornell.edu">Contact Me</a>
        </div>

        <h2 className="section-header">Experience</h2>
        <ul>
          <li><span className="underline-link">Full Stack Web Intern</span> - Formlabs</li>
          <li><span className="underline-link">Technical Product Manager</span> - Cornell DTI</li>
          <li><span className="underline-link">Flutter Developer</span> - Cornell DTI</li>
          <li><span className="underline-link">Full Stack Web Intern</span> - StartupTree</li>
        </ul>

        <h2 className="section-header">Coursework</h2>
        <ul>
          <li><span>Intro to Computer Vision</span> - CS 4670</li>
          <li><span>Systems Organization & Programming</span> - CS 3410</li>
          <li><span>Functional Programming</span> - CS 3110</li>
          <li><span>Discrete Structures</span> - CS 2800</li>
          <li><span>Object Oriented Programming</span> - CS 2110</li>
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
          padding: 2rem 0;
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

        .underline-link {
          position: relative;
        }

        .underline-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 0.125rem;
          background: #662E9B;

          transform: scaleX(0);
          transform-origin: right;
          transition: transform 250ms ease-in;
        }

        .underline-link:hover::after {
          transform: scaleX(1);
          transform-origin: left;
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
          font-size: 1.25rem;
        }

        .contact-container {
          margin: 1rem 0rem;
        }

        .contact {
          padding: 0.85em 1.15em;
          border-radius: 3px;
          background: #662E9B;
          color: #FFF;
        }

        .section-header {
          font-size:1.5rem;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        li {
          margin: 0rem 0rem 1rem;
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

        span {
          color: #662E9B;
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
