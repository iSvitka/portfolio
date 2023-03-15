import styles from './styles.module.scss'

export function Footer() {
    return (
        <footer className={styles.Footer}>
            <div className={styles.footerGitHubCont}>
                <span className={styles.footerText}>gitHub: </span>
                <a className={styles.footerLink} href='https://github.com/iSvitka'>iSvitka</a>
            </div>
            <span className={styles.footerText}>Ilya Svitko</span>
        </footer>
    )
}