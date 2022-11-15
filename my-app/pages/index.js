// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <h3>Job Application Tracker</h3>
        </h1>

        <p className={styles.description}>
          <h5>October 2021 - Present</h5>
        </p>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h2>click here to go to application list</h2>
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
