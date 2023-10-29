import { Box, IconButton, Tooltip, Typography, useTheme } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ColorModeContext, tokens } from "../../theme/theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [greeting, setGreeting] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    function updateGreeting() {
      const currentHour = new Date().getHours();
      if (currentHour >= 5 && currentHour < 12) {
        setGreeting(`Buenos días 😶‍🌫️`);
      } else if (currentHour >= 12 && currentHour < 18) {
        setGreeting(`Buenas tardes 😎`);
      } else {
        setGreeting(`Buenas noches 🫡`);
      }
    }

    updateGreeting();

    const interval = setInterval(updateGreeting, 60000);

    return () => clearInterval(interval);
  }, []);

  const onLogout = () => {
    navigate("/auth/login");
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2} paddingTop="30px">
      <Box display="flex">
        <Typography variant="h3" color={colors.grey[100]}>
          {greeting}
        </Typography>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <Tooltip title="Modo">
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
        </Tooltip>
        <Tooltip title="Cerrar sesion">
          <IconButton onClick={onLogout}>
            <LogoutIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Topbar;
