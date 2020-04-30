import React from 'react';
import {
  NavLink,
} from 'react-router-dom';

const NavBar = ({ departments }) => (
  <div>
    <nav>
      <ul className="navbar">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {departments.map((department, index) => (
          <li
            className={`_${index}`}
          >
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
