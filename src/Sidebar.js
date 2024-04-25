import React, {useState} from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Home, CalendarMonthOutlined, Search, DeskOutlined, QuestionMarkRounded, HeadphonesRounded, Settings} from '@mui/icons-material';
import './Sidebar.css';
import logo from './logo.webp';

function Navbar() {
    const [collapsed, setCollapsed] = useState(false);
  
    const handleToggleSidebar = () => {
      setCollapsed(!collapsed);
    };
  
    return (
      <Sidebar collapsed={collapsed}>
        <img src={logo} alt="logo" className='logo-image' onClick={handleToggleSidebar}/>
        <Menu>
          <MenuItem icon={<Home />}>Home</MenuItem>
          <MenuItem icon={<Search />}>Search</MenuItem>
          <MenuItem icon={<DeskOutlined />}>Desktop</MenuItem>
          <MenuItem icon={<CalendarMonthOutlined />}>Calender</MenuItem>
          <MenuItem icon={<QuestionMarkRounded />}>FAQS</MenuItem>
          <MenuItem icon={<HeadphonesRounded />}>Music</MenuItem>
          <MenuItem icon={<Settings />} style={{marginTop:'200px'}}>Settings</MenuItem>
        </Menu>
      </Sidebar>
    );
  }

export default Navbar;