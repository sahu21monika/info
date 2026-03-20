import './About.css'

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm a passionate developer who loves building things for the web. With a background
            in both design and engineering, I focus on creating experiences that are not only
            functional but delightful to use.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies, contributing to
            open source projects, or working on side projects that solve real-world problems.
          </p>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>
        </div>
        <div className="about-avatar">
          <div className="avatar-placeholder">M</div>
        </div>
      </div>
    </section>
  )
}
