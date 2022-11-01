import Image from 'next/image'
import BgImg from '../../../assets/IMG_6534.jpg'

import styles from './styles.module.scss'

export default function About() {
  return (
    <main id="about" className={styles.aboutContainer}>
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutContent}>
          <p>
            Sonhamos e oramos por esse dia e estamos muito felizes por poder compartilhar esse momento com vocês.
          </p>
          <p>
            Nesse site iremos compartilhas algumas informações importantes sobre o casamento enquanto aguardamos a chegada do grande dia.
          </p>
        </div>

        <div className={styles.aboutImg}>
          <Image
            src={BgImg}
            alt="Background-image"
            layout='fill'
            width={0}
            height={0}
            priority
            placeholder='blur'
          />
        </div>
      </div>
      {/* <div className={styles.bgContainer} /> */}
    </main>
  )
}