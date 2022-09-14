import "./sidebar.css";
import React from "react";
import LineStyleIcon from '@mui/icons-material/LineStyle';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
           
            <li className="sidebarListItem" >
            <Link to="/farmer" style={{textDecoration:'none',color:"black"}}>
              <LineStyleIcon className="sidebarIcon" />
              Home
              </Link>
            </li>
            
            <li className="sidebarListItem">
              <Link to="addproducts" style={{textDecoration:'none',color:"black"}}>
              <AddCircleOutlineOutlinedIcon className="sidebarIcon" />
              <sup>Add Product</sup>
              </Link>
            </li>
            <li className="sidebarListItem">
              <Inventory2OutlinedIcon className="sidebarIcon" />
              Stock
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}