import React from 'react';
import {
  NavLink,
} from 'react-router-dom';

const NavBar = ({ departments }) => (
  <>
    <header>
      <NavLink to="/">The Confined Traveller</NavLink>
    </header>
    <p className="text">Welcome to the Confined Traveller!<br></br>
Here you can discover the collections of the Metropolitan Museum of Art according to the departments of the museum. 
<br></br>You can also access our personal selection of works of art.
<br></br>We hope to make you travel around the world and times from your sofa!</p>
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
