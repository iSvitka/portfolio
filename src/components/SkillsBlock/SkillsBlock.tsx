import { SkillCell } from '../../generics/SkillCell/SkillCell'
import styles from './styles.module.scss'

export function SkillsBlock() {
    return (
        <section className={styles.SkillsBlock} id='Skills'>
            <h2 className={styles.skillsHeading}>Skills</h2>
            <div className={styles.skillsCont}>
                <SkillCell name='HTML' value={4}/>
                <SkillCell name='CSS/SASS' value={4}/>
                <SkillCell name='JS' value={4}/>
                <SkillCell name='TypeScript' value={4}/>
                <SkillCell name='ReactJS' value={4}/>
                <SkillCell name='NodeJS' value={3} />
                <SkillCell name='Git' value={4} />
            </div>
        </section>
    )
}