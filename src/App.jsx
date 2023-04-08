
import "./App.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import Store from "./components/Store";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProduct } from "./redux/slice/ProductSlice";
function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getProduct())
  },[])
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/singleProduct/:id" element={<SingleProduct />} />
          <Route path="/store" element={<Store />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
