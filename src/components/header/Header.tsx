import classes from './Header.module.css'

export default function Header() {
  return (
    <>
      <header className={classes.header}>
        <video src='/Kite.mkv' autoPlay loop muted playsInline />
        <h1>
          <strong>
            Hi, my name is <em>Stanislav</em>
          </strong>
          <br />
          Frontend developer
        </h1>
        <video src='/Kite.mkv' autoPlay loop muted playsInline />
      </header>
    </>
  )
}
