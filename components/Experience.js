import styles from "./Experience.module.css";

export default function Experience({ employer, role, description, image }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={image} width={40} height={40} />
        <h2 className={styles.role}>{role}</h2>
      </div>
      <div className={styles.line}></div>
      <h3 className={styles.employer}>{employer}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
