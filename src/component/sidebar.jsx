// import React from "react";
// import { List, ListItemButton, ListItemText, IconButton, Box, Typography } from "@mui/material";
// import CloseIcon from '@mui/icons-material/Close';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// const Sidebar = ({ opensidebar, toggleSidebar }) => {
//   const items = [
//     "Dashboard", "Products", "Categories", "Customers", "Inventory", "Reports", "Setting",
//   ];

//   return (
//     <Box
//       id="sidebar"
//       sx={{
//         gridArea: 'sidebar',
//         width: { xs: '250px', sm: '260px' },
//         backgroundColor: '#263043',
//         overflowY: 'auto',
//         position: { xs: opensidebar ? 'absolute' : 'none', md: 'relative' },
//         transition: 'all 0.3s ease-in-out',
//         zIndex: { xs: opensidebar ? 1200 : -1, md: 1 },
//         display: { xs: opensidebar ? 'block' : 'none', md: 'block' }
//       }}
//     >
// <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
//   <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
//     <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff', letterSpacing: 1 }}>
//       SHOP
//     </Typography>
//     <ArrowBackIosNewIcon sx={{ color: '#fff' }} />
//   </Box>
//   <IconButton onClick={toggleSidebar} sx={{ color: 'red', display: { xs: 'inline', md: 'none' }, ml: 2 }}>
//     <CloseIcon />
//   </IconButton>
// </Box>


//       <List sx={{ mt: 2 }}>
//         {items.map((item, index) => (
//           <ListItemButton key={index} sx={{color: 'white', '&:hover': { backgroundColor: '#3328d2' } }}>
//             <ListItemText primary={item} sx={{}} />
//           </ListItemButton>
//         ))}
//       </List>
//     </Box>
//   );
// };

// export default Sidebar;


import React from "react";
import {
  List,
  ListItemButton,
  ListItemText,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Sidebar = ({ opensidebar, toggleSidebar }) => {
  const items = [
    "Dashboard",
    "Products",
    "Categories",
    "Customers",
    "Inventory",
    "Reports",
    "Setting",
  ];

  return (
    <Box
      id="sidebar"
      sx={{
        position: { xs: "fixed", md: "relative" },
        top: 0,
        left: 0,
        // height: "100vh",
        width: { xs: "250px", sm: "260px" },
        backgroundColor: "#263043",
        overflowY: "auto",
        zIndex: { xs: 1200, md: 1 },
        transform: {
          xs: opensidebar ? "translateX(0)" : "translateX(-100%)",
        //   md: "none",
        },
        transition: "transform 0.3s ease-in-out",
        display: "block", // always block for animation to work
      }}
    >
      {/* Header with SHOP and Arrow icon */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, color: "#fff", letterSpacing: 1 }}
          >
            SHOP
          </Typography>
          {/* Arrow icon that closes sidebar */}
          <ArrowBackIosNewIcon
            sx={{ color: "#fff", cursor: "pointer", ml: 1 }}
            onClick={toggleSidebar}
          />
        </Box>

        {/* Optional Close icon for extra mobile UI */}
        {/* <IconButton
          onClick={toggleSidebar}
          sx={{
            color: "red",
            display: { xs: "inline", md: "none" },
            ml: 2,
          }}
        >
          {/* <CloseIcon /> */}
        {/* </IconButton> */} 
      </Box>

      {/* Sidebar links */}
      <List sx={{ mt: 2 }}>
        {items.map((item, index) => (
          <ListItemButton
            key={index}
            sx={{
              color: "white",
              "&:hover": {
                backgroundColor: "#3328d2",
              },
            }}
          >
            <ListItemText primary={item} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
