export default function UnderlinedLink({ children, href }) {
  return (
    <>
      <a className="underlined-link" href={href} target="_blank">{children}</a>

      <style jsx>{
        `.underlined-link {
          color: #662E9B;
          position: relative;
          cursor: pointer;
          text-decoration: none;
        }

        .underlined-link::after {
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

        .underlined-link:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }
    `}
      </style>
    </>
  )
}