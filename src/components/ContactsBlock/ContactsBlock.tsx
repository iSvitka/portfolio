import { ContactCell } from '../../generics/ContactCell/ContactCell';
import styles from './styles.module.scss';

export function ContactsBlock() {
    return (
        <section className={styles.ContactsBlock} id="Contacts">
            <p className={styles.contactsInfo}>
                <span>Contact</span> me when it`s convenient for you.<br/>My time zone is
                Further-Eastern European Time (FET), UTC +3
            </p>
            <div className={styles.contactsCont}>
                <ContactCell
                    name="mail"
                    link="mailto:svitka.ilya@gmail.com"
                    value="svitka.ilya@gmail.com"
                />
                <ContactCell
                    name="phone"
                    link="tel:+375297122234"
                    value="+375 29 712 2234"
                />
                <ContactCell
                    name="tg"
                    link="https://www.t.me/iSvitka"
                    value="@iSvitka"
                />
                <ContactCell
                    name="linked"
                    link="https://www.linkedin.com/in/ilya-svitko-0b5a79252/"
                    value="Ilya Svitko"
                />
            </div>
        </section>
    );
}
