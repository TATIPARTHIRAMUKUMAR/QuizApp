import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import RuleOutlinedIcon from "@mui/icons-material/RuleOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useNavigate } from "react-router-dom";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import GLOBAL_CONSTANTS from "../GlobalConstants";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  background: "linear-gradient(1deg,#7b24d2 30%, #9c27b0)",
  color: "#FFFFFF",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  background: "linear-gradient(1deg,#7b24d2 30%, #9c27b0)",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const DrawerFooter = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  position: "fixed",
  bottom: 0,
  color: "#FFFFFF",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const CustomDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function HeaderFooterLayout({ Component }) {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const [menu, setMenu] = useState([]);

  useEffect(() => {
    if (GLOBAL_CONSTANTS?.user_cred?.role_id === 1) {
      setMenu(
        [
          {
            label: "Dashboard",
            route: "/dashboard",
            icon: <DashboardOutlinedIcon style={{ color: "white" }} />,
          },
          {
            label: "Quiz",
            route: "/quiz",
            icon: <RuleOutlinedIcon style={{ color: "white" }} />,
          },
          {
            label: "Users",
            route: "/users",
            icon: <AccountCircleOutlinedIcon style={{ color: "white" }} />,
          },

          {
            label: "Profile",
            route: "/profile",
            icon: <SettingsOutlinedIcon style={{ color: "white" }} />,
          },

          {
            label: "Create Lessons",
            route: "/createLessons",
            icon: <SettingsOutlinedIcon style={{ color: "white" }} />,
          },
        ]
      );
    } else {
      setMenu(
        [
          {
            label: "Dashboard",
            route: "/dashboard",
            icon: <DashboardOutlinedIcon style={{ color: "white" }} />,
          },
          {
            label: "Lessons",
            route: "/lessons",
            icon: <RuleOutlinedIcon style={{ color: "white" }} />,
          },
          {
            label: "Profile",
            route: "/profile",
            icon: <AccountCircleOutlinedIcon style={{ color: "white" }} />,
          },
        ]
      );
    }
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex", width: "100vw", height: "100vh", overflow: "hidden" }}>
      <CssBaseline />

      <CustomDrawer variant="permanent" open={open}>
        <DrawerHeader>
          {!open ? (
            <IconButton onClick={handleDrawerOpen}>
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon style={{ color: "white" }} />
              ) : (
                <ChevronRightIcon style={{ color: "white" }} />
              )}
            </IconButton>
          ) : (
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon style={{ color: "white" }} />
              ) : (
                <ChevronLeftIcon style={{ color: "white" }} />
              )}
            </IconButton>
          )}
        </DrawerHeader>
        <Divider />
        <List>
          {menu?.map((item, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                navigate(item?.route);
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item?.icon}
                </ListItemIcon>
                <ListItemText primary={item?.label} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <DrawerFooter>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              localStorage.clear();
              sessionStorage.clear();
              window.location.reload();
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <LogoutOutlinedIcon style={{ color: "#FFFFFF" }} />
              </ListItemIcon>
              <ListItemText primary={"Logout"} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </DrawerFooter>
      </CustomDrawer>
      <div className="py-4 overflow-y-hidden " style={{ flexGrow: 1, background: "#f5f5f5" }}>
        {Component} 
      </div>
    </Box>
  );
}

HeaderFooterLayout.propTypes = {
  Component: PropTypes.element.isRequired,
};