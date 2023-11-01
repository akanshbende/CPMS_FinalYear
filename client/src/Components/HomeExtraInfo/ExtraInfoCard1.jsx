// import React from "react";

// import * as React from "react";
// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ExtraInfoCard1({ title, description, link }) {
  return (
    <Card sx={{ minWidth: 275, paddingLeft: "1rem" }}>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography variant="h4" component="div">
          {title}
        </Typography>
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography> */}
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          size="small"
          color="#16171d"
        >
          See More
        </a>
      </CardActions>
    </Card>
  );
}
