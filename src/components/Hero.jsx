import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">Monika</h1>
        <h2 className="hero-role">Software Engineer</h2>
        <p className="hero-bio">
          I build clean, performant web applications with a focus on great user experiences.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-outline">Get in Touch</a>
        </div>
      </div>
      <div className="hero-bg-blur" />
    </section>
  )
}
