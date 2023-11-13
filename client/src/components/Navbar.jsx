import {useState,useEffect} from "react";
import Img from "../assets/CCAS.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  
 
  const data=[
    <li><a onClick={()=>{navigate("/login")}}>Log In</a></li>,
    <li><a onClick={()=>{navigate("/dashboard")}}>Dashboard</a></li>,
    <li><a onClick={()=>{navigate("/dashboard-admin")}}>Dashboard</a></li>,
    <li><a onClick={()=>{navigate("/dashboard-student")}}>Dashboard</a></li>
  ];
  const [val,setVal]=useState(data[0]);

  
  useEffect(() => {
    const role = localStorage.getItem("userRole");
    if(role==="Canteen Owner"){
      setVal(data[1]);
    }
    else if(role==="Admin"){
      setVal(data[2]);
    }
    else if(role==="Student"){
      setVal(data[3]);
    }
    else{
      setVal(data[0]);
    }   
  },[]);
  
  return (
 
    <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar bg-base-200">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1">
           <a className="btn btn-ghost normal-case text-xl">
             <label tabIndex={0} className=" btn-ghost avatar">
               <div className="w-10 -mr-2">
                 <img src={Img} />
               </div>
            </label>
             MunchCraft
           </a>
        </div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal text-center font-medium text-lg">
          {/* Navbar menu content here */}
          <li><a onClick={()=>{navigate("/")}}>Home</a></li>
          <li><a onClick={()=>{navigate("/menu")}}>Menu</a></li>
          <li><a onClick={()=>{navigate("/")}} href="#ContactUs">Contact</a></li>
          <li><a onClick={()=>{navigate("/aboutus")}}>About</a></li>
          {/* <li><a onClick={()=>{navigate("/my-cart")}}>My Cart</a></li> */}
          {val}
        

          


        </ul>
      </div>
    </div>
    {/* Page content here */}

  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-100">
      {/* Sidebar content here */}
      <li><a onClick={()=>{navigate("/")}}>Home</a></li>
          <li><a onClick={()=>{navigate("/menu")}}>Menu</a></li>
          <li><a href="#ContactUs">Contact</a></li>
          <li><a onClick={()=>{navigate("/aboutus")}}>About</a></li>
          <li><a onClick={()=>{navigate("/my-cart")}}>My Cart</a></li>
    </ul>
  </div>
</div>
  );
};

export default Navbar;
