import './Skills.css'

const skills = [
  { category: 'Frontend', items: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'REST APIs'] },
  { category: 'Tools & Other', items: ['Git', 'Vite', 'PostgreSQL', 'MongoDB', 'Figma'] },
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map(group => (
          <div key={group.category} className="skill-card">
            <h3 className="skill-category">{group.category}</h3>
            <ul className="skill-list">
              {group.items.map(skill => (
                <li key={skill} className="skill-tag">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
