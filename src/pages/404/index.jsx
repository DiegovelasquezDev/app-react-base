import React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Typography, useTheme } from "@mui/material";
import Divider from "@mui/material/Divider";
import { tokens } from "../../theme/theme";

const Error404 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div className="app">
      <Container
        maxWidth="sm"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        <Typography
          variant="h5"
          color={colors.grey[100]}
          style={{
            fontWeight: "bold",
            fontSize: "15em",
            marginBottom: "20px",
            textAlign: "left",
          }}
        >
          404
        </Typography>
        <Typography
          variant="h5"
          color={colors.grey[100]}
          style={{
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          😶‍🌫️ Uh! lo siento la pagina que buscas no se encuentra disponible o no
          existe
        </Typography>
        <Divider
          style={{
            width: "45%",
            marginBottom: "20px",
            backgroundColor: colors.blueAccent[700],
          }}
        />
        <Button
          variant="outlined"
          fullWidth
          style={{
            marginTop: "20px",
            width: "60%",
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
          }}
        >
          volver a la pagina principal
        </Button>
      </Container>
    </div>
  );
};

export default Error404;
