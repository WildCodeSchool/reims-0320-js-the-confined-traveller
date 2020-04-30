import React from 'react';
import {
  NavLink,
} from 'react-router-dom';

const NavBar = ({ departments }) => (
  <>
    <header>
      <NavLink to="/">The Confined Traveller</NavLink>
    </header>
    <nav className="navbar">
      <ul>
        {departments.map((department) => (
          <li>
            <NavLink
              to={`/departments/${department.departmentId}/flower`}
            >
              { department.displayName }
            </NavLink>
          </li>
        ))}
        <li>
          <NavLink
            to="/departments/11/sunset"
          >
            Sunset
          </NavLink>
        </li>
      </ul>
    </nav>
  </>
);


export default NavBar;
