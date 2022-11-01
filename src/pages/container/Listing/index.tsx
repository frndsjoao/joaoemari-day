import { useEffect } from 'react'
import CamicadoImg from '../../../assets/listings/camicado.png'
import PixImg from '../../../assets/listings/pix.png'
import FastshopImg from '../../../assets/listings/fastshop.png'
import LavilleImg from '../../../assets/listings/laville.png'

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
          <ListingItem name='Fastshop' image={FastshopImg} description="Clique aqui" url='https://listadecasamento.fastshop.com.br/lista/mariejoao-160423' />
          <ListingItem name='La-ville' image={LavilleImg} description="Clique aqui" url='https://presentes.lavillecasa.com.br/lista/joaoemari' />
          <ListingItem name='Pix' image={PixImg} description='joaoemari@gmail.com' />
        </div>
      </div>
    </main>
  )
}