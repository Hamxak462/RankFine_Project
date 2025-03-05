import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <Grid
        container
        sx={{
            marginTop:"3rem",
          color: "#fff",
          background:
            "linear-gradient(90deg, rgba(102, 0, 119, 1) 30%, rgba(1, 0, 88, 1) 90%)",
        }}
      >
        <Grid
          item
          sm={12}
          md={6}
          sx={{
            margin: "30px auto",
            textAlign: "center",

          }}
        >
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: "17px",
           
            padding: "10px",
          }}>
          <Typography variant="h5" sx={{fontWeight:"600"}}>READY TO GROW YOUR BUSINESS?</Typography>
          <Typography variant="p" sx={{fontSize:"20px"}}>
            Contact us to work with a results-driven digital marketing agency
          </Typography>
          </Box>
          <Box
            sm={12}
            md={3}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              gap: "20px",
              marginTop: "10px",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                color: "rgba(255, 255, 255, 1)",
                borderColor: "#fff",
                marginTop: "20px",
                padding:"10px 9px"
              }}
            >
              <i class="fa-solid fa-message"></i> &nbsp; Get Free Proposal
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "rgba(255, 255, 255, 1)",
                borderColor: "#fff",
                marginTop: "20px",
              }}
            >
              <i class="fa-solid fa-phone"></i> &nbsp; Call +923485239377
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactUs;
