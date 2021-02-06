export default function Action({ children, href }) {
  return (
    <>
      <a className="action" href={href} target="_blank">{children}</a>

      <style jsx>{
        `
        .action {
          margin: 1rem 0.5rem;
          padding: 0.85em 1.15em;
          border-radius: 3px;
          background: #662E9B;
          color: #FFF;
          text-decoration: none;
        }
    `}
      </style>
    </>
  )
}