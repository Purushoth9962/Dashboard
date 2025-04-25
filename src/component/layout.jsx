import React, { useState, lazy, Suspense } from "react";
import Header from "./Header";
import { Box } from "@mui/material";

const Sidebar = lazy(() => import("./Sidebar"));
const Home = lazy(() => import("./Home"));

const DashboardLayout = () => {
  const [opensidebar, setOpensidebar] = useState(false);

  const toggleSidebar = () => {
    setOpensidebar(!opensidebar);
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>    
      <Header OpenSidebar={toggleSidebar} />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: opensidebar ? '260px 1fr' : '0 1fr' },
          gridTemplateAreas: {
            xs: `"main"`,
            md: `"sidebar main"`,
          },
          flex: 1,
          width: '100%',
        }}
      >
        <Suspense fallback={<div>Loading Sidebar...</div>}>
          <Sidebar opensidebar={opensidebar} toggleSidebar={toggleSidebar} />
        </Suspense>
        <Suspense fallback={<div>Loading Home...</div>}>
          <Home />
        </Suspense>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
