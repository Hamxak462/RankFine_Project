import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const DegitalMarketing = ({ title, desc }) => {
  return (
    <>
      <Grid
        container
        lg={5}
        md={6}
        sm={6}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          
          marginBottom: "20px",
         
        }}
      >
        <Grid
          item
          lg={9}
          md={10}
          sm={10}
          xs={10}
          sx={{
            height:{xs:"270px", md:"340px"},

            margin: "15px auto",
            border: "1px solid",
            borderRadius: "10px",
            boxShadow: "4px 4px 0px blue",
            padding: "0px 20px",
            overflow: "hidden"
          }}
        >
          <Box
            sx={{
              marginTop: "2px",
              padding: "5px 0",
              overflow: "hidden",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontSize: {xs: "14px", md: "20px", lg: "22px"},
                margin: "10px auto",
                textAlign: "center",
                color: "#fff",
                backgroundColor: "#333",
                padding: "10px 20px",
                borderRadius: "10px",
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                fontSize: {xs: "14px",md: "17px"},
                textAlign: "center",
                overflow: "hidden",
              }}
            >
              {desc}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default DegitalMarketing;
