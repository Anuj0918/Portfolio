import React,{useState,useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import Icon from '@mui/material/Icon';

function Navbar () {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();
    useEffect(() => {
        setExpandNavbar(false);
      }, [location]);
    
    return (
  <div className="navbar"  id={expandNavbar ? "open" : "close"}>
     <div className="toggleButton">
        <button
           onClick={() => {
            setExpandNavbar((prev) => !prev);
          }} 
        >  
        <Icon>Reorder</Icon>;
        </button>
        </div>
        <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/About"> About </Link>
      </div>
      </div>
    )
};

export default Navbar;