import { GetStaticProps } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { createClient } from "../../../services/prismic";
import formateDate from "../../../utils/formateDate";

import styles from '../post.module.scss';

interface PostPreviewProps {
  postPreview: {
    slug: string,
    title: string,
    updatedAt: string,
    content: string
  }
}

export default function Post({ postPreview }: PostPreviewProps) {
  const {data} = useSession();
  const router = useRouter();
  useEffect(() => {
    if(data?.activeSubscription) {
      router.push(`/posts/${postPreview.slug}`);
    }
  }, [data, postPreview.slug, router]);

  return (
    <>
      <Head>
        <title>{`${postPreview.title} | Ignews`}</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{postPreview.title}</h1>
          <time>{postPreview.updatedAt}</time>
          <div 
            dangerouslySetInnerHTML={{ __html: postPreview.content }}  
            className={`${styles.postContent} ${styles.previewContent}`} 
          />

          <div className={styles.continueReading}>
            Wanna continue reading?
            <Link href='/'>Subscribe now 🤗</Link>
          </div>
        </article>
      </main>
    </>
  );
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const prismic = await createClient();

  const response = await prismic.getByUID('posts', String(slug));

  const charsToShow = 700
  const postPreview = {
    slug,
    title: response.data.title,
    content: response.data.content.slice(0, charsToShow),
    updatedAt: formateDate(response.last_publication_date)
  }

  return {
    props: { postPreview },
    revalidate: 60 * 30 // 30 minutes
  }
}