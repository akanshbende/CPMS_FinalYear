// import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import { Stack, Typography } from "@mui/material";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
function HomeNavbar() {
  return (
    <>
      {/* <h1>navebar</h1> */}
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          fontFamily: "Roboto",
          fontWeight: 500,
          fontSize: "1.5rem",
        }}
      >
        <AppBar position="static" sx={{ backgroundColor: "#747fe2" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <img
                src="https://geca.ac.in/images/logocsn.png"
                className="rounded-full w-1/12"
                alt="clg-logo"
              />
              <h2>Placement Cell,GECA</h2>
            </Box>
            <Box>
              <Stack
                spacing={2.5}
                direction="row"
                // sx={{
                //   fontFamily: "Roboto",
                //   fontWeight: 500,
                //   fontSize: "1.5rem",
                // }}
              >
                <Box>
                  <Typography> Overview</Typography>
                </Box>
                <Box>
                  <Typography> Why Recruit</Typography>
                </Box>
                <Box>
                  <Typography> Director&apos;s Message</Typography>
                </Box>
                <Box>
                  <Typography> Recruitment Process</Typography>
                </Box>
                <Box>
                  <Typography> Contact Us</Typography>
                </Box>
              </Stack>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default HomeNavbar;
