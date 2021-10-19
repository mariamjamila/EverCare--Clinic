import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Pages/Home/Footer/Footer";
import Services from "./Pages/Home/Services/Services";
import Error from "./Pages/Error/Error";
import Centers from "./Pages/Centers/Centers";
import Header from "./Pages/Home/Header/Header";
import Booking from "./Pages/Booking/Booking/Booking";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
     <AuthProvider>
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
          <Route  path="/login">
          <Login></Login>
          </Route>
          <Route  path="/register">
          <Register></Register>
          </Route>
          <PrivateRoute  path="/booking/:serviceId">
           <Booking></Booking>
          </PrivateRoute>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
