import React, { useState } from 'react';
import { Menu, MenuItem } from 'react-pro-sidebar';
import { Home, CalendarMonthOutlined, Search, DeskOutlined, QuestionMarkRounded, HeadphonesRounded, Settings, MenuBook } from '@mui/icons-material';
import './NavbarSm.css';
import logo from './logo.webp';

function NavbarSm() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="mobile-navbar">
            <div className="logo-container">
                <img src={logo} alt="logo" className='logo-image' />
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                <MenuBook />
            </div>
            {menuOpen && (
                <div className="menu-items">
                    <Menu>
                        <MenuItem icon={<Home />}>Home</MenuItem>
                        <MenuItem icon={<Search />}>Search</MenuItem>
                        <MenuItem icon={<DeskOutlined />}>Desktop</MenuItem>
                        <MenuItem icon={<CalendarMonthOutlined />}>Calendar</MenuItem>
                        <MenuItem icon={<QuestionMarkRounded />}>FAQS</MenuItem>
                        <MenuItem icon={<HeadphonesRounded />}>Music</MenuItem>
                        <MenuItem icon={<Settings />}>Settings</MenuItem>
                    </Menu>
                </div>
            )}
        </div>
    );
}

export default NavbarSm;
