import './Experience.css'

const experiences = [
  {
    role: 'Senior Product Engineer',
    company: 'Temenos India',
    location: 'Hyderabad',
    period: 'July 2021 – April 2025',
    points: [
      'Introduced Open Banking App2App feature in Digital Banking Applications — Mobile and Web.',
      'Optimized login performance for banking applications via code restructuring and R&D.',
      'Improvised code management — Multiple Identity Services merge (Python scripts, Git, new NFIs).',
      'Decomposed a heavy monolithic application into a Micro App architecture, enhancing maintainability and scalability for faster customer deliveries.',
      'Built Next Gen UI Components based on Redux Architecture — Independent Business Modules (Redux, React, Kony Visualizer).',
      'Led, trained, and mentored software engineers in development and debugging processes.',
    ],
  },
  {
    role: 'Software Development Engineer',
    company: 'Kony Inc (Temenos)',
    location: 'Hyderabad',
    period: 'Aug 2019 – June 2021',
    points: [
      'Reintegrated faster APIs (Microservices and Temenos T24) for MFA, Dashboard, Campaign Management and User Management.',
      'Developed Java services focusing on Approval Matrix & Event Registrations (Java, Engagement Services, SQL, Kony Spotlight).',
      'Wrote Procedures and Triggers for the local database (SQL, RDBMS).',
      'Introduced accessibility and RTL features in Digital Banking products (A11y Compliance, RTL, i18n internationalizations).',
    ],
  },
  {
    role: 'Associate Engineer',
    company: 'Kony Inc',
    location: 'Hyderabad',
    period: 'Aug 2018 – July 2019',
    points: [
      'Revamped web app to be responsive, enhancing the base product Infinity Banking.',
      'Designed sleek screens for new account opening modules, enhancing user experience.',
      'Crafted visually appealing UI widgets as versatile components.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Work Experience</h2>
      <div className="timeline">
        {experiences.map((exp, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <p className="timeline-company">{exp.company} · {exp.location}</p>
                </div>
                <span className="timeline-period">{exp.period}</span>
              </div>
              <ul className="timeline-points">
                {exp.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
