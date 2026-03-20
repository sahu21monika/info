import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:you@email.com">Email</a>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Monika. Built with React + Vite.</p>
    </footer>
  )
}
