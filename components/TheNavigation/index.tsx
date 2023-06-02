import Link from 'next/link'
import styles from './styles.module.scss'

const paths = [
  {
    title: 'Home',
    slug: '/'
  },
  {
    title: 'Blog',
    slug: '/blog'
  },
  {
    title: 'About Us',
    slug: '/about'
  },
  {
    title: 'Account',
    slug: '/account'
  }
]

export const TheNavigation: React.FC<{}> = () => {
  return (
    <nav className={`${styles.navigation}`}>
      <ul className={`${styles.navigationList}`}>
        {paths.map((path) => (
          <li className={styles.navigationItem} key={path.slug}>
            <Link href={path.slug}>{path.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
