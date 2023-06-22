import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';

const TopBar = () => {
  // State for the profile menu
  const [anchorEl, setAnchorEl] = React.useState(null);

  // Open profile menu
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close profile menu
  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  // Profile menu options
  const profileMenuOptions = [
    { label: 'Profile', onClick: handleProfileMenuClose },
    { label: 'Settings', onClick: handleProfileMenuClose },
    { label: 'Logout', onClick: handleProfileMenuClose },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          {/* Your navigation bar button icon */}
        </IconButton>
        <div style={{ flex: 1 }}>
          {/* Your search bar component */}
        </div>
        <div>
          <IconButton
            color="inherit"
            aria-controls="profile-menu"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
          >
            <Avatar>
              <AccountCircleIcon />
            </Avatar>
          </IconButton>
          <Menu
            id="profile-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleProfileMenuClose}
          >
            {profileMenuOptions.map((option, index) => (
              <MenuItem key={index} onClick={option.onClick}>
                {option.label}
              </MenuItem>
            ))}
          </Menu>
          <IconButton color="inherit" aria-label="settings">
            <SettingsIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
