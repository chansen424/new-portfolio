import UnderlinedLink from './underlinedLink'

export default function Intro({ children }) {
  return (
    <>
      <h1 className="intro">Hi, my name is</h1>

      <h2 className="full-name">Christopher Hansen.</h2>

      <h3 className="tagline">{children}</h3>

      <p className="description">
        I'm a CS student at Cornell University. I'm the Technical Product Manager
        for <UnderlinedLink href="https://cornelldti.org">Cornell Design & Tech Initiative's</UnderlinedLink> campus-wide
        paratransit solution, Carriage.
        Currently interning at Formlabs.
      </p>

      <style jsx>{
        `
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
    `}
      </style>
    </>
  )
}