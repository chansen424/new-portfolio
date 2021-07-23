import { getAllPosts } from '../../lib/api'
import Link from 'next/link'
import classnames from 'classnames'

import styles from '../../styles/Blog.module.css'

export default function Blog({allPostsData}) {
    return (
        <div>
            <h1 style={{textAlign: "center", fontSize:"2.5rem"}}>Blog</h1>
            <div style={{maxWidth: "900px", padding: "0 1rem"}}>
                {allPostsData.map((post) => {
                    return (
                        <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
                            <a className={styles.no_decoration}>
                                <div className={styles.card}>
                                    <h1 className={styles.primary}>{post.title}</h1>
                                    <h2 className={styles.secondary}>{post.date}</h2>
                                </div>
                            </a>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}


export async function getStaticProps() {
    const allPostsData = getAllPosts([
        'title',
        'date',
        'slug'
    ])
    return {
      props: {
        allPostsData
      }
    }
  }
  