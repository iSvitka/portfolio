import { useState } from 'react';
import cn from 'classnames'
import { MoonIcon } from '../../generics/MoonIcon/MoonIcon';
import { SunIcon } from '../../generics/SunIcon/SunIcon';
import styles from './styles.module.scss'
import { ThemeChangeButtonProps } from './types';

export function ThemeChangeButton({changeThemeFunc}: ThemeChangeButtonProps) {
    const [isHidden, setIsHidden] = useState(false)

    const clickHandler = () => {
        changeThemeFunc()
        setIsHidden(!isHidden)
    }

    return (
        <button type='button' className={styles.ThemeChangeButton} onClick={clickHandler}>
            <div className={cn(styles.themeSun, isHidden&&styles.hidden)}>
                <SunIcon />
            </div>
            <div className={cn(styles.themeMoon, !isHidden&&styles.hidden)}>
                <MoonIcon />
            </div>
        </button>
    )
}