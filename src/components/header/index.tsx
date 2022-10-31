import Image from 'next/image'
import styles from './styles.module.scss'
import logo from '../../../public/images/logo.svg'
import { SignInButton } from '../SignInButton'
import Link from 'next/link'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logo} alt="ig.news"/>
        <nav>
          <Link href='/'>Home</Link>
          <Link href='/posts'>Posts</Link>
        </nav>
        <SignInButton/>
      </div>
    </header>
  )
}