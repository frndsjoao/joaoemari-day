import Image from 'next/image'
import BgImg from '../../../assets/RAF_5853.jpg'

import styles from './styles.module.scss'

export default function About() {

  return (
    <main id="about" className={styles.aboutContainer}>
      <div className={styles.aboutWrapper}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

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