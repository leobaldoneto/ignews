import Image from 'next/image'
import styles from './styles.module.scss'
import logo from '../../../public/images/logo.svg'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logo} alt="ig.news"/>
        <nav>
          <a href='#'>Home</a>
          <a href='#'>Posts</a>
        </nav>
      </div>
    </header>
  )
}