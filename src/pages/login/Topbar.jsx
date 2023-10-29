import {
  Avatar,
  Box,
  IconButton,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme/theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2} paddingTop="30px">
      <Box display="flex">
        <Avatar
          src="../../assets/logoOpt.png"
          alt="Logo"
          style={{ width: "30px", height: "30px", marginRight: "10px" }}
        />
        <Box display="flex" flexDirection="column">
          <Typography
            variant="h1"
            color={colors.grey[100]}
            style={{ fontWeight: "bold", fontSize: "30px" }}
          >
            Nombre de la app
          </Typography>
        </Box>
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

        <Tooltip title="Github">
          <IconButton>
            <GitHubIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Topbar;
