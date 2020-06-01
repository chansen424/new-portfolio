import Head from 'next/head'
import Intro from '../components/intro'
import CardList from '../components/cardList'
import Button from '../components/button'
import UnderlinedLink from '../components/underlinedLink'

export default function Home() {
  const experience = [
    {
      image: "form3b.png",
      employer: "Formlabs",
      role: "Full Stack Web Intern",
      description: "Formlabs Stuff"
    },
    {
      image: "carriage.png",
      employer: "Cornell DTI",
      role: "Technical Product Manager",
      description: "TPM Stuff"
    },
    {
      image: "carriage.png",
      employer: "Cornell DTI",
      role: "Flutter Developer",
      description: "Flutter Stuff"
    },
    {
      image: "startuptree.png",
      employer: "StartupTree",
      role: "Full Stack Web Intern",
      description: "StartupTree Stuff"
    }
  ]

  return (
    <div className="container">
      <Head>
        <title>Chris Who Codes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Intro>Develop Better Software.</Intro>

        <Button href="mailto:cph64@cornell.edu">Contact Me</Button>

        <CardList cards={experience} />

        <h2 className="section-header">Coursework</h2>
        <ul>
          <li><UnderlinedLink>Intro to Computer Vision</UnderlinedLink> - CS 4670</li>
          <li><UnderlinedLink>Systems Organization & Programming</UnderlinedLink> - CS 3410</li>
          <li><UnderlinedLink>Functional Programming</UnderlinedLink> - CS 3110</li>
          <li><UnderlinedLink>Discrete Structures</UnderlinedLink> - CS 2800</li>
          <li><UnderlinedLink>Object Oriented Programming</UnderlinedLink> - CS 2110</li>
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
