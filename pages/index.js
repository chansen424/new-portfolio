import Head from 'next/head'
import CardList from '../components/cardList'
import Button from '../components/button'

export default function Home() {
  const experience = [
    {
      image: "form3b.png",
      employer: "Formlabs",
      role: "Full Stack Web Developer Intern",
      description: ""
    },
    {
      image: "form3b.png",
      employer: "Cornell DTI",
      role: "Technical Product Manager",
      description: ""
    },
    {
      image: "form3b.png",
      employer: "Cornell DTI",
      role: "Flutter Developer",
      description: ""
    },
    {
      image: "form3b.png",
      employer: "StartupTree",
      role: "Full Stack Web Developer Intern",
      description: ""
    }
  ]

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

        <Button href="mailto:cph64@cornell.edu" label="Contact Me" />

        <CardList cards={experience} />

        <h2 className="section-header">Experience</h2>
        <ul>
          <li><a className="underline-link">Full Stack Web Intern</a> - Formlabs</li>
          <li><a className="underline-link">Technical Product Manager</a> - Cornell DTI</li>
          <li><a className="underline-link">Flutter Developer</a> - Cornell DTI</li>
          <li><a className="underline-link">Full Stack Web Intern</a> - StartupTree</li>
        </ul>

        <h2 className="section-header">Coursework</h2>
        <ul>
          <li><a className="underline-link">Intro to Computer Vision</a> - CS 4670</li>
          <li><a className="underline-link">Systems Organization & Programming</a> - CS 3410</li>
          <li><a className="underline-link">Functional Programming</a> - CS 3110</li>
          <li><a className="underline-link">Discrete Structures</a> - CS 2800</li>
          <li><a className="underline-link">Object Oriented Programming</a> - CS 2110</li>
        </ul>
      </main>

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

        .underline-link {
          color: #662E9B;
          position: relative;
          cursor: pointer;
          text-decoration: none;
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
            background: #EEF2F7;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
