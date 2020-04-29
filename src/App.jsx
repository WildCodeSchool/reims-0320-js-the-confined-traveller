
import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

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
      {departments.map((department) => (<button type="button" onClick={() => setWantedDepartment(department.departmentId)}>{department.displayName}</button>))}
      {objectIDs.map((objectID) => (<p>{objectID}</p>))}
    </div>
  );
}
export default App;
