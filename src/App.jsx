
import React, { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import ArtworkList from './components/ArtworkList';
import ArtworkCard from './components/ArtworkCard';


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
    <div className="app">
      <header>The Confined Traveller</header>
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <NavBar departments={departments} />
              </Route>
              <Route path="/departments/:id">
                <Link to="/">Home</Link>
                <ArtworkList />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
      <p>
        <ArtworkCard />
      </p>
      <footer>
        <a href="https://www.wildcodeschool.com/fr-FR" target="_blank">Wild Code School</a>
        <p>Hackathon project</p>
      </footer>
    </div>
  );
}
export default App;
