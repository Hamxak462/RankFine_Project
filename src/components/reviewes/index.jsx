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
          <Typography variant="p" sx={{ fontSize: "30px", fontWeight: "600" }}>
            What Our Clients Are Saying
          </Typography>
          <Typography variant="p" sx={{ color: "#555" }}>
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
            gap:"25px"
          }}
        >
          <Grid
            item
            xs={10}
            md={2}
            sx={{ boxShadow: "2px 2px 4px 2px lightgray",borderRadius: "5px", }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                margin: "10px 10px",
                padding: "20px 0",
                textAlign: "center",
                
              }}
            >
              <Typography>Excellent</Typography>
              <Typography>
                <img
                  style={{ width: "100%" }}
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
            <Grid item xs={10} md={2} sx={{boxShadow: "2px 2px 4px 2px lightgray",borderRadius: "5px", }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  margin: "10px 10px",
                  padding: "20px 10px",
                  
                }}
              >
              
                <Typography sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                  <img src="images/1st_card_stars.png" alt="" style={{width:"50%"}} /> <span style={{fontSize: "12px", color:"#888"}}>2day ago</span>
                </Typography>
                <Typography>{review.title}</Typography>
                <Typography sx={{fontSize:"12px"}} >{review.bodyText}</Typography>
                <Typography>{review.footerTitle}</Typography>
              </Box>
            </Grid>
          ))}
        </Box>
      </Grid>
    </>
  );
};

export default ClientsReviewes;
