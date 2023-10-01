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
          <Route exact path="/login" element={
            <Layout>
            <Login/>
            </Layout>
          }/>
          <Route exact path="/menu" element={
            <Layout>
            <Menu/>
            </Layout>
          }/>
        </Routes>
      </Router>
    
    </div>  );
}

export default App;
