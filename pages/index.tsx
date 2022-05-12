import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/About.module.css'

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2> Next JS Data Fetch Methods</h2>
        <ul>
          <li>
            <Link href="/ssg">Static Site Generation</Link>{" "}
          </li>
          <li>
            <Link href="/isr">Incremental Static Regeneration</Link>
          </li>
          <li>
            <Link href="/ssr">Server Side Rendering</Link>{" "}
          </li>
          <li>
            <Link href="/csr">Client Side Rendering</Link>
          </li>
          <li>
            <Link href="/hybrid">Hybrid Rendering</Link>
          </li>
        </ul>
      </main>


    </div>
  )
}

export default About
