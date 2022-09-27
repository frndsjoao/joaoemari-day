import MapsGoogle from '../../../components/Maps'
import styles from './styles.module.scss'

export default function Informations() {

  return (
    <main id="informations" className={styles.informationsContainer}>
      <div className={styles.informationsWrapper}>
        <div className={styles.informationsMap}>
          <MapsGoogle />
        </div>

        <div className={styles.informationsContent}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </p>
        </div>
      </div>
    </main>
  )
}