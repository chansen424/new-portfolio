import styles from "./CenterLeft.module.css";

export default function CenterLeft({ children }) {
  return (
    <>
      <div className={styles.center}>
        <div className={styles.left}>
          {children}
        </div>
      </div>
    </>
  )
}