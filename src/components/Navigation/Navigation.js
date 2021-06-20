import { NavLink, Link } from 'react-router-dom';

import './Navigation.css';

function Navigation() {
  return (
    <nav className="nav-container">

      <div className="category-container">
        <Link className="category-link" to="about-wrapper">About</Link>
        <NavLink className="category-link" to="/projects">Portfolio</NavLink>
        <NavLink className="category-link" to="/contact">Contact</NavLink>

      </div>
    </nav>
  )
}

export default Navigation;