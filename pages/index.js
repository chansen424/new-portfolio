import Head from "next/head";
import Link from "next/link";
import CardList from "../components/CardList";
import Intro from "../components/Intro";
import Button from "../components/Button";
import styles from "../styles/Home.module.css";

import classnames from "classnames";

export default function Home() {
  const experience = [
    {
      image: "/carriage.png",
      employer: "Cornell DTI",
      role: "Developer Lead",
      description: "",
    },
    {
      image: "/form3b.png",
      employer: "Formlabs",
      role: "Full Stack Web Intern",
      description:
        "Implementing Formlabs.com new features and fixing bugs. GraphQL, React, and Python.",
    },
    {
      image: "/carriage.png",
      employer: "Cornell DTI",
      role: "Technical Product Manager",
      description:
        "Lead team of devs creating 2 apps and a website. DynamoDB, Express, Flutter, React, TS.",
    },
    {
      image: "/carriage.png",
      employer: "Cornell DTI",
      role: "Flutter Developer",
      description:
        "Developed app to assist Cornell's CULift drivers with scheduling and navigation.",
    },
    {
      image: "/StartupTree.png",
      employer: "StartupTree",
      role: "Full Stack Web Intern",
      description:
        "Team Mentorship and Roadmap to Entrepreneurship features. Refactored Mentorship.",
    },
  ];

  return (
    <div key="main" className={styles.container}>
      <Head>
        <title>Chris Who Codes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={classnames(styles.header, styles.centered)}>
        <Intro>Software Engineer.</Intro>

        <Button href="mailto:cph64@cornell.edu">Contact Me</Button>
        <Button href="https://github.com/chansen424">My Projects</Button>

        <Link href="/blog">
          <a
            style={{ display: "block", margin: "3rem 1rem", color: "#662E9B" }}
          >
            Check Out My Blog
          </a>
        </Link>
      </div>

      <div className={classnames(styles.content, styles.centered)}>
        <CardList cards={experience} />
      </div>

      <div className={classnames(styles.footer, styles.centered)}>
        Last Updated: July 22, 2021
      </div>
    </div>
  );
}
