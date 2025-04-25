import React from 'react';
import { Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';

const Header = ({ OpenSidebar }) => {
  return (
    <Box
      sx={{
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 30px',
        boxShadow: '0 6px 7px -3px rgba(0, 0, 0, 0.35)',
        backgroundColor: '#1d2634',
        color: '#9e9ea4'
      }}
    >
      <Box sx={{ display:"flex",gap:"20px", alignItems:"center",color:"white"}}>
        <IconButton  onClick={OpenSidebar} sx={{color:"white"}}>
          <MenuIcon   />
          
        </IconButton>
        <SearchIcon />
      </Box>

      {/* <Box sx={{color:"white"}}>
        <SearchIcon />
      </Box> */}

      <Box sx={{color:"white",display:"flex",gap:"20px" }}>
        <NotificationsIcon />
        <MailIcon />
        <PersonIcon />
      </Box>
    </Box>
  );
};

export default Header;
