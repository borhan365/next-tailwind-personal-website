import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Md Borhan Uddin Personal Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center items-center h-screen">
      <h1 className="text-blue-800 font-black uppercase text-8xl text-center mt-9">Md Borhan Uddin</h1>
      <h3>Learning NextJS & TailwindCSS</h3>
      </div>

    </div>
  )
}
