import './Skills.css'

const skills = [
  { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Java', 'C/C++', 'Python'] },
  { category: 'Frontend', items: ['React.js', 'Next.js', 'HTML/CSS', 'Kony (Quantum) Visualizer'] },
  { category: 'Backend & Data', items: ['MySQL', 'REST APIs', 'Microservices', 'Kony (Quantum) Fabric'] },
  { category: 'Tools & Practices', items: ['Git', 'Data Structures', 'Algorithms', 'Research & Development'] },
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
