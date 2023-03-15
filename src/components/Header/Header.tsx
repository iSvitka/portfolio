import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.Header}>
            <nav className={styles.navCont}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}><a href='#About'>About me</a></li>
                    <li className={styles.navItem}><a href='#Skills'>Skills</a></li>
                    <li className={styles.navItem}><a href='#Projects'>Projects</a></li>
                    <li className={styles.navItem}><a href='#Contacts'>Contacts</a></li>
                </ul>
            </nav>
        </header>
    )
}