import { useEffect } from 'react'
import CamicadoImg from '../../../assets/listings/camicado.png'
import PixImg from '../../../assets/listings/pix.png'
import AmazonImg from '../../../assets/listings/amazon.png'

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
          <ListingItem name='Camicado' image={CamicadoImg} description="Clique aqui" url='https://lista.camicado.com.br/joaoemari' />
          <ListingItem name='Amazon' image={AmazonImg} description="Clique aqui" url='https://www.amazon.com.br/hz/wishlist/ls/H0GV7IG8U1VK?ref_=wl_share' />
          <ListingItem name='Pix' image={PixImg} description='joaoemari@gmail.com' />
        </div>
      </div>
    </main>
  )
}