import classes from './section.module.css'
import { skillsData } from './data.ts'
import { motion } from 'motion/react'

export default function Section() {
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
    <section className={classes.skillsSection}>
      {skillsData.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <motion.h2
            variants={headerVariants}
            initial='start'
            whileInView='apear'
            custom={sectionIndex}
            key={sectionIndex}
            viewport={{ once: true }}
          >
            {section.title}
          </motion.h2>
          <ul>
            {section.skills.map((skill, index) => (
              <motion.li
                variants={listVariants}
                initial='hidden'
                whileInView='visible'
                custom={index}
                key={index}
                viewport={{ once: true }}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
