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
          <p>Pedimos que se programe com antecedência para chegar a tempo e não atrasar, por favor.</p>
          <p>O local não possui estacionamento, porém, por se tratar de um bairro residencial é possível estacionar nas ruas ao redor.</p>
          <p>A cerimônia e a festa serão no mesmo local, que possui uma parte em gramado. Por isso, opte por um calçado confortável.</p>
          <p style={{ textAlign: 'center', fontWeight: '400', marginTop: 30 }}>Aproveite, registre os momentos, dê risadas. A presença de vocês é importante pra nós!</p>
        </div>
      </div>
    </main>
  )
}