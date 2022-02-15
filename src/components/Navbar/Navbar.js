import './Navbar.css';
import { NavLink } from 'react-router-dom';

import { ImHome2 } from 'react-icons/im';
import { BsCalculatorFill, BsFillChatLeftQuoteFill } from 'react-icons/bs';

const Navbar = () => (
  <div className="nav-bar">
    <h1>Math Magicians</h1>
    <ul className="nav-list">
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active navlink' : 'inactive navlink')}>
          <ImHome2 />
          <span>Home</span>

        </NavLink>
      </li>
      <li>
        <NavLink to="/calculator" className={({ isActive }) => (isActive ? 'active navlink' : 'inactive navlink')}>
          <BsCalculatorFill />
          <span>Calculator</span>

        </NavLink>
      </li>
      <li>
        <NavLink to="/quote" className={({ isActive }) => (isActive ? 'active navlink' : 'inactive navlink')}>
          <BsFillChatLeftQuoteFill />
          <span>Quote</span>

        </NavLink>
      </li>
    </ul>
  </div>
);

export default Navbar;
