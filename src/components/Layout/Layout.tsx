import { useEffect, useState } from 'react';
import cn from 'classnames';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import styles from './styles.module.scss';
import themes from '../../themes.module.scss';
import fonts from '../../fonts.module.scss';
import { MainPage } from '../MainPage/MainPage';
import { ScrollTopButton } from '../ScrollTopButton/ScrollTopButton';
import { ThemeChangeButton } from '../ThemeChangeButton/ThemeChangeButton';

export function Layout() {
    const [isVisible, setIsVisible] = useState(false);
    const [theme, setTheme] = useState(false);

    const toggleTheme = () => {
        setTheme(!theme);
    };

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrollY =
                window.scrollY || document.documentElement.scrollTop;
            if (scrollY >= 150) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    }, []);

    return (
        <div
            className={cn(
                styles.Layout,
                !theme && themes.lightTheme,
                theme && themes.darkTheme,
                fonts.ubuntuMonoFont
            )}
        >
            <Header />
            <main className={styles.main}>
                <MainPage />
            </main>
            <Footer />
            {!!isVisible && <ScrollTopButton />}
            <ThemeChangeButton changeThemeFunc={toggleTheme} />
        </div>
    );
}
