import { SkillCellProps } from "./types";
import styles from './styles.module.scss'

export function SkillCell({value, name}: SkillCellProps) {
    return (
        <div className={styles.SkillRow}>
            <h4 className={styles.skillName}>{name}</h4>
            <div className={styles.skillValueCont}>
                {Array(5).fill(0).map(( _, index) => {
                    if(index + 1 <= value){
                        return <div className={styles.skillValueFilled} key={Math.random()}/>
                    }
                    return <div className={styles.skillValueEmpty} key={Math.random()}/>
                })}
            </div>
        </div>
    )
}