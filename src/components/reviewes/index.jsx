import { Grid, Typography } from "@mui/material";
import React from "react";

const ClientsReviewes = () => {
  return (
    <>
      <Grid container>
        <Grid item sm={12} md={12} sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            lineHeight: " 1.5",
            fontFamily: "Poppins !important"
            
        }}>
          <Typography variant="p" sx={{fontSize:"30px" ,fontWeight: "600"}}>What Our Clients Are Saying</Typography>
          <Typography variant="p" sx={{ color : "#555" }} >Read feedback from Agencies, In-House Marketing Teams & Individuals just like you!</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default ClientsReviewes;
