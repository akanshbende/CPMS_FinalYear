// import React from "react";

import { Box, Stack, Typography } from "@mui/material";
import HomeNavbar from "../Components/HomeNavbar";
import HomePageNavButton from "../Components/HomePageNavButton";

import HomePageNavButtonsData from "../Data/HomePageNavButtonsData";
import MarqueeStrip from "../Components/Marquee/MarqueeStrip";
import ExtraInfoCard1 from "../Components/HomeExtraInfo/ExtraInfoCard1";

import {
  extaInfoData1,
  extaInfoData2,
  extaInfoData3,
  extaInfoData4,
} from "../Data/ExtraInfoData";
import ExtraInfoCard2 from "../Components/HomeExtraInfo/ExtraInfoCard2";
import WhyGecaCard from "../Components/HomeExtraInfo/WhyGecaCard";
import { LiaAtomSolid } from "react-icons/lia";
import { FaRegStar } from "react-icons/fa6";
import { GrCycle } from "react-icons/gr";
import { BiBriefcase } from "react-icons/bi";
import RecuritmentProcessCard from "../Components/HomeExtraInfo/RecuritmentProcessCard";
import ContactUs from "../Components/HomeExtraInfo/ContactUs";

function HomePage() {
  return (
    <>
      <div className="homepage-wrapper">
        <HomeNavbar />
        <div className="homepage-img-wrapper relative w-full ">
          <div className="bg-img absolute -z-10 w-full h-full">
            <img
              src="/geca1.jpg"
              className="object-cover w-full h-full"
              alt=""
            />
          </div>
          {/* main horizontal stack */}
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            width="100%"
            spacing={3}
            sx={{
              padding: { md: 4, xs: 1, sm: 2 },
              alignItems: "center",
              paddingTop: { xs: "1rem", sm: "1rem", md: "5rem" },
            }}
          >
            {/* left blur black box */}
            <Box
              sx={{
                backgroundColor: "rgba(0, 0, 20, 0.6)",
                width: { md: "60%", sm: "100%", xs: "100%" },
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
                width: { md: "40%" },
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
            padding: { md: "3rem", xs: "1rem", sm: "1.5rem" },
            backgroundColor: "#747fe2",
          }}
        >
          {/* ExtraInfo 1 */}
          <Stack
            spacing={3}
            direction={{ xs: "column", sm: "column", md: "column" }}
            sx={{
              padding: { md: "2rem", xs: "1rem", sm: "1.5rem" },
              backgroundColor: "#d9d9d9",
              width: { md: "50%" },
              borderRadius: "10px",
              boxShadow: "2px 5px 20px rgba(0,0,0,0.5)",
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
              padding: { md: "2rem", xs: "1rem", sm: "1.5rem" },
              width: { md: "50%" },
              backgroundColor: "#d9d9d9",
              borderRadius: "10px",
              boxShadow: "2px 5px 20px rgba(0,0,0,0.5)",
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
            padding: { md: "4rem", xs: "2rem" },
            alignItems: "center",
            backgroundColor: "#d9d9d9",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            WHY GECA
          </Typography>
          <Typography variant="h6" m={2} sx={{ fontWeight: 300 }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil esse
            quidem, et, accusamus molestias pariatur recusandae dolores
            reiciendis eveniet reprehenderit optio dolor, odio velit animi
            adipisci. Neque repellendus aliquam natus!
          </Typography>
          {/* Why geca cards */}
          <Stack
            spacing={0}
            direction="row"
            sx={{
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: {
                md: "space-between",
                xs: "center",
                sm: "center",
              },
              margin: { md: "2rem", xs: "1rem" },
              padding: { md: "2rem 0", xs: "1rem" },
              width: "100%",
              gap: { xs: 4 },
            }}
          >
            <WhyGecaCard icon={<LiaAtomSolid />} name={"Alumni"} />
            <WhyGecaCard icon={<FaRegStar />} name={"Ranking"} />
            <WhyGecaCard icon={<GrCycle />} name={"Admission Process"} />
            <WhyGecaCard
              icon={<BiBriefcase />}
              name={"All round Development"}
            />
          </Stack>
        </Stack>
        {/* Recruitment Process */}

        <Stack
          spacing={4}
          direction={{ xs: "column", sm: "column", md: "column" }}
          sx={{
            padding: { md: "3rem", xs: "1rem", sm: "2rem" },
            backgroundColor: "#747fe2",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 700 }}>
            Recruitment Process
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            temporibus voluptatum neque maxime a repellendus consequuntur
            ratione. Fugit consequuntur quas nobis, voluptatem dicta et vitae
            soluta. Vero debitis ipsa animi.
          </Typography>
          <Stack
            direction="row"
            sx={{
              width: "100%",
              backgroundColor: "#d9d9d9",
              display: "flex",
              alignItems: "center",
              justifyContent: { md: "normal", xs: "center", sm: "center" },
              flexWrap: "wrap",
              padding: "2rem",
              borderRadius: "10px",
              boxShadow: "2px 5px 20px rgba(0,0,0,0.5)",
            }}
          >
            {extaInfoData4 &&
              extaInfoData4.map((item, index) => {
                return (
                  <RecuritmentProcessCard
                    key={index}
                    number={index + 1}
                    description={item?.description}
                  />
                );
              })}
          </Stack>
        </Stack>

        {/* Contect US */}
        <ContactUs />
      </div>
    </>
  );
}

export default HomePage;
