export default function Button({ children, href }) {
  return (
    <>
      <a className="btn" href={href}>{children}</a>

      <style jsx>{
        `
        .btn {
          margin: 1rem 1rem;
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