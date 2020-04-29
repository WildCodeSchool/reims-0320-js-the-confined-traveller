
import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ArtworkList from './components/ArtworkList';

import Axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  const [departments, setDepartments] = useState([]);
  const [objectIDs, setObjectIDs] = useState([]);
  const [wantedDepartment, setWantedDepartment] = useState(null);

  useEffect(() => {
    Axios.get('https://collectionapi.metmuseum.org/public/collection/v1/departments')
      .then((response) => response.data)
      .then((data) => {
        setDepartments(data.departments);
      });
  }, []);

  useEffect(() => {
    if (wantedDepartment != null) {
      Axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${wantedDepartment}&q=cat`)
        .then((response) => response.data)
        .then((data) => {
          //setObjectIDs(data.objectIDs ?? []);
          setObjectIDs(data.objectIDs != null ? data.objectIDs : []);
        });
    }
  }, [wantedDepartment]);

  return (
    <div className="App">
      <div>
        <Router>
          <div>
            <NavBar departments={departments} />
            <Switch>
              <Route exact path="/" />
              <Route path="/departments/:id" component={ArtworkList} />
            </Switch>
          </div>
        </Router>
      </div>
      {departments.map((department) => (<button type="button" onClick={() => setWantedDepartment(department.departmentId)}>{department.displayName}</button>))}
      {objectIDs.map((objectID) => (<p>{objectID}</p>))}

    </div>
  );
}
export default App;
