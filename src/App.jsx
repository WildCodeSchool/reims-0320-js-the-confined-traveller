
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

  useEffect(() => {
    Axios.get('https://collectionapi.metmuseum.org/public/collection/v1/departments')
      .then((response) => response.data)
      .then((data) => {
        setDepartments(data.departments);
      });
  }, []);

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
    </div>
  );
}

export default App;
