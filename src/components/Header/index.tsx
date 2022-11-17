import Image from 'next/image'
import styles from './styles.module.scss'
import logo from '../../../public/images/logo.svg'
import { SignInButton } from '../SignInButton'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ActiveLink } from '../ActiveLink'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href='/'><Image src={logo} alt="ig.news"/></Link>
        <nav>
          <ActiveLink href='/' activeClassName={styles.active}>Home</ActiveLink>
          <ActiveLink href='/posts' activeClassName={styles.active}>Posts</ActiveLink>
        </nav>
        <SignInButton/>
      </div>
    </header>
  )
}