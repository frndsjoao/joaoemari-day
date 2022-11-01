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

export default function Home() {

  return (
    <>
      <Head>
        <title>Mari &amp; João</title>
      </Head>

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
    </>
  )
}
