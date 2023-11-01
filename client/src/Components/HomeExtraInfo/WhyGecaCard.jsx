import { Paper, Typography } from "@mui/material";

function WhyGecaCard({ icon, name }) {
  return (
    <>
      <Paper
        sx={{
          width: 200,
          height: 200,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2rem",
        }}
      >
        <Typography variant="h1" sx={{ fontWeight: 700 }}>
          {icon}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 500, textAlign: "center" }}>
          {name}
        </Typography>
      </Paper>
    </>
  );
}

export default WhyGecaCard;
