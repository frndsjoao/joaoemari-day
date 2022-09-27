import { useEffect } from 'react'
import CamicadoImg from '../../../assets/listings/camicado.png'
import MagaluImg from '../../../assets/listings/magalu.png'
import PixImg from '../../../assets/listings/pix.png'
import TokstokImg from '../../../assets/listings/tokstok.png'

import ListingItem from '../../../components/ListingIntem'
import styles from './styles.module.scss'

import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Listing() {
  useEffect(() => {
    Aos.init({
      duration: 1000
    })
  }, [])

  return (
    <main id="listing" className={styles.listingContainer}>
      <div className={styles.listingWrapper}>
        <h2>Lista de presentes</h2>

        <div className={styles.listingContent} data-aos="zoom-in">
          <ListingItem name='Camicado' image={CamicadoImg} description="Clique aqui" url='https://joaoemari.day' />
          <ListingItem name='Magalu' image={MagaluImg} description="Clique aqui" url='https://joaoemari.day' />
          <ListingItem name='Tok-stok' image={TokstokImg} description="Clique aqui" url='https://joaoemari.day' />
          <ListingItem name='Pix' image={PixImg} description='joaoemari@gmail.com' />
        </div>
      </div>
    </main>
  )
}