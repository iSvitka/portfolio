import styles from './styles.module.scss';
import myPhoto from  '../../assets/images/photo.jpg'

export function PhotoBlock() {
    return (
        <div className={styles.PhotoBlock}>
            <img className={styles.photo} src={myPhoto} alt="Me" />
        </div>
    )
}