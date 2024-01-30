import { useState } from "react";
import { LOGO_URL } from "../utils/mockData";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnName,setbtnName] =useState("login");
    return (<div className="header">
        <div className="logo">
          <img className="logo-img" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>
                <Link to="/">Home</Link></li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/cart">Cart</Link></li>
                <li>
                <Link to="/contact">Contact Us</Link></li>
                <li>
                <Link to="/profile">Profile</Link></li>
                <button onClick={()=>{
                    btnName==="login"?setbtnName("logout"):setbtnName("login")
                    
                }}>{btnName}</button>
            </ul>
        </div>
    </div>)
}
export default Header;