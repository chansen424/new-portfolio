export default function Card({ image, employer, role, description }) {
  return (
    <>
      <div className="wrapper">
        <div className="card">
          <div className="card__image">
            <img src={image}></img>
          </div>
          <div className="card__employer">{employer}</div>
          <div className="card__role">{role}</div>
          <div className="card__description">{description}</div>
          <div className="card__stats">

          </div>
        </div>
      </div>

      <style jsx>{`
      .wrapper {
        padding: 3rem 2rem;
        }

        .card {
        background: white;
          width: 18rem;
          display: inline-block;
          margin: auto;
          border-radius: 19px;
          position: relative;
          text-align: center;
          box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
          0 6.7px 5.3px rgba(0, 0, 0, 0.048),
          0 12.5px 10px rgba(0, 0, 0, 0.06),
          0 22.3px 17.9px rgba(0, 0, 0, 0.072),
          0 41.8px 33.4px rgba(0, 0, 0, 0.086),
          0 100px 80px rgba(0, 0, 0, 0.12);
        }

        .card__image {
        position: relative;
          height: 14.375rem;
          margin-bottom: 2rem;
          border-top-left-radius: 19px;
          border-top-right-radius: 19px;
          background: #662E9B;
        }

        .card__image img {
        position: absolute;
          top: -4.15rem;
          left: -4.0rem;
        }

        .card__employer {
        text - transform: uppercase;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .card__role {
        font - weight: 900;
          font-size: 1.25rem;
          margin-bottom: 0.3rem;
        }

        .card__description {
        color: #9E9E9E;
          padding: 1.25rem;
          margin-bottom: 0.6rem;
        }
      `}
      </style>
    </>
  )
}