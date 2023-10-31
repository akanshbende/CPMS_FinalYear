// import React from "react";

import { Box, Paper, Stack, Typography } from "@mui/material";
import HomeNavbar from "../Components/HomeNavbar";
import HomePageNavButton from "../Components/HomePageNavButton";
// import Paper from "@mui/material/Paper";

// import PiStudentBold from "react-icons/pi";
import HomePageNavButtonsData from "../Data/HomePageNavButtonsData";
import MarqueeStrip from "../Components/Marquee/MarqueeStrip";
import ExtraInfoCard1 from "../Components/HomeExtraInfo/ExtraInfoCard1";

import { extaInfoData1, extaInfoData2 } from "../Data/ExtraInfoData";
import ExtraInfoCard2 from "../Components/HomeExtraInfo/ExtraInfoCard2";
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
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={3}
            sx={{
              padding: 4,
              alignItems: "center",
              paddingTop: { xs: "1rem", sm: "1rem", md: "5rem" },
            }}
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
        {/* Marqueee */}
        <div className="extra-info-wrapper">
          <MarqueeStrip />
        </div>
        {/* Extra Info */}
        <Stack
          spacing={4}
          direction={{ xs: "column", sm: "column", md: "row" }}
          sx={{
            padding: { md: "3rem" },
            backgroundColor: "#747fe2",
          }}
        >
          {/* ExtraInfo 1 */}
          <Stack
            spacing={3}
            direction={{ xs: "column", sm: "column", md: "column" }}
            sx={{
              padding: { md: "2rem" },
              backgroundColor: "#d9d9d9",
              width: { md: "50%" },
            }}
          >
            {/* {console.log(extaInfoData1)} */}
            {extaInfoData1 &&
              extaInfoData1.map((data, index) => {
                return (
                  <ExtraInfoCard1
                    key={index}
                    title={data?.title}
                    description={data?.description}
                    link={data?.link}
                  />
                );
              })}
          </Stack>
          {/* Extra Info 2 */}
          <Stack
            spacing={4}
            direction={{ xs: "column", sm: "column", md: "column" }}
            sx={{
              padding: { md: "2rem" },
              width: { md: "50%" },
              backgroundColor: "#d9d9d9",
            }}
          >
            {extaInfoData2 &&
              extaInfoData2.map((data, index) => {
                return (
                  <ExtraInfoCard2
                    key={index}
                    from={data?.from}
                    to={data?.to}
                    link={data?.link}
                  />
                );
              })}
          </Stack>
        </Stack>

        {/* Why GECA */}

        <Stack
          sx={{
            padding: { md: "4rem" },
            alignItems: "center",
            backgroundColor: "#d9d9d9",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            WHY GECA
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 300 }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil esse
            quidem, et, accusamus molestias pariatur recusandae dolores
            reiciendis eveniet reprehenderit optio dolor, odio velit animi
            adipisci. Neque repellendus aliquam natus!
          </Typography>
          {/* Why geca cards */}
          <Stack
            direction={{ md: "row", sm: "column" }}
            sx={{ alignItems: "center", justifyContent: "space-around" }}
          >
            <Paper sx={{}}>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                ICON
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 500 }}>
                Alumni
              </Typography>
            </Paper>
          </Stack>
        </Stack>
      </div>
    </>
  );
}

export default HomePage;
