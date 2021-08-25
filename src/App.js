import React from 'react';
import { useState } from "react";
import './App.css';
import SignIn from './login';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { GrDashboard } from 'react-icons/gr';
import Sidebar from "./components/sidebar/sidebar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from "./components/main/main";
import form1 from "./components/forms/form1"
import form2 from "./components/forms/form2"
import form3 from "./components/forms/form3"
import form4 from "./components/forms/form4"
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
    <Switch>
            
                <Route path="/form1" component={form1} />
                <Route path="/form2" component={form2} />
                <Route path="/form3" component={form3} />
                <Route path="/form4" component={form4} />
            </Switch>
  </div>
  );
}

export default App;