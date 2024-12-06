import { ProjectBlockProps } from './projectBlock.types'
import classes from './ProjectBlock.module.css'

export default function ProjectBlock({
  title,
  img,
  description,
  githubLink,
}: ProjectBlockProps) {
  return (
    <div className={classes.projectBlock}>
      <h2>{title}</h2>
      <a href={githubLink}>
        <img src={img} alt='project image' />
      </a>
      <p>{description}</p>
    </div>
  )
}
