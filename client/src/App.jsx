import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage.jsx";
import AboutUs from "./pages/AboutUs";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import Menu from "./pages/Menu";
import ErrorPages from "./pages/ErrorPages";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import "./index.css";


function Layout({ children }) {
  return (
    <>
     <Navbar/>
    {children}
    <Footer/>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
             <Layout>
             <HomePage/>
             </Layout>
          } />
          <Route exact path="/aboutus" element={
            <Layout>
            <AboutUs/>
            </Layout>
          }/>
          <Route exact path="/contactus" element={
            <Layout>
            <ContactUs/>
            </Layout>
          }/>
           <Route exact path="/my-cart" element={
            <Layout>
            <AboutUs/>
            </Layout>
          }/>
          <Route exact path="/login" element={
            <Login/>
          }/>
          <Route exact path="/menu" element={
            <Layout>
            <Menu/>
            </Layout>
          }/>
           <Route exact path="/dashboard" element={
            <Dashboard/>
          }/>
          <Route exact path="*" element={
            <ErrorPages/>
          }/>
        </Routes>
      </Router>
    </div>
  );
}


export default App;
