import Head from 'next/head'
import Intro from '../components/Intro'
import CardList from '../components/CardList'
import Button from '../components/Button'
import UnderlinedLink from '../components/UnderlinedLink'
import CenterLeft from '../components/CenterLeft'

export default function Home() {
  const experience = [
    {
      image: "carriage.png",
      employer: "Cornell DTI",
      role: "Developer Lead",
      description: ""
    },
    {
      image: "form3b.png",
      employer: "Formlabs",
      role: "Full Stack Web Intern",
      description: "Implementing Formlabs.com new features and fixing bugs. GraphQL, React, and Python."
    },
    {
      image: "carriage.png",
      employer: "Cornell DTI",
      role: "Technical Product Manager",
      description: "Lead team of devs creating 2 apps and a website. DynamoDB, Express, Flutter, React, TS."
    },
    {
      image: "carriage.png",
      employer: "Cornell DTI",
      role: "Flutter Developer",
      description: "Developed app to assist Cornell's CULift drivers with scheduling and navigation."
    },
    {
      image: "StartupTree.png",
      employer: "StartupTree",
      role: "Full Stack Web Intern",
      description: "Team Mentorship and Roadmap to Entrepreneurship features. Refactored Mentorship."
    }
  ]

  return (
    <div key="main" className="container">
      <Head>
        <title>Chris Who Codes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CenterLeft>
          <Intro>Software Engineer.</Intro>
        </CenterLeft>

        <CenterLeft>
          <Button href="mailto:cph64@cornell.edu">Contact Me</Button>
          <Button href="https://github.com/chansen424">Check Out My Projects</Button>
        </CenterLeft>

        <CardList cards={experience} />
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
          flex: 1;
          display: flex;
          flex-direction: column;
          text-align: center;
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
