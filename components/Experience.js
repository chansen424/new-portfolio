import styles from "./Experience.module.css";
import Image from "next/image";

export default function Experience({ employer, role, description, image }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image src={image} width={40} height={40} alt={employer} />
        <h2 className={styles.role}>{role}</h2>
      </div>
      <div className={styles.employerContainer}>
        <h3 className={styles.employer}>{employer}</h3>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
