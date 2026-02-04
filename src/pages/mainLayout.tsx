import { Outlet } from "react-router-dom";

import { Box, Container } from "@mui/material";
import Header from "../components/header";

export default function MainLayout() {
  return (
    <Container>
      <Header />

      <Box component="main">
        <Outlet />
      </Box>

    </Container>
  );
}