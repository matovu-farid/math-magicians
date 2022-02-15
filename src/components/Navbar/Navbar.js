import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
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
);

export default Navbar;
