import { PrismicDocument } from '@prismicio/types';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { createClient } from '../../services/prismic';
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
          {postsArray.map(post => {
            return (<a href='#' key={post.slug}>
              <time>{post.updatedAt}</time>
              <strong>{post.title}</strong>
              <p>{post.excerpt}</p>
            </a>)
          }) } 
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
    const formatedDate = new Date(
      post.last_publication_date
      ).toLocaleDateString(
        'pt-BR',
        {
          dateStyle: 'long',
          timeZone: 'America/Recife'
        }
      );

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