import ContactsInfoBlock from '../contactsInfoBlock/ContactsInfoBlock'
import { contacts } from './../../helpers/ContactsInfo'
import classes from './ContactsSection.module.css'

export default function ContactsSection() {
  return (
    <section className={classes.contactSection}>
      <h1>Contacts</h1>
      {contacts.map((contact, index) => (
        <ContactsInfoBlock {...contact} key={index} />
      ))}
    </section>
  )
}
