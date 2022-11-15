import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <form class="form">
          <div class="form-group">
            <label for="compName">Company Name</label>
            <input type="text" class="form-control" id="compName" aria-describedby="nameHelp" placeholder="Enter company name"/>
          </div>
          <div class="form-group">
            <label for="jobTitle">Job title</label>
            <input type="text" class="form-control" id="jobTitle" placeholder="Enter job title"/>
          </div>
          <div class="form-group">
            <label for="dateApp">Date Applied</label>
            <input type="date" class="form-control" id="dateApp" placeholder="Enter date applied"/>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </body>
    </div>
  )
}
