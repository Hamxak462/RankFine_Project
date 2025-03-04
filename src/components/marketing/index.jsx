import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import DegitalMarketing from "../common/digital-marketing";

const rankDigitalMarketingContent1 = [
  {
    title: "We Have Proven Results",
    desc: "Why continue investing in SEO strategies that don't deliver the outcomes you need? It's time to stop wasting resources on approaches that don't work. At Rank Refine, we prioritize understanding your business objectives and requirements, crafting a tailored strategy to meet those goals effectively. Trust us to guide your SEO efforts towards real success",
  },
  {
    title: "Ethically Committed",
    desc: "At Rank Refine, we stand for transparency, integrity, and a deep respect for our clients. We oppose the idea of offering unnecessary services or a universal solution to everyone. Our focus is on delivering tailored strategies that lead to improved rankings, more traffic and conversions, and a greater return on investment for our clients.",
  },
  {
    title: "We Excel in Digital Marketing",
    desc: "Collaborating with a digital marketing agency that genuinely understands digital marketing should be a given, yet many agencies fall short in generating meaningful outcomes. Our methods are tried and true. In fact, most of our clients recoup the investment in their website within the first month through new business leads directly attributed to our digital marketing and SEO initiatives.",
  },
  {
    title: "We Put Customers First",
    desc: "At Rank Refine, we stand for transparency, integrity, and a deep respect for our clients. We oppose the idea of offering unnecessary services or a universal solution to everyone. Our focus is on delivering tailored strategies that lead to improved rankings, more traffic and conversions, and a greater return on investment for our clients.",
  },
];

function RankDigitalMarketing() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "30px",
        // marginBottom: "709px",
      }}
    >
      <Grid
        item
        lg={7}
        md={9}
        sm={12}
        sx={{
          margin: "0 auto",
          padding: "7px 23px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "16px", sm: "34px", md: "36px", lg: "35px" },
            lineHeight: { sm: "35px", md: "39px", lg: "45px" },
            textAlign: "center",
            width: { xs: "85%" },
            margin: "0 auto",
          }}
        >
          Why Choose Rank Refine For Your  Digital Marketing Agency?
        </Typography>
        <Typography
          component="div"
          sx={{
            textAlign: "center",
            fontSize: { xs: "10px", sm: "15px", md: "16px", lg: "16" },
            marginBottom: "10px",
            marginTop: "10px",
            padding: "10px",
          }}
        >
          Rank Refine is a dedicated team of 50 in-house SEO experts who have
          been delivering top-notch services to a wide array of clients since
          2014. Our commitment to excellence is unwavering; we prioritize
          quality over everything else. Our strategy is simple yet effective: by
          focusing on making our clients successful, we grow alongside them.
          Rest assured, we value your time as much as we do quality. Here are
          some reasons why:
        </Typography>
      </Grid>
      {/* Cards in Grid */}

      <Box
        sx={{
          display: { sm: "flex", md: "flex", lg: "flex" },
          justifyContent: "center",
          flexWrap: { xs: "wrap", sm: "wrap", md: "wrap", lg: "wrap" },
          overflow: "hidden",
        }}
      >
        {rankDigitalMarketingContent1.map((item, index) => (
          <DegitalMarketing key={index} title={item.title} desc={item.desc} />
        ))}
      </Box>
    </Grid>
  );
}

export default RankDigitalMarketing;
