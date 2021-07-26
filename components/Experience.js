import styles from "./Experience.module.css";

export default function Experience({ employer, role, description }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.role}>{role}</h2>
      <h3 className={styles.employer}>{employer}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
