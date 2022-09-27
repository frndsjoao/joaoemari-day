import { useEffect } from 'react'
import styles from './styles.module.scss'

import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Verse() {
  useEffect(() => {
    Aos.init({
      duration: 1000
    })
  }, [])

  return (
    <main id="verse" className={styles.verseContainer}>
      <div className={styles.verseWrapper} data-aos="fade-up">
        <p>
          O amor é paciente, o amor é bondoso. Não inveja, não se vangloria,
          não se orgulha. Não maltrata, não procura seus interesses,
          não se ira facilmente, não guarda rancor. O amor não se alegra com a
          injustiça, mas se alegra com a verdade. Tudo sofre, tudo crê, tudo
          espera, tudo suporta.
        </p>
        <span>1 Coríntios 13:4-7</span>
      </div>
    </main>
  )
}