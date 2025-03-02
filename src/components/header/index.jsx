import { Menu } from "@mui/icons-material";
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import React, { useState } from "react";

const NavLinks = [
//   {
//   title: "Home",
//   href: "/",
// },{
//   title: "About",
//   href: "/about",
// },{
//   title: "Contact",
//   href: "/contact",
// },{
//   title: "Services",
//   href: "/services",
// }
"Home", "About", "Contact", "Services"
];

function Header() {
  const [openNav, setOpenNav] = useState(false);

  const handleDrawerToggle = () => {
    setOpenNav(!openNav);
  };

  

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#182752",
          height: "80px",
          borderRadius : "5px",
        }}
      >
        <img
          src="images/logo2.png"
          style={{ width: "250px", height: "100%", overflow: "hidden" }}
          alt="Logo"
        />

        <List sx={{ display: { xs: "none", md: "flex" }, gap: 1}}>
          {NavLinks.map((link) => (
            <ListItem key={link}>
              <ListItemButton sx={{ color: "white" }}>{link}</ListItemButton>
            </ListItem>
          ))}

          <ListItem>
            <Button
              variant="outlined"
              sx={{ color: "white", borderColor: "white" }}
            >
              Login
            </Button>
          </ListItem>

          <ListItem>
            <Button variant="contained" sx={{ width: "100px" }}>
              Sign Up
            </Button>
          </ListItem>
        </List>

        {/* Drawer Toggle Button */}
        <Button
          onClick={handleDrawerToggle}
          sx={{ display: { xs: "block", md: "none" }, color: "white" }}
        >
          <Menu />
        </Button>

        {/* Mobile Drawer================================================= */}
        <Drawer open={openNav} onClose={handleDrawerToggle}>
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              width: 250,
              padding: 2,
              height: "100%",
              background: "#182752",
            }}
          >
            {NavLinks.map((link) => (
              <ListItem key={link}>
                <ListItemButton sx={{ color: "white" }}>{link}</ListItemButton>
              </ListItem>
            ))}

            <ListItem>
              <Button
                variant="outlined"
                sx={{ color: "white", borderColor: "white" }}
              >
                Login
              </Button>
            </ListItem>

            <ListItem>
              <Button
                variant="contained"
                sx={{ width: "100px", color: "white" }}
              >
                Sign Up
              </Button>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </>
  );
}

export default Header;
