
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Axios from 'axios';

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
      {departments.map((department) => (<p>{ department.displayName }</p>))}
    </div>
  );
}

export default App;
