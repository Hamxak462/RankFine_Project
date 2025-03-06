import React from "react";
import Hero from "../../components/hero";
import Explore from "../../components/explore";
import RankDigitalMarketing from "../../components/marketing";
import { Typography } from "@mui/material";
import ClientsReviewes from "../../components/reviewes";
import ContactUs from "../../components/contactUs";
import SeoMarketing from "../../components/seoMarketing";

function Home() {
  return (
    <>
      <Hero />
      <Explore />
      <RankDigitalMarketing />
      <ClientsReviewes />
      <ContactUs />
      <SeoMarketing />
      {/* <Typography variant="h1" sx={{
        marginBottom : "220px"
      }}>Hamxa shah</Typography> */}
    </>
  );
}

export default Home;
