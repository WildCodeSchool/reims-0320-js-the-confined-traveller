import React from 'react';
import {
  NavLink,
} from 'react-router-dom';

const NavBar = ({ departments }) => (
  <div>
    <header>
      <NavLink to="/">The Confined Traveller</NavLink>
    </header>
    <nav className="navbar">
      <ul>
        {departments.map((department) => (
          <li>
            <NavLink
              to={`/departments/${department.departmentId}`}
            >
              { department.displayName }
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);


export default NavBar;
