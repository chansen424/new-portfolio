import styles from "./UnderlinedLink.module.css";

export default function UnderlinedLink({ children, href }) {
  return (
    <>
      <a className={styles.underlined_link} href={href} target="_blank">{children}</a>
    </>
  )
}