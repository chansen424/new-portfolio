import styles from "./Button.module.css";

export default function Action({ children, href }) {
  return (
    <>
      <a className={styles.action} href={href} target="_blank">{children}</a>
    </>
  )
}