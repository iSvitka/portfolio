import { iconCreater } from '../../helpers/iconCreater'
import styles from './styles.module.scss'
import { ContactCellProps } from './types'

export function ContactCell({name, link, value}: ContactCellProps) {
    const icon = iconCreater(name)
    return (
        <a className={styles.ContactCell} href={link} target='_blank' rel="noreferrer">
            <div className={styles.contactIcon}>
                {icon}
                <span className={styles.contactText}>:</span>
            </div>
            <span className={styles.contactText}>{value}</span>
        </a>
    )
}