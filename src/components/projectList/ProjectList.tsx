import ProjectBlock from '../projectBlock/ProjectBlock'
import { projects } from './../../helpers/AllProjects'
import clases from './ProjectList.module.css'

export default function ProjectList() {
  return (
    <section className={clases.projectContainer}>
      {projects.map((proj, index) => (
        <ProjectBlock key={index} {...proj} />
      ))}
    </section>
  )
}
