import styles from './styles.module.scss'
import TheSearch from '../Search'

const TheNavigation: React.FC<{}> = () => {
  return (
    <nav className={`${styles.navigation}`}>
      <ul className={`${styles.navigationList}`}>
        <li>
          <TheSearch />
        </li>
      </ul>
    </nav>
  )
}
export default TheNavigation
