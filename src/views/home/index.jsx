import React from "react";
import Hero from "../../components/hero";
import Explore from "../../components/explore";
import RankDigitalMarketing from "../../components/marketing";
import { Typography } from "@mui/material";

function Home() {
  return (
    <>
      <Hero />
      <Explore />
      <RankDigitalMarketing />
      
      <Typography variant="h1" sx={{
        marginBottom : "220px"
      }}>Hamxa shah</Typography>
    </>
  );
}

export default Home;
