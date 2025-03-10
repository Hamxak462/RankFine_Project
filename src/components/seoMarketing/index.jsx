import { Box, Grid, Typography } from "@mui/material";
import React from "react";

// Cards Import
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

const SeoMarketingObj = [
  {
    src: "images/Seo1st-img.png",
    title: "What iis SEO? A Guide To Learn SEO For Beginner",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum. ut accumsan ut, posuere sit Lorem ipsum.",
  },
  {
    src: "images/seo2nd-img.png",
    title: "40+Ways to Seo Leads &Win Clients 2024",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum. ut accumsan ut, posuere sit Lorem ipsum.",
  },
  {
    src: "images/Seo3rd-img.png",
    title: "What is Link Building &Why is IT Important For SEO?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum. ut accumsan ut, posuere sit Lorem ipsum.",
  },
];

const SeoMarketing = () => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          marginTop: "40px",
          marginBottom: "20px",
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight:"30px",
          textAlign: "center",
          fontWeight: "700",
          fontSize: { sm: "25px", md: "30px" },
        }}
      >
        Here to Learn About SEO marketing?
      </Typography>

      {/* Card */}

      <Grid container md={10} sx={{ margin: "0 auto" }}>
        {SeoMarketingObj.map((item, index) => (
          <Grid item sm={7} md={3} sx={{ width: "325px", margin: "10px auto" }}>
            <Card sx={{ margin: "10px auto" }}>
              <CardMedia
                component="img"
                height="140"
                image={item.src}
                alt={item.title}
              />
              <CardContent sx={{ backgroundColor: "rgba(246, 247, 249, 1)" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  sx={{ fontSize: {xs:"16px" , sm:"19px", md:"12px", lg:"16px"}, fontWeight: "600" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="rgba(136, 136, 136, 1)"
                  sx={{
                    lineHeight: "1.5",
                    fontSize:{sm:"16px", md:"12px"}
                  }}
                >
                  {item.body}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{display:"flex", justifyContent:"center"}}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ fontSize:"12px", fontWeight:"600" , width: "200px", margin:"10px " , padding:"15px 0" }}>Visit academy</Button>
      </Box>
      {/* </Grid> */}
    </>
  );
};

export default SeoMarketing;
