import styles from "./Card.module.css";

export default function Card({ image, employer, role, description }) {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.card__image}>
            <img src={image}></img>
          </div>
          <div className={styles.card__employer}>{employer}</div>
          <div className={styles.card__role}>{role}</div>
          <div className={styles.card__description}>{description}</div>
          <div className={styles.card__stats}>
          </div>
        </div>
      </div>
    </>
  )
}