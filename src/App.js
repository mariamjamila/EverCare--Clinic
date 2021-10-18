import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Pages/Home/Footer/Footer";
import Services from "./Pages/Home/Services/Services";
import Error from "./Pages/Error/Error";
import Centers from "./Pages/Centers/Centers";
import Header from "./Pages/Home/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
           
          <Route  path="/centers">
            <Centers></Centers>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
