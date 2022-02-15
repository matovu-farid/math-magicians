import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="nav-bar">
    <h1>Math Magicians</h1>
    <ul className="nav-list">
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/calculator" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
          Calculator
        </NavLink>
      </li>
      <li>
        <NavLink to="/quote" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
          Quote
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Navbar;
