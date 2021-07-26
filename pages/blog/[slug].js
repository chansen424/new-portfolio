import { getPostBySlug, getAllPosts } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";

import styles from "../../styles/Blog.module.css";

export default function Post({ post }) {
  return (
    <div>
      <h1 className={styles.primary} style={{ textAlign: "center" }}>
        {post.title}
      </h1>
      <h2 className={styles.secondary} style={{ textAlign: "center" }}>
        {post.date}
      </h2>
      <div
        style={{ margin: "auto", maxWidth: "900px", padding: "0 2rem" }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);

  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
