import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage.jsx";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import Menu from "./pages/Menu";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import "./index.css";

function Layout({ children }) {
  return (
    <>
     <Navbar/>
    {children}
    </>
   
  );
}

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route exact path="/" element={
             <Layout>
             <HomePage/>
             </Layout>
          } />
          <Route path="/aboutus" element={
            <Layout>
            <AboutUs/>
            </Layout>
          }/>
          <Route path="/contactus" element={
            <Layout>
            <ContactUs/>
            </Layout>
          }/>
          <Route path="/login" element={
            <Layout>
            <Login/>
            </Layout>
          }/>
          <Route path="/menu" element={
            <Layout>
            <Menu/>
            </Layout>
          }/>
        </Routes>
      </Router>
    
    </div>  );
}


export default App;
