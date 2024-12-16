import { ProjectBlockProps } from './projectBlock.types'
import classes from './ProjectBlock.module.css'
import { motion } from 'motion/react'

export default function ProjectBlock({
  title,
  img,
  description,
  githubLink,
  index,
}: ProjectBlockProps) {
  const projectBLockVariants = {
    start: { opacity: 0 },
    apear: { opacity: 1, transition: { delay: index * 0.3, duration: 2 } },
  }

  return (
    <motion.div
      className={classes.projectBlock}
      variants={projectBLockVariants}
      initial='start'
      whileInView='apear'
      custom={index}
      viewport={{ once: true }}
    >
      <h2>{title}</h2>
      <a href={githubLink}>
        <img src={img} alt='project image' />
      </a>
      <p>{description}</p>
    </motion.div>
  )
}
