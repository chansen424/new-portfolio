import { getAllPosts } from "../../lib/api";
import Link from "next/link";

import styles from "../../styles/Blog.module.css";
import classnames from "classnames";

export default function Blog({ allPostsData }) {
  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "2.5rem" }}>Blog</h1>
      <div className={styles.line}></div>
      <div className={styles.listings}>
        {allPostsData.map((post) => {
          return (
            <Link
              key={post.slug}
              href={`/blog/${encodeURIComponent(post.slug)}`}
            >
              <a className={classnames(styles.no_decoration, styles.listing)}>
                <div className={styles.card}>
                  <h1 className={styles.primary}>{post.title}</h1>
                  <h2 className={styles.secondary}>{post.date}</h2>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getAllPosts(["title", "date", "slug"]);
  return {
    props: {
      allPostsData,
    },
  };
}
