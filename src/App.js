 
import './App.css';
import Header from './components/header/Header';
import {
  BrowserRouter as Router,
 
  Route,
  Routes
   
} from "react-router-dom";
import Home from './pages/Home';
 
 
 
import Cart from './pages/Cart';
 
 
import PageNotFound from './pages/PageNotFound';
 
import AuthProvider from './contexts/AuthProvider';
import Details from './pages/Details';
 
 

 

function App() {
   
  return (
    <div>
      <AuthProvider>
      <Router>
          <Header> </Header>

          <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/home" element={<Home />} />

           
 

          <Route path="/cart" element={<Cart />} />
          <Route path="/packages/:key" element={<Details />} />
          <Route path="*" element={<PageNotFound />} />
 

        </Routes>
         
        </Router>

      </AuthProvider>
       
    
    </div>
  );
}

export default App;
