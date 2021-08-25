import React from 'react';
import { useState } from "react";
import './App.css';
import SignIn from './login';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { GrDashboard } from 'react-icons/gr';
import Sidebar from "./components/sidebar/sidebar";

import Main from "./components/main/main";

function App() {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };

  
  return (
    <div className="container">
    
    <Main />
    <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
  </div>
  );
}

export default App;