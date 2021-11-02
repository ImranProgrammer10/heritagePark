 
import './App.css';
import Header from './components/header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
   
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Package from './pages/Packages';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PageNotFound from './pages/PageNotFound';
import Footer from './components/footer/Footer';
import AuthProvider from './contexts/AuthProvider';
import Details from './pages/Details';
import Packages from './pages/Packages';
import PrivateRoute from './pages/PrivateRoute';

 

function App() {
   
  return (
    <div>
      <AuthProvider>
      <Router>
          <Header> </Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>

            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <Route exact path="/packages">
             <Packages></Packages>
            </Route>

            <PrivateRoute path="/cart">
              <Cart></Cart>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/packages/:key">
            <Details></Details>
            </Route>

            

            

            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>

      </AuthProvider>
       
    
    </div>
  );
}

export default App;
