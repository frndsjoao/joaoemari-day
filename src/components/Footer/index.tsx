import styles from './styles.module.scss'

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <p>
        Desenvolvido com código e amor por {'\n'}
        <a href="https://www.joaofernandes.dev/" target="_blank" rel="noreferrer">
          João P. Assunção
        </a>
      </p>
    </div>
  )
}