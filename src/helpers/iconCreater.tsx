import { ContactNameType } from "../generics/ContactCell/types";
import { LinkedInIcon } from "../generics/LinkedInIcon/LinkedInIcon";
import { MailIcon } from "../generics/MailIcon/MailIcon";
import { PhoneIcon } from "../generics/PhoneIcon/PhoneIcon";
import { TgIcon } from "../generics/TgIcon/TgIcon";

export const iconCreater = (name: ContactNameType) => {
    switch(name) {
        case 'linked':
            return <LinkedInIcon />
        case 'mail':
            return <MailIcon />
        case 'phone':
            return <PhoneIcon />
        case 'tg':
            return <TgIcon />
        default: return <MailIcon />
    }
}