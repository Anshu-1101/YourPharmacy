
import React from 'react';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import {Navbar} from "./components";
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Footer from './components/Footer/index';
import Signin from './components/Signin/index';
import Register from './components/Register';


function App() {
  return (
     <Router>
       <GlobalStyle/>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/SignIn" exact component={Signin}/>
        <Route path="/Register" exact component={Register}/>
       

      </Switch>
      <Footer/>
     </Router>
  );
}

export default App;
