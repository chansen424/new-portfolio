import UnderlinedLink from './UnderlinedLink';
import styles from "./Intro.module.css";

export default function Intro({ children }) {
  return (
    <>
      <div className={styles.padded}>
        <h1 className={styles.intro}>Hi, my name is</h1>

        <h2 className={styles.full_name}>Christopher Hansen.</h2>

        <h3 className={styles.tagline}>{children}</h3>

        <p className={styles.description}>
          A CS student at Cornell University graduating in December 2021. I&apos;m currently a Developer
        Lead at <UnderlinedLink href="https://cornelldti.org">Cornell Design & Tech Initiative</UnderlinedLink>.
        </p>
      </div>
    </>
  )
}
