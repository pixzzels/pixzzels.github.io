import { NavLink } from 'react-router-dom';

import './Navigation.css';

function Navigation() {
  return (
    <nav className="nav-container">
      <div className="name-container">
        <span className="oc-tags"> &lt;</span>
        <NavLink exact to="/" className="name">Ellen Park</NavLink>
        <span className="oc-tags">/&gt;</span>
      </div>
      <div className="category-container">
        <NavLink className="category-link" to="/skills">Skills</NavLink>
        <NavLink className="category-link" to="/projects">Projects</NavLink>
        <NavLink className="category-link" to="/contact">Contact Me</NavLink>

      </div>
    </nav>
  )
}

export default Navigation;