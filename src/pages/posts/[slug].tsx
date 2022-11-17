import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { createClient } from "../../services/prismic";
import formateDate from "../../utils/formateDate";

import styles from './post.module.scss';

interface PostProps {
  post: {
    slug: string,
    title: string,
    updatedAt: string,
    content: string
  }
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{`${post.title} | Ignews`}</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div dangerouslySetInnerHTML={{ __html: post.content }}  className={styles.postContent} />
        </article>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const session = await getSession( { req } );
  
  if (!session?.activeSubscription) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const { slug } = params;

  const prismic = await createClient();

  const response = await prismic.getByUID('posts', String(slug));

  const post = {
    slug,
    title: response.data.title,
    content: response.data.content,
    updatedAt: formateDate(response.last_publication_date)
  }

  return {
    props: { post }
  }
}