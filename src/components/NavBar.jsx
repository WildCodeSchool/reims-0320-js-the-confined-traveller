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
      <h1 className="title">Our personal Departments:</h1>
      <p></p>
      <p></p>
      <p></p>
      <li className="ownDepartement">
        <NavLink
          to="/departments/11/sunset">
          Sunset
        </NavLink>
      </li>
      <li className="ownDepartement">
        <NavLink
          to="/departments/11/mountain">
          Mountain
        </NavLink>
      </li>
      <li className="ownDepartement">
        <NavLink
          to="/departments/11/beach">
          Beach
        </NavLink>
      </li>
      <li className="ownDepartement">
        <NavLink
          to="/departments/11/landscape">
          Landscape
        </NavLink>
      </li>
      <h1 className="title">Metropolitan Departments (flowers):</h1>
      <p></p>
      <p></p>
      <p></p>
        {departments.map((department) => (
          <li className="metDepartement">
            <NavLink
              to={`/departments/${department.departmentId}/flower`}
            >
              { department.displayName }
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </>
);


export default NavBar;
