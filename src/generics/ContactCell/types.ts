export interface ContactCellProps{
    name: ContactNameType;
    link: string;
    value: string
}

export type ContactNameType = 'tg' | 'phone' | 'mail' | 'linked'