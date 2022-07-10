import React from 'react';
import './App.css';
import './css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import AboutUs from './components/home/AboutUs';
import IISMA from './components/home/IismaCamp';
import Testimoni from './components/home/Testimoni';
import LoginPage from './components/Login/Login';
import RegisterPage from './components/Register/Register';
import ForgotPassword from './components/ForgotPassword/ForgotPas';
import ResetPassword from './components/ResetPassword/ResetPas';
import Cart from './components/Cart/Cart';
import { CartProvider } from 'react-use-cart';
import PageProduct from './components/Cart/PageProduct';
import FYP from './components/home/FYP';
import Companycamp from './components/home/Companycamp';

function App() {
  return (
     
    <div className="App">
      <Navbar />
          <Routes>
            <Route>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/IISMA" element={<IISMA />} />
              <Route path="/testimoni" element={<Testimoni />} />
              <Route path="/signin" element={<LoginPage/>} />
              <Route path="/register" element={<RegisterPage/>} />
              <Route path="/forgotPassword" element={<ForgotPassword/>} />
              <Route path="/resetPassword/:token" element={<ResetPassword/>}/>
              <Route path="/cart" element={<CartProvider><PageProduct/><Cart/></CartProvider>} />
              <Route path="/FYP" element={<FYP />} />
              <Route path="/Companycamp" element={<Companycamp/>} />
            </Route>
          </Routes>
      <Footer />
   
    
    </div>
    
  );
}

export default App;