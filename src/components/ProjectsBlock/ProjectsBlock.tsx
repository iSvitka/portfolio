import { ProjectCell } from '../../generics/ProjectCell/ProjectCell'
import styles from './styles.module.scss';
import rstypeImg from '../../assets/images/monkeytype.png';
import onlineStoreImg from '../../assets/images/online-store.png';
import asyncRaceImg from '../../assets/images/async-race.png';
import songbirdImg from '../../assets/images/songbird.png';
import gemPuzzleImg from '../../assets/images/gem-puzzle.png';
import virtualKeyboardImg from '../../assets/images/virtual-keyboard.png';
import onlineZooImg from '../../assets/images/online-zoo.png';
import shelterImg from '../../assets/images/shelter.png';


export function ProjectsBlock() {
    return (
        <section className={styles.ProjectsBlock} id='Projects'>
            <h2 className={styles.projectsHeading}>Projects</h2>
            <div className={styles.projectsCont}>
                <ProjectCell name='RStype' img={rstypeImg} description='Team project, clone of existence open-source project monkeytype. I was developing settings, leaderboard, info and account pages. Also loader, adaptive, themes and more...'/>
                <ProjectCell name='Online-store' img={onlineStoreImg} description='Team project, online store. I was developing main page, pagination on cart page, adaptive and a lot of little sings.'/>
                <ProjectCell name='Async-race' img={asyncRaceImg} description='Own project, race app. Task was to create race app using ready-made API. App works with local server.'/>
                <ProjectCell name='Songbird' img={songbirdImg} description='Own project, game quiz. Try to guess the bird by its voice. Project is written on JS.'/>
                <ProjectCell name='Gem puzzle' img={gemPuzzleImg} description='Own project, puzzle app. U need to place the tiles in numerical order. Project is written on JS.'/>
                <ProjectCell name='Virtual keyboard' img={virtualKeyboardImg} description='Own project, virtual keyboard app. Project is written on JS'/>
                <ProjectCell name='Online-zoo' img={onlineZooImg} description='Task was to make layout for main and donate page of Online-zoo project.'/>
                <ProjectCell name='Shelter' img={shelterImg} description='Task was to make layout for Shelter project.'/>
            </div>
        </section>
    )
}