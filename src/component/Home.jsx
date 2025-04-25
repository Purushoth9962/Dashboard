import React from "react";
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from "react-icons/bs";
import { ResponsiveContainer, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { Box, Typography } from "@mui/material";

const Home = () => {
  const data = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <Box
      component="main"
      sx={{
        gridArea: 'main',
        overflowY: 'auto',
        p: 3,
        color: 'rgba(255, 255, 255, 0.95)',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h5" fontWeight="bold">
          DASHBOARD
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
          gap: 2,
          mb: 3,
        }}
      >
        {[{ title: "PRODUCTS", count: 300, icon: <BsFillArchiveFill size={25} /> },
          { title: "CATEGORIES", count: 12, icon: <BsFillGrid3X3GapFill size={25} /> },
          { title: "CUSTOMERS", count: 33, icon: <BsPeopleFill size={25} /> },
          { title: "ALERTS", count: 42, icon: <BsFillBellFill size={25} /> },
        ].map((card, i) => (
          <Box
            key={i}
            sx={{
              backgroundColor: ['#2962ff', '#ff6d00', '#2e7d32', '#d50000'][i],
              p: 2,
              borderRadius: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography fontWeight="bold" sx={{ color: '#fff' }}>
                {card.title}
              </Typography>
              <Box sx={{ color: '#fff' }}>{card.icon}</Box>
            </Box>
            <Typography variant="h4" sx={{ color: '#fff' }}>
              {card.count}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3, mt: 5, height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default Home;