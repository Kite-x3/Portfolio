import { ContactsInfoBLockProps } from './ContactsInfoBlock.types'
import classes from './ContactsInfoBlock.module.css'

export default function ContactsInfoBlock({
  title,
  info,
}: ContactsInfoBLockProps) {
  return (
    <div className={classes.contactInfoBlock}>
      <h2>{title}</h2>
      <p>{info}</p>
    </div>
  )
}
