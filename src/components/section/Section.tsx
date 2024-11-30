import classes from './section.module.css'

export default function Section() {
  return (
    <section className={classes.skillsSection}>
      <h2>Hard skills</h2>
      <ul>
        <li>
          Programming languages knowledge: C++, C#, JavaScript, TypeScript;
        </li>
        <li>Markup languages: HTML, CSS</li>
        <li>Understanding of library: React</li>
        <li>Database usage skills</li>
        <li>Knowledge of English language</li>
      </ul>
      <h2>Soft skills</h2>
      <ul>
        <li>Highly motivated to learn and grow</li>
        <li>Ability to work effectively in a team</li>
        <li>Purposefulness</li>
        <li>Resilient under stress</li>
        <li>Quick learner</li>
      </ul>
    </section>
  )
}
