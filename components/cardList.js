import Card from "./Card";
import styles from "./CardList.module.css";

export default function CardList({ cards }) {
  return (
    <>
      <div className={styles.card_list}>
        {cards.map((card) => (
          <Card
            key={card.description}
            image={card.image}
            employer={card.employer}
            role={card.role}
            description={card.description}
          />
        ))}
      </div>
    </>
  );
}
