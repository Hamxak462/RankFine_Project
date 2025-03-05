import React from "react";

import Header from "../header";
import { Box, Button, Grid, Typography } from "@mui/material";

const herocontents = [
  " Quick-turnaround services on demand.",
  "Quality that sets us apart from the rest.",
  "In-house ROI and margins unmatched.",
];

function Hero() {
  return (
    <>
      <Box
        sx={{
          background:
            "linear-gradient(90deg, rgba(3, 0, 155, 1) 30%, rgba(1, 0, 31, 1) 90%)",
          height: { md: "600px", sm: "100%" },
          padding: { md: "20px 50px", xs: "20px" },
        }}
      >
        <Header />
        <Grid container alignItems="center">
          <Grid
            item
            lg={6}
            md={6}
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              overflow: "hidden",

              paddingTop: { xs: "30px", md: "10px" },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                color: "white",
                fontSize: { xs: "36px", sm: "77px", md: "42px", lg: "55px" },
                lineHeight: { xs: "50px", sm: "65px", lg: "75px" },
              }}
            >
              All your <span style={{ color: "#E11919" }}>SEO</span> needs, one
              platform
            </Typography>

            {herocontents.map((conten, ind) => (
              <>
                <Typography
                  sx={{
                    fontSize: { xs: "14px", sm: "16px", md: "18px" },
                    color: "white",
                    fontWeight: "300",
                    display: "flex",
                    alignItems: "center",
                  }}
                  key={ind}
                >
                  <img
                    src="/images/setting.png"
                    style={{
                      width: "30px",
                      height: "30px",
                      marginRight: "8px",
                    }}
                    alt=""
                  />
                  {conten}
                </Typography>
              </>
            ))}
            <Typography
              sx={{
                fontSize: "12px",
                color: "#677CEDD6",
                background: "#677CEDD6",
                color: "#FFF",
                padding: "15px 16px",

                width: { md: "300px" },
              }}
            >
              We are rated 4.8 on Trust Pilot  based on 1318 reviews
            </Typography>
            <Button
              sx={{
                fontSize: "12px",
                color: "#677CEDD6",
                background: "#677CEDD6",
                color: "#FFF",
                padding: "15px 16px",
                width: "180px",
              }}
              variant="contained"
            >
              Create An Account
            </Button>
          </Grid>

          {/* img Grid */}
          <Grid item lg={5} md={6} xs={11}>
            <Box
              sx={{
                marginLeft: { md: "auto", lg: "auto" },
              }}
            >
              <img
                src="images/hero-arrow.png"
                style={{ width: "100%", height: "100%" }}
                alt="not found"
                srcset=""
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Hero;
