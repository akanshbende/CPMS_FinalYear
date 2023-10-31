// import React from "react";

// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { IconButton, Stack } from "@mui/material";
function ExtraInfoCard2({ from, to, link }) {
  return (
    <>
      <Card sx={{ minWidth: 275, cursor: "pointer" }}>
        <a href={link} target="_blank" rel="noreferrer">
          <Stack
            direction="row"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <CardContent>
              <Stack
                spacing={2}
                direction="row"
                sx={{ alignItems: "center", justifyContent: "space-between" }}
              >
                <Typography sx={{ fontSize: "2rem" }} gutterBottom>
                  <IoDocumentTextSharp />
                </Typography>
                <Typography variant="h5" component="div">
                  Placement Record
                </Typography>
                {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography> */}
                <Typography variant="h5" sx={{ fontWeight: 500 }}>
                  {from}-{to}
                </Typography>
              </Stack>
            </CardContent>
            <CardActions sx={{ marginRight: { md: "2rem" } }}>
              <IconButton size="medium" color="#16171d">
                <FaArrowRight />
              </IconButton>
            </CardActions>
          </Stack>
        </a>
      </Card>
    </>
  );
}

export default ExtraInfoCard2;
