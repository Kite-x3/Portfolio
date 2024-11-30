import classes from './Navigation.module.css'

export default function Navigation() {
  return (
    <>
      <nav className={classes.navigation}>
        <p>Developer Portfolio</p>
        <ul>
          <li>Portfolio</li>
          <li>Projects</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </>
  )
}
