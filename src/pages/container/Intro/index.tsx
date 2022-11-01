import Image from 'next/image'
import BgImg from '../../../assets/IMG_6974.jpg'
import { IoIosArrowDown } from 'react-icons/io'

import styles from './styles.module.scss'
import { Link } from 'react-scroll'
import { useState } from 'react'

export default function Intro() {
  const [rsvp] = useState(false)

  return (
    <main id="intro" className={styles.introContainer}>
      <div className={styles.introImg}>
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

      <div className={styles.introWrapper}>
        <div className={styles.introContent}>
          <h1>Mari <span>&</span> João</h1>
          <h2>16  de Abril de 2023</h2>

          {rsvp && (
            <Link to="rsvp" smooth>
              <button>RSVP</button>
            </Link>
          )}
        </div>
      </div>

      <div className={styles.arrowDown}>
        <Link to="verse" spy smooth>
          <IoIosArrowDown />
        </Link>
      </div>
    </main>
  )
}