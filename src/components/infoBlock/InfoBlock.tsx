import { motion } from 'motion/react'
import { InfoBlockProps } from './InfoBlock.types'
import classes from './InfoBlock.module.css'
import AngleIcon from './AngleIcon'

export default function InfoBlock({
  title,
  skills,
  sectionIndex,
}: InfoBlockProps) {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { delay: i * 0.2 },
    }),
  }

  const headerVariants = {
    start: { opacity: 0, y: -20 },
    apear: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3 },
    }),
  }

  return (
    <div className={classes.Block} key={sectionIndex}>
      <motion.h3
        variants={headerVariants}
        initial='start'
        whileInView='apear'
        custom={sectionIndex}
        key={sectionIndex}
        viewport={{ once: true }}
      >
        {title}
      </motion.h3>
      <ul>
        {skills.map((skill: string, index: number) => (
          <motion.li
            variants={listVariants}
            initial='hidden'
            whileInView='visible'
            custom={index}
            key={index}
            viewport={{ once: true }}
          >
            <AngleIcon />
            {skill}
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
