import classes from './SkillsSection.module.css'
import { skillsData } from '../../helpers/SkillsData.ts'
import InfoBlock from '../infoBlock/InfoBlock.tsx'

export default function SkillsSection() {
  return (
    <section className={classes.skillsSection}>
      <h2>About me</h2>
      <div className={classes.skillsInfo}>
        {skillsData.map((section, sectionIndex) => (
          <InfoBlock
            key={sectionIndex}
            {...section}
            sectionIndex={sectionIndex}
          />
        ))}
      </div>
    </section>
  )
}
