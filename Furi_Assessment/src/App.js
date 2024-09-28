import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/header";
import Footer from "./Components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/Style/style.css'
import '../src/Style/tiny-slider.css'
import'../src/scss/style.scss';
import Home from "./Components/Home/home";
import Shop from "./Components/shop/shop";
import AboutUs from "./Components/aboutUs/aboutUs.js";
import Blog from "./Components/blog/blog.js";
import Service from "./Components/services/service.js";
import ContactUs from "./Components/contactUs/contactUs.js";
import Cart from "./Components/cart/cart.js";
import CheckOut from "./Components/cart/checkOut.js";
import ThankYou from "./Components/cart/thankYou.js";




function App() {
  return (
    
    <BrowserRouter>
    <Header/>
      <Routes>
          <Route path="home" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="aboutUs" element={<AboutUs/>} />
          <Route path="blog" element={<Blog/>} />  
          <Route path="services" element={<Service/>} />  
          <Route path="contactUs" element={<ContactUs/>} />  
          <Route path="cart" element={<Cart/>}/> 
          <Route path="checkOut" element={<CheckOut/>} />  
          <Route path="thankYou" element={<ThankYou/>} />  
      </Routes>   
      <Footer/>
    </BrowserRouter>
   
 
  );
}

export default App;
