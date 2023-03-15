import { ProjectCellProps } from "./types";
import styles from './styles.module.scss'
import { projectOpener } from "../../helpers/projectOpener";

export function ProjectCell({img, description, name}: ProjectCellProps) {



    const clickHandler = () => {
        projectOpener(name)
    }

    return (
        <div role='link' tabIndex={0} className={styles.ProjectCell} onClick={clickHandler} onKeyDown={clickHandler}>
            <img className={styles.projectImg} src={img} alt="Project preview" />
            <h4 className={styles.projectHeading}>{name}</h4>
            <p className={styles.projectDescription}>{description}</p>
        </div>
    )
}