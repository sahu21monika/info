import profileImg from '../assets/Profile.png'
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
            When I'm not coding, you'll find me exploring new technologies, or maybe watching movies or cooking.
          </p>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">6+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>
        <div className="about-avatar">
          <img src={profileImg} alt="Monika" className="avatar-img" />
        </div>
      </div>
    </section>
  )
}
