
import React from 'react';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import {Navbar} from "./components";
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Footer from './components/Footer/index';
import signin from './components/Signin/index';
import register from './components/Register';
import AuthRoute from './components/AuthRoutes/AuthRoute'
import {QueryClient, QueryClientProvider} from 'react-query';
import Doctors from "./containers/doctorsPage/Doctors";
import Product from "./components/Products/Product";


const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <GlobalStyle/>
        <Navbar/>
        <Switch>
          <AuthRoute path="/" exact component={Home}/>
          <AuthRoute path="/home" exact component={Home}/>
          <AuthRoute path="/signin" exact component={signin}/>
          <AuthRoute path="/signup" exact component={register}/>
          <AuthRoute path="/docters" exact component={Doctors}/>
          <AuthRoute path="/Product" exact component={Product}/>

        </Switch>
        <Footer/>
      </Router>
     </QueryClientProvider>
  );
}

export default App;
