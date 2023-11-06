// import React from "react";
import { Box, Stack, Typography } from "@mui/material";
function ContactUs() {
  return (
    <>
      <Stack
        direction={{ md: "column", sm: "column", xs: "column" }}
        spacing={3}
        sx={{
          backgroundColor: "#747fe2",
          alignItems: "center",
          padding: { md: "3rem", sm: "2rem", xs: "1rem" },
          justifyContent: "center",
        }}
      >
        <Typography variant="h3" component="div">
          <strong> Contact Us</strong>
        </Typography>
        <Stack
          direction={{ md: "row", xs: "column", sm: "column" }}
          sx={{
            width: "100%",
            backgroundColor: "#d9d9d9",
            padding: { md: "2rem", sm: "1rem" },
            borderRadius: "10px",
            boxShadow: "2px 5px 20px rgba(0,0,0,0.5)",
          }}
        >
          <Stack
            spacing={4}
            direction="column"
            sx={{
              width: {
                md: "50%",
                sm: "100%",
                xs: "100%",
              },
              alignItems: "center",
              justifyContent: "center",
              padding: { md: "3rem", sm: "2rem", xs: "1.5rem" },
            }}
          >
            <Typography variant="h3" component="div">
              <strong>Office Address</strong>
            </Typography>
            <Typography variant="h4" component="div">
              <p>
                <strong>Government College Of Engineering</strong>
                <br /> Railway Station Road, Osmanpura <br /> Aurangabad,
                Maharashtra, <br /> India - 431005. <br /> Phone No:
                0240-2366101
              </p>
            </Typography>
          </Stack>
          <Stack
            sx={{
              width: { md: "100%", sm: "100%", xs: "100%" },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.3417419352527!2d75.32125997522559!3d19.867786531506734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9861a6d01f43%3A0x3a1b932d329091e9!2sGovernment%20College%20Of%20Engineering%2C%20Aurangabad!5e0!3m2!1sen!2sin!4v1698767976691!5m2!1sen!2sin"
              width="100%"
              height="500px"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              //   referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default ContactUs;
