import cn from 'classnames'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import styles from './styles.module.scss'
import themes from '../../themes.module.scss';
import fonts from '../../fonts.module.scss';
import { MainPage } from '../MainPage/MainPage';

export function Layout() {
    return (
        <div className={cn(styles.Layout, themes.lightTheme, fonts.ubuntuMonoFont)}>
            <Header />
            <main className={styles.main}>
                <MainPage />
            </main>
            <Footer />
        </div>
    )
}