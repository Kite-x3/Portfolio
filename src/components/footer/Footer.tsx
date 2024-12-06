import GithubLogo from '../icons/GithubLogo'
import VkLogo from '../icons/VkLogo'
import classes from './footer.module.css'

export default function Footer() {
  return (
    <footer className={classes.footerInfo}>
      <div className={classes.Logos}>
        <GithubLogo color='white' link='https://github.com/Kite-x3' />
        <VkLogo color='white' link='https://vk.com/chervyakai' />
      </div>
      <div>@2024 Frontend porfolio</div>
    </footer>
  )
}
