import { Paper, Typography } from "@mui/material";

function RecuritmentProcessCard({ number, description }) {
  return (
    <>
      <Paper
        sx={{
          width: 400,
          height: 200,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2rem",
          margin: "1.5rem",
        }}
      >
        <Typography variant="h1" sx={{ fontWeight: 700 }}>
          {number}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 500,
            textAlign: "center",
            wordWrap: "break-word",
            minWidth: "200px",
            margin: "1rem",
          }}
        >
          {description}
        </Typography>
      </Paper>
    </>
  );
}

export default RecuritmentProcessCard;
