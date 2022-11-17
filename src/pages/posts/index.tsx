import { PrismicDocument } from '@prismicio/types';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { createClient } from '../../services/prismic';
import formateDate from '../../utils/formateDate';
import styles from './styles.module.scss'

interface Posts {
  slug: string,
  title: string,
  updatedAt: string,
  excerpt: string
}
interface PostProps {
  postsArray: Posts[]
}

export default function posts({ postsArray }: PostProps) {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {postsArray.map(post => (
            <Link href={`/posts/${post.slug}`} key={post.slug}>
            <time>{post.updatedAt}</time>
            <strong>{post.title}</strong>
            <p>{post.excerpt}</p>
            </Link>)
          )} 
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = createClient();

  const response = await prismic.getAllByType('posts', {
    fetch: ['post.title', 'post.content'],
    pageSize: 100,
  });

  const postsArray = response.map(post => {
    const formatedDate = formateDate(post.last_publication_date);

    const contentExcerpt = post.data.content.slice(0, 300).concat('...');

    return {
      slug: post.uid,
      updatedAt: formatedDate,
      title: post.data.title,
      excerpt: contentExcerpt
    }
  });

  return {
    props: { postsArray }   
  }
}