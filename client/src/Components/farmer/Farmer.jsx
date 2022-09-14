import React from "react";
import AddProducts from "./AddProducts";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";

const Admin = () => {
  return (
<div className="home" style={{width:"100%"}}><Topbar/>
        <div className="container"><Sidebar/>
        </div>
       </div>
  );
};

export default Admin;
