import React from 'react';
import {
  NavLink,
} from 'react-router-dom';

const NavBar = ({ departments }) => (
  <div>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {departments.map((department) => (
          <li>
            <NavLink to={`/departments/${department.departmentId}`}>{ department.displayName }</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);


export default NavBar;
