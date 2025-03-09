import React from "react";
import { Box, Typography, Link, Grid, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const footerDetailsObj = [
  {
    title: "RANK REFINE",
    desc: "Drive organic growth, enhance visibility, and dominate search engine rankings with our strategic expertise.",
    facebookSrc: "images/facebookIcon.png",
    twitterSrc: "images/twitterIcon.png",
    instagramSrc: "images/instagramIcon.png",
  },
  {
    title: "Menu",
    home: "Home",
    services: "Services",
    about: "About",
    contact: "Contact",
  },
];

const MainFooter = () => {
  return (
    <>
      <Box
        sx={{
          background:
            "linear-gradient(90deg,rgba(26, 30, 164, 1) 30%,rgba(1, 0, 40, 1) 90%)",
          color: "white",
          py: 5,
          px: { xs: 2, sm: 5 },
        }}
      >
        <Grid container spacing={4} sx={{ margin:"0 auto" , fontFamily:"arial"}}>
          {/* Left Section */}
          <Grid item xs={12} sm={6} md={4}  >
            <Typography variant="h6" fontWeight="bold">
              RANK REFINE
            </Typography>
            <Typography variant="body2" mt={1} sx={{ maxWidth: "280px" }}>
              Drive organic growth, enhance visibility, and dominate search
              engine rankings with our strategic expertise.
            </Typography>
            {/* Social Media Icons */}
            <Box mt={2}>
              <IconButton sx={{ color: "white" }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <Twitter />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <Instagram />
              </IconButton>
            </Box>
          </Grid>

          {/* Middle Sections */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" fontWeight="bold" sx={{lineHeight :"1"}}>
              Menu
            </Typography>
            <Box mt={1} sx={{lineHeight :"1.5"}}>
              <Link href="#" underline="none" color="inherit" display="block">
                Home
              </Link>
              <Link href="#" underline="none" color="inherit" display="block">
                Services
              </Link>
              <Link href="#" underline="none" color="inherit" display="block">
                About
              </Link>
              <Link href="#" underline="none" color="inherit" display="block">
                Contact Us
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold">
              Services
            </Typography>
            <Box mt={1}  sx={{lineHeight :"1.5"}}>
              <Link href="#" underline="none" color="inherit" display="block">
                Link Building
              </Link>
              <Link href="#" underline="none" color="inherit" display="block">
                Digital PR
              </Link>
              <Link href="#" underline="none" color="inherit" display="block">
                SEO
              </Link>
              <Link href="#" underline="none" color="inherit" display="block">
                Desing & Development
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold">
              Company
            </Typography>
            <Box mt={1} sx={{lineHeight :"1.5"}}>
              <Link href="#" underline="none" color="inherit" display="block">
                Site Map
              </Link>
              <Link href="#" underline="none" color="inherit" display="block">
                Terms of Use
              </Link>
              <Link href="#" underline="none" color="inherit" display="block">
                Privacy Notice
              </Link>
              <Link href="#" underline="none" color="inherit" display="block">
                Cookies
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Copyright */}
        <Box
          textAlign="center"
          mt={2}
          pt={2}
          borderTop="1px solid rgba(255, 255, 255, 0.2)"
        >
          <Typography variant="body2">
            © Copyright GB Marketers. All rights reserved
          </Typography>
        </Box>
      </Box>

      {/* <a href="#"><img src={footerDetailsObj[0].facebookSrc} alt="" /></a> */}
      {/* <RankRefine footerDetailsObjIndex1 = {footerDetailsObj[0]}  footerDetailsObjIndex2 = {footerDetailsObj[1]} /> */}
    </>
  );
};

export default MainFooter;
