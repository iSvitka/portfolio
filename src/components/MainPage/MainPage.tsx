import { AboutBlock } from "../AboutBlock/AboutBlock";
import { ContactsBlock } from "../ContactsBlock/ContactsBlock";
import { HireMeBlock } from "../HireMeBlock/HireMeBlock";
import { ProjectsBlock } from "../ProjectsBlock/ProjectsBlock";
import { SkillsBlock } from "../SkillsBlock/SkillsBlock";

export function MainPage() {
    return (
        <>
            <HireMeBlock />
            <AboutBlock />
            <SkillsBlock />
            <ProjectsBlock />
            <ContactsBlock />
        </>
    )
}