import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./sideBar.css";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  useMediaQuery,
  Typography,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  CompareArrows as TransactionsIcon,
  ShowChart as StatisticsIcon,
  Menu as MenuIcon,
  Help as HelpIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import { Box } from "@mui/system";
import Logo from "../../assets/images/logo.svg";

function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleDrawerToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const drawerItems = [
    {
      text: "Dashboard",
      icon: <DashboardIcon />,
      path: "/dashboard",
    },
    {
      text: "Profile",
      icon: <PersonIcon />,
      path: "/profile",
    },
    {
      text: "Transactions",
      icon: <TransactionsIcon />,
      path: "/transactions",
    },
    {
      text: "Statistics",
      icon: <StatisticsIcon />,
      path: "/statistics",
    },
  ];

  const drawer = (
    <List
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "315px",
        height: "100vh",
      }}
    >
      <Box sx={{ marginX: "14px" }}>
        <img
          src={Logo}
          alt="logo"
          style={{ height: "40px", marginBottom: "36px" }}
        />
        <Typography mt={2} color="GrayText" paddingX="16px" paddingY="8px">
          User Panel
        </Typography>
        {drawerItems.map((item, index) => (
          // <NavLink
          //   to={item.path}mt={2}
          //   key={index}
          //   className="link"
          //   activeClassName="active"
          // >
          <ListItem
            button
            selected={window.location.pathname === item.path}
            key={item.path}
            onClick={handleDrawerToggle}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
          // </NavLink>
        ))}
      </Box>
      <Box sx={{ marginX: "14px" }}>
        <ListItem
          button
          selected={window.location.pathname === "/help"}
          onClick={handleDrawerToggle}
        >
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText>Help</ListItemText>
        </ListItem>
        <ListItem
          button
          selected={window.location.pathname === "/logout"}
          onClick={handleDrawerToggle}
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </ListItem>
      </Box>
    </List>
  );

  return (
    <>
      {isMobile ? (
        <div style={{ margin: "16px" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            variant="temporary"
            anchor="left"
            open={isMenuOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </div>
      ) : (
          <Box variant="permanent" anchor="left" maxWidth="315px">
            {drawer}
          </Box>
      )}
    </>
  );
}
export default Sidebar;
