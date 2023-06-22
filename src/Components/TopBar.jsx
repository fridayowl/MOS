// TopBar.js
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';

import './topbar.css';

const TopBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isRotated, setIsRotated] = useState(false);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleRotation = () => {
    setIsRotated(!isRotated);
  };

  const profileMenuOptions = [
    { label: 'Profile', onClick: handleProfileMenuClose },
    { label: 'Settings', onClick: handleProfileMenuClose },
    { label: 'Logout', onClick: handleProfileMenuClose },
  ];

  return (
    <AppBar position="static" color="inherit">
      <Toolbar className="topbar" style={{ '--toolbar-background-color': '#f2f2f2', '--toolbar-font-size': '14px' }}>
        <div style={{ flexGrow: 1 }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleRotation}
            className={`menuButton ${isRotated ? 'rotated' : ''}`}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <div className="searchInput">
          <SearchIcon className="searchIcon" />
          <InputBase placeholder="Search..." />
        </div>
        <IconButton
          color="inherit"
          aria-controls="profile-menu"
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          className="profileSection"
        >
          <Avatar>
            <AccountCircleIcon />
          </Avatar>
          <div className="username">
            <Typography variant="subtitle1">John Doe</Typography>
            <Typography variant="caption" style={{ fontSize: '12px' }}>
              admin
            </Typography>
          </div>
        </IconButton>
        <Menu
          id="profile-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleProfileMenuClose}
          className="profileMenu"
        >
          {profileMenuOptions.map((option, index) => (
            <MenuItem key={index} onClick={option.onClick}>
              {option.label}
            </MenuItem>
          ))}
        </Menu>
        <IconButton color="inherit" aria-label="settings" className="settingsButton">
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
