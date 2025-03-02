import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
function ExploreServicesCard({ title, img, desc }) {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        height: "380px",
        width: "300px",
        borderRadius: "20px",
      }}
     >
      {/* Background Image */}
      <Box
        component="img"
        alt={title}
        src={img}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1, // Send image to background
        }}
      />

      {/* Overlay Box for Title and Description */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          height: "88%",

          color: "white",
          // textAlign: "center",
          padding: "20px",
        }}
       >
        <Box>
          <Typography
            textAlign="center"
            sx={{ marginTop: "10px", fontSize: "12px" }}
          >
            {desc}
          </Typography>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ fontSize: "30px" }}
            textAlign="center"
          >
            {title}
          </Typography>
        </Box>

        <Typography
          textAlign="center"
          sx={{ marginTop: "10px", fontSize: "12px" }}
        >
          {desc}
        </Typography>
      </Box>
    </Box>
  );
}

export default ExploreServicesCard;
