import { useState } from "react";

import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  Stack,
  styled,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { LogoClickable } from "@components/logo/LogoClickable";

import { navItems } from "../nav-items";
import { Navigation } from "../Navigation/Navigation";
import { NavigationMobile } from "../NavigationMobile/NavigationMobile";

const DRAWER_WIDTH = 270;

const LogoWrapper = styled(Box)(({ theme }) => ({
  height: 140,
  [theme.breakpoints.down("sm")]: {
    height: 80,
  },
  svg: {
    width: "100%",
    height: "100%",
  },
}));

export const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleMobileNavOpen = () => {
    setMobileNavOpen(true);
  };

  const handleMobileNavClose = () => {
    setMobileNavOpen(false);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "unset",
        overflow: "hidden",
      }}
    >
      <Toolbar>
        <Container>
          <Stack
            direction="row"
            alignItems={{ xs: "center", sm: "flex-start" }}
            spacing={2}
            justifyContent={{
              xs: "space-between",
              sm: "flex-start",
            }}
          >
            <LogoWrapper>
              <LogoClickable
                href="/"
                sx={{
                  position: "relative",
                  zIndex: 2,
                }}
              />
            </LogoWrapper>
            <Box
              py={{
                xs: 0,
                sm: 4,
              }}
            >
              {isMobile ? (
                <>
                  <IconButton onClick={handleMobileNavOpen}>
                    <MenuIcon />
                  </IconButton>

                  <Drawer
                    open={mobileNavOpen}
                    onClose={handleMobileNavClose}
                    variant="temporary"
                  >
                    <Box sx={{ width: DRAWER_WIDTH }}>
                      <NavigationMobile items={navItems} />
                    </Box>
                  </Drawer>
                </>
              ) : (
                <Navigation
                  items={navItems}
                  sx={{ position: "relative", zIndex: 1 }}
                />
              )}
            </Box>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
