// import React from "react";

import { Box, Stack, Typography } from "@mui/material";
import HomeNavbar from "../Components/HomeNavbar";
import HomePageNavButton from "../Components/HomePageNavButton";
// import Paper from "@mui/material/Paper";

// import PiStudentBold from "react-icons/pi";
import HomePageNavButtonsData from "../Data/HomePageNavButtonsData";
function HomePage() {
  return (
    <>
      <div className="homepage-wrapper">
        <HomeNavbar />
        <div className="homepage-img-wrapper relative w-full ">
          <div className="bg-img absolute -z-10 w-full h-full">
            <img
              src="/GECA_img1.jpeg "
              className="object-cover w-full h-full"
              alt=""
            />
          </div>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            sx={{ padding: 4, alignItems: "center" }}
          >
            <Box
              sx={{
                backgroundColor: "rgba(0, 0, 20, 0.6)",
                width: "60%",
                padding: 2,
                borderRadius: 5,
                backdropFilter: "blur(5px)",
              }}
            >
              <Box sx={{ alignItems: "center", margin: 2 }}>
                <Typography
                  variant="h3"
                  sx={{ fontFamily: "Roboto", color: "white" }}
                >
                  A one stop portal for Placements & Internships
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontFamily: "Roboto", color: "white", marginTop: 2 }}
                >
                  Welcome to the GECA recruitment portal. Our graduates embody a
                  blend of critical thinking, dedication, and a strong
                  foundation. At GECA, we nurture them to pursue excellence and
                  make a significant impact in their chosen fields. Let&apos;s
                  get started...
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "40%",
                padding: 5,
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Stack direction="column" spacing={2}>
                {HomePageNavButtonsData &&
                  HomePageNavButtonsData.map((btn, index) => {
                    return (
                      <HomePageNavButton
                        key={index}
                        title={btn?.title}
                        link={btn?.link}
                        icon={btn?.icon}
                      />
                    );
                  })}
                {/* <HomePageNavButton title={`Recuriter`} link={""} icon={} />
                <HomePageNavButton title={`Coordinator`} link={""} icon={} />
                <HomePageNavButton title={`Verifier`} link={""} icon={} /> */}
              </Stack>
            </Box>
          </Stack>
        </div>
        <div className="extra-info-wrapper">
          <Typography variant="h3">Extras things to added....</Typography>
        </div>
      </div>
    </>
  );
}

export default HomePage;
