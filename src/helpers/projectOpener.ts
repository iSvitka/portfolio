import { ProjectNameType } from "../generics/ProjectCell/types";

export const projectOpener = (name: ProjectNameType) => {
    switch(name) {
        case 'RStype': 
            window.open('https://isvitka.github.io/RStype/', '_blank')
            break;
        case 'Online-store': 
            window.open('https://isvitka.github.io/online-store/', '_blank')
            break;
        case 'Async-race': 
            window.open('https://rolling-scopes-school.github.io/isvitka-JSFE2022Q3/async-race/', '_blank')
            break;
        case 'Songbird': 
            window.open('https://rolling-scopes-school.github.io/isvitka-JSFE2022Q3/songbird/dist/pages/main/main.html', '_blank')
            break;
        case 'Gem puzzle': 
            window.open('https://rolling-scopes-school.github.io/isvitka-JSFE2022Q3/gem-puzzle/src/', '_blank')
            break;
        case 'Virtual keyboard': 
            window.open('https://rolling-scopes-school.github.io/isvitka-JSFE2022Q1/virtual-keyboard/dist/index.html', '_blank')
            break;
        case 'Online-zoo': 
            window.open('https://rolling-scopes-school.github.io/isvitka-JSFE2022Q3/online-zoo/pages/main/index.html#_blank', '_blank')
            break;
        case 'Shelter': 
            window.open('https://rolling-scopes-school.github.io/isvitka-JSFE2022Q1/shelter/pages/main', '_blank')
            break;
        default: break;
    }
}