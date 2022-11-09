import Head from 'next/head';
import styles from './styles.module.scss'

export default function posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href='#'>
            <time>09 de novembro de 2022</time>
            <strong>Um post de teste com Next.js</strong>
            <p>Nesse post iremos testar as funcionalidades do Next.js integrado ao Prismic.</p>
          </a>
          <a href='#'>
            <time>09 de novembro de 2022</time>
            <strong>Um post de teste com Next.js</strong>
            <p>Nesse post iremos testar as funcionalidades do Next.js integrado ao Prismic.</p>
          </a>
          <a href='#'>
            <time>09 de novembro de 2022</time>
            <strong>Um post de teste com Next.js</strong>
            <p>Nesse post iremos testar as funcionalidades do Next.js integrado ao Prismic.</p>
          </a>  
        </div>
      </main>
    </>
  );
}