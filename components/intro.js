import UnderlinedLink from './underlinedLink'

export default function Intro({ children }) {
  return (
    <>
      <div className="padded">
        <h1 className="intro">Hi, my name is</h1>

        <h2 className="full-name">Christopher Hansen.</h2>

        <h3 className="tagline">{children}</h3>

        <p className="description">
          A CS student at Cornell University graduating in December 2021. I'm currently a Developer
        Lead at <UnderlinedLink href="https://cornelldti.org">Cornell Design & Tech Initiative</UnderlinedLink>.
        </p>
      </div>

      <style jsx>{
        `
        .padded {
          padding: 1rem;
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

        @media only screen and (min-width: 600px) {
          .description {
            width: 35rem;
          }
        }
    `}
      </style>
    </>
  )
}
