import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import ExploreServicesCard from "../common/expolore-services";
const exploreCards = [
  {
    title: "Link Building",
    desc: "4 services available from Link Building.",
    img: "images/explore1.png",
  },
  {
    title: "Digital PR",
    desc: "4 services available from Link Building.",
    img: "images/explore2.png",
  },
  {
    title: "SEO",
    desc: "4 services available from Link Building.",
    img: "images/explore3.png",
  },
  {
    title: "Design & Development",
    desc: "4 services available from Link Building.",
    img: "images/explore4.png",
  },
];

function Explore() {
  return (
    <Stack spacing={3} sx={{ padding: { md: "20px 50px", sm: "10px 20px" }, }}>
      <Typography
        variant="h1"
        textAlign="center"
        sx={{ fontSize: "40px", fontWeight: "500" }}
      >
        Explore our premier services
      </Typography>

      <Typography
        color="#78847D"
        textAlign="center"
        sx={{ marginTop: "30px", marginBottom: "20px" }}
      >
        Ensuring your satisfaction is the heart of our mission, every step of
        the way
      </Typography>

      <Box
        sx={{
          marginTop: "50px",
          display: "flex",
          flexWrap: { xs: "wrap", lg: "nowrap" },
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {exploreCards.map((item, index) => (
          <ExploreServicesCard
            key={index}
            title={item.title}
            img={item.img}
            desc={item.desc}
          />
        ))}
      </Box>
    </Stack>
  );
}

export default Explore;
