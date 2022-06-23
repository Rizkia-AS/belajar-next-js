import Link from 'next/link'
import styles from './../styles/Header.module.css'

/*
- menggunakan link tidak akan membuat halaman direfresh kembali
- menggunakan tag a akan membuat halaman di refresh kembali*/

export default function Header () {
  return (
    <header className={styles.container}>
        <ul className={styles.list}>
          <li>
            <Link className={styles.item} href="/halaman/blogs">blog</Link>
          </li>
          <li>
            <Link className={styles.item} href="/halaman/todos">todos</Link>
          </li>
          <li>
            <Link className={styles.item} href="/halaman">halaman</Link>
          </li>
        </ul>
    </header>
  )
}
