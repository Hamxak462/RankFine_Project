import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const clientsReviewes = [
  {
    title: "Best on the market",
    bodyText: "I love this product because the support is great. Please ...",
    footerTitle: "Worldtraveler",
  },
  {
    title: "Best on the market",
    bodyText: "I love this product because the support is great. Please ...",
    footerTitle: "Worldtraveler",
  },
  {
    title: "Best on the market",
    bodyText: "I love this product because the support is great. Please ...",
    footerTitle: "Worldtraveler",
  },
];

const ClientsReviewes = () => {
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            lineHeight: " 1.5",
            fontFamily: "Poppins !important",
            marginBottom: "20px",
          }}
        >
          <Typography variant="p" sx={{ fontSize: {xs:'25px', md:'30px'}, fontWeight: "600" }}>
            What Our Clients Are Saying
          </Typography>
          <Typography variant="p" sx={{ color: "#777", marginLeft:{xs:"30px"}}}>
            Read feedback from Agencies, In-House Marketing Teams & Individuals
            just like you!
          </Typography>
        </Grid>
        <Box
          sx={{
            margin: "10px auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: {sm:"20px", md:"25px"},
            flexWrap: "wrap",
          }}
        >
          <Grid
            item
            xs={10}
            sm={5}
            md={2}
            sx={{ boxShadow: "2px 2px 4px 2px lightgray", borderRadius: "5px" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: {xs : "14px",sm:"20px",md:"10px"},
                margin: "10px 10px",
                padding: "10px 0",
                textAlign: "center",
              }}
            >
              <Typography>Excellent</Typography>
              <Typography>
                <img
                  style={{ width: "90%" }}
                  src="images/1st_card_stars.png"
                  alt="1st_card_stars not found"
                />
              </Typography>
              <Typography sx={{ fontSize: "12px" }}>
                Based on <b>456 reviews</b>
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="images/backlink-star.png"
                  alt="backlink star Not founded"
                  style={{ width: "25px", marginRight: "5px" }}
                />
                Backlinks
              </Typography>
            </Box>
          </Grid>

          {clientsReviewes.map((review) => (
            <Grid
              item
              xs={10}
              sm={5}
              md={2}
              sx={{
                boxShadow: "2px 2px 4px 2px lightgray",
                borderRadius: "5px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: {xs:"15px" , sm:"15px", md:"10px"},
                  margin: {sm:"20px 0" , md:"10px 10px"},
                  padding: {xs:"29px 10px" , sm:"16px 10px" , md:"3px 3px", lg:"3px 7px"}
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="images/1st_card_stars.png"
                    alt=""
                    style={{ width: "50%" }}
                  />
                  <Typography sx={{fontSize:{sm:"16px", md:"13px"} , color: "#888" }}>
                    2day ago
                  </Typography>
                </Typography>
                <Typography
                  sx={{
                    fontSize: { sm: "12px", md: "13px" },
                  }}
                >
                  {review.title}
                </Typography>
                <Typography sx={{ fontSize: { sm: "14px", md:"11px", lg:"13px" } }}>
                  {review.bodyText}
                </Typography>
                <Typography sx={{ fontWeight: "600", fontSize:{sm:"12px", md:"14px"} }}>
                  {review.footerTitle}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Box>
      </Grid>
    </>
  );
};

export default ClientsReviewes;
