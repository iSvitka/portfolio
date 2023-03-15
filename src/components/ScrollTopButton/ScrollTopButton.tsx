import styles from './styles.module.scss'

export function ScrollTopButton() {

    const scrollTop = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }

    return (
        <button className={styles.ScrollTopButton} onClick={scrollTop} type='button' aria-label='ScrollButton'/>
    )
}