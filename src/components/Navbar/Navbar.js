import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="nav-bar">
    <h1>Math Magicians</h1>
    <ul className="nav-list">
      <li>
        <NavLink to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/calculator">
          Calculator
        </NavLink>
      </li>
      <li>
        <NavLink to="/quote">
          Quote
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Navbar;
