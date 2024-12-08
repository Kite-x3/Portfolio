import classes from './Navigation.module.css'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <>
      <nav className={classes.navList}>
        <NavLink to='/' className={classes.Logo}>
          Portfolio
        </NavLink>
        <ul>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? `${classes.Link} ${classes.active}` : classes.Link
            }
          >
            Home
          </NavLink>
          <NavLink
            to='/projects'
            className={({ isActive }) =>
              isActive ? `${classes.Link} ${classes.active}` : classes.Link
            }
          >
            Projects
          </NavLink>
          <NavLink
            to='/contacts'
            className={({ isActive }) =>
              isActive ? `${classes.Link} ${classes.active}` : classes.Link
            }
          >
            Contacts
          </NavLink>
        </ul>
      </nav>
    </>
  )
}
