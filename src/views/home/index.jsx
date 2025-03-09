import React from "react";
import Hero from "../../components/hero";
import Explore from "../../components/explore";
import RankDigitalMarketing from "../../components/marketing";
import { Typography } from "@mui/material";
import ClientsReviewes from "../../components/reviewes";
import ContactUs from "../../components/contactUs";
import SeoMarketing from "../../components/seoMarketing";
import MainFooter from "../../components/footer/MainFooter";

function Home() {
  return (
    <>
      <Hero />
      <Explore />
      <RankDigitalMarketing />
      <ClientsReviewes />
      <ContactUs />
      <SeoMarketing />
      <MainFooter />
      {/* <Typography variant="h1" sx={{
        marginBottom : "220px"
      }}>Hamxa shah</Typography> */}
    </>
  );
}

export default Home;
