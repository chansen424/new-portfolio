import Card from './card'

export default function CardList({ cards }) {
  return (
    <>
      <div className="card-list">
        {
          cards.map((card) => <Card image={card.image}
            employer={card.employer}
            role={card.role}
            description={card.description} />)
        }
      </div>

      <style jsx>
        {`

        .card-list {
          display: flex;
          flex-direction: column;
        }

        @media only screen and (min-width: 900px) {
          .card-list {
            flex-flow: row wrap;
            justify-content: center;
            padding: 0rem 4rem;
          }
        }

        @media only screen and (min-width: 1000px) {
          .card-list {
            flex-flow: row wrap;
            justify-content: center;
            padding: 0rem 8rem;
          }
        }
      `}
      </style>
    </>
  )
}