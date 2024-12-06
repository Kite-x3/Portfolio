import classes from './Navigation.module.css'

export default function Navigation() {
  return (
    <>
      <nav className={classes.navigation}>
        <p>Portfolio</p>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </>
  )
}
