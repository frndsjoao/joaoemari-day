import styles from './styles.module.scss'
import { FiMenu, FiX } from 'react-icons/fi'
import { Link } from 'react-scroll'
import { useEffect, useState } from 'react'


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    if (window.innerWidth > 599) {
      setMenuOpen(true)
    }
  }, [])

  return (
    <div className={`${styles.headerContainer} ${menuOpen && styles.showMenu}`}>
      {menuOpen
        ? <FiX className={styles.navIconClose} onClick={() => setMenuOpen(false)} />
        : (<FiMenu onClick={() => setMenuOpen(!menuOpen)} />)
      }

      {menuOpen && (
        <div className={styles.linkWrapper}>
          <Link to="listing" spy smooth>Lista de Presentes</Link>
          <div className={styles.divider} />
          <Link to="rsvp" spy smooth>Confirme sua presença</Link>
          <div className={styles.divider} />
          <Link to="informations" spy smooth>Informações Importantes</Link>
        </div>
      )}
    </div>
  )
}