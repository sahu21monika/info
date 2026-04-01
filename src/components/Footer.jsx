import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="https://github.com/sahu21monika" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/monika21sahu/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:monika21.sahu@gmail.com">Email</a>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Monika. Built with React + Vite.</p>
    </footer>
  )
}
