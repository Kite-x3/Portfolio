import classes from './section.module.css'
import { skillsData } from './data.ts'
import InfoBlock from '../infoBlock/InfoBlock.tsx'

export default function Section() {
  return (
    <section className={classes.skillsSection}>
      {skillsData.map((section, sectionIndex) => (
        <InfoBlock
          key={sectionIndex}
          {...section}
          sectionIndex={sectionIndex}
        />
      ))}
    </section>
  )
}
