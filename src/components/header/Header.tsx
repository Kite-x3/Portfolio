import classes from './Header.module.css'

export default function Header() {
  return (
    <>
      <header className={classes.header}>
      <img src="/kite.jpg" alt="Kite GIF"/>
        <h1>
          <strong>
            Hi, my name is <em>Stanislav</em>
          </strong>
          <br />
          Frontend developer
        </h1>
        <img src="/kite.jpg" alt="Kite GIF"/>

      </header>
    </>
  )
}
