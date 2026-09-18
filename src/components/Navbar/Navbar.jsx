import { useTheme } from "../../ThemeContext.jsx";
import "./Navbar.css";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="navbar">
      <div className="navbar-inner">

        <a href="/" className="navbar-logo">
          <span className="logo-mark">T</span>
          <span className="logo-text">
            TRACE<span>//</span>X
          </span>
        </a>

        <nav className="navbar-links">
          <a href="#overview">Overview</a>
          <a href="#investigate">Investigate</a>
          <a href="#dashboard">Dashboard</a>
        </nav>

        <div className="navbar-actions">

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? "☀️" : "🌙"}
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;