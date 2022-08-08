import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <h3>My Job Applications</h3>
        </h1>

        <p className={styles.description}>
          <h5>October 2021 - Present</h5>
        </p>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h2>list job here</h2>
            <p>job description here</p>
          </a>

          <a className={styles.card}>
            <h2>list job here</h2>
            <p>job description here</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <h4>
          Created by
        </h4>
        <pre> </pre>
        <h3>
          Michael Steinmetz
        </h3>
      </footer> 
    </div>
  )
}
