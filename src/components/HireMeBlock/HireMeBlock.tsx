import { PhotoBlock } from '../PhotoBlock/PhotoBlock'
import styles from './styles.module.scss'

export function HireMeBlock() {
    return (
        <section className={styles.HireMeBlock}>
                <PhotoBlock />
                <div className={styles.hireInfo}>
                    <div className={styles.hireTextCont}>
                        <h1 className={styles.hireTextHeading}>Ilya Svitko</h1>
                        <p className={styles.hireTextInfo}>A perspective Frontend developer with huge educational experience</p>
                    </div>
                    <a href='#Contacts' className={styles.hireButton}>Hire me!</a>
                </div>
        </section>
    )
}