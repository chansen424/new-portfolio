import Card from './card'

export default function CardList({ cards }) {
  return (
    <>
      {
        cards.map((card) => <Card image={card.image}
          employer={card.employer}
          role={card.role}
          description={card.description} />)
      }
    </>
  )
}