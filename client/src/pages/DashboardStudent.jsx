import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import CustomerOrderStudent from "../components/DashComponents/CustomerOrderStudent";
import CustomerOrderComplete from "../components/DashComponents/CustomerOrderComplete";
import InventoryManagement from "../components/DashComponents/InventoryManagementAdmin";
import logo from "../assets/CCAS.png"

const DashboardStudent = () => {
  const navigate = useNavigate();
  const Dash=[<CustomerOrderStudent/>,<CustomerOrderComplete/>];
  const [currentDash, setCurrentDash] = useState(<CustomerOrderStudent/>);
  const userName = localStorage.getItem("userName");
  const [user,setUser]=useState("User");
  

  const logOut=()=>{
    localStorage.removeItem("userRole");
  localStorage.removeItem("userEmail");
  localStorage.removeItem("userName");
  navigate("/"); }

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    setUser(userName);
  },[]);

  return (
    <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <label htmlFor="my-drawer-2" className="bg-base-200 p-3 mt-[20px] rounded-r-md drawer-button lg:hidden">
  <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
  </label>
  <div className="drawer-content flex flex-col items-center justify-center">
    {currentDash}
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay">
      </label> 
    <ul className="menu flex flex-col justify-start text-center content-stretch w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
    <li><a className="btn btn-ghost normal-case font-bold text-3xl mb-8 mt-2">
          <label tabIndex={0} className=" btn-ghost avatar">
              <div className="w-10 -mr-2">
                <img src={logo} />
              </div>
            </label>
            MunchCraft</a></li>
            <li className="text-lg font-medium text-left pl-4">Welcome, {userName}</li>
      <li className="text-lg font-medium "><a onClick={()=>{setCurrentDash(Dash[0])}}>Order Placed</a></li>
      <li className="text-lg font-medium "><a onClick={()=>{setCurrentDash(Dash[1])}}>Order Complete</a></li>

      <li className="text-lg font-medium absolute bottom-5 "><a onClick={()=>{if(window.confirm("You Logged Out from the dashboard")){logOut()}}}>Log Out</a></li>
    </ul>
  
  </div>
</div>
  );
};

export default DashboardStudent;
