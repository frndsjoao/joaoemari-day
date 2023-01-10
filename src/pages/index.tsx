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

      {/* <main className={styles.mainContainer}>
        <Header />

        <Intro />
        <Verse />
        <About />
        <Listing />
        <Rsvp />
        <Informations />

        <Footer />
      </main> */}

      <main className={styles.maintenance}>
        <p>Estamos atualizando o site para melhorar a experiência de vocês.</p>
        <p>Pedimos que volte amanhã ❤️</p>

        <strong>Mari & João</strong>
      </main>
    </>
  )
}
