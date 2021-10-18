import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router,Switch  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
       <Home></Home> 
      <Switch>

      </Switch>
      </Router>
    
    </div>
  );
}

export default App;
