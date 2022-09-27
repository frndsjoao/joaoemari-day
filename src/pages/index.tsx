import Head from 'next/head'
import Header from '../components/Header'

import Intro from './container/Intro'
import Verse from './container/Verse'
import About from './container/About'
import Listing from './container/Listing'
import Rsvp from './container/Rsvp'
import Informations from './container/Informations'
import Footer from '../components/Footer'

import styles from './mainPage.module.scss'
import { useEffect, useState } from 'react'
import Loaders from '../components/Loaders'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500)
  }, [])

  return (
    <>
      <Head>
        <title>João &amp; Mari</title>
      </Head>

      {isLoading ? (
        <main className={styles.loaderContainer}>
          <Loaders homepage />
        </main>
      ) : (
        <main className={styles.mainContainer}>
          <Header />

          <Intro />
          <Verse />
          <About />
          <Listing />
          <Rsvp />
          <Informations />

          <Footer />
        </main>
      )}
    </>
  )
}
