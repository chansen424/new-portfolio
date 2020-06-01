export default function Button({ href, label }) {
  return (
    <>
      <div className="contact-container">
        <a className="contact" href={href}>{label}</a>
      </div>

      <style jsx>{
        `.contact-container {
          margin: 1rem 0rem;
        }

        .contact {
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