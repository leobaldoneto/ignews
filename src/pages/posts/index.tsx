import { PrismicDocument } from '@prismicio/types';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { createClient } from '../../services/prismic';
import styles from './styles.module.scss'

export default function posts({ postsArray }) {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {postsArray.map((post) => {
            return (<a href='#' key={post.id}>
              <time>{post.first_publication_date}</time>
              <strong>{post.title}</strong>
              <p>{post.content}</p>
            </a>)
          })
          } 
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

  const postsArray = response.map((post) => {
    const formatedDate = new Date(
      post.first_publication_date
      ).toLocaleDateString(
        'pt-BR',
        {
          dateStyle: 'long',
          timeZone: 'America/Recife'
        }
      );
    const contentSummary = post.data.content.slice(0, 300).concat('...');
    return {
      id: post.id,
      first_publication_date: formatedDate,
      title: post.data.title,
      content: contentSummary
    }
  });

  return {
    props: { postsArray }   
  }
}