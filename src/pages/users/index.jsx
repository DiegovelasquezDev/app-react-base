import React from "react";
import {
  Box,
  Button,
  Chip,
  IconButton,
  InputBase,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme/theme";
import Header from "../../components/Header";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const Users = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Box m="20px">
      <Header title="USUARIOS" subtitle="Listado de usuario " />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <Box display="flex" justifyContent="end" mt="20px" p="4px">
          <Box
            display="flex"
            backgroundColor={colors.primary[400]}
            borderRadius="3px"
            mr="5px"
          >
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
            <IconButton type="button" sx={{ p: 1 }}>
              <SearchIcon />
            </IconButton>
          </Box>
          <Button type="submit" color="secondary" variant="contained">
            Crear usuario
          </Button>
        </Box>
        {/* table */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Documento</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Nivel de acceso</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>1001643426</TableCell>
                <TableCell>Diego Alejandro Velasquez Araque</TableCell>
                <TableCell>diego.velasquez.dev@gmail.com</TableCell>
                <TableCell>
                  <Chip
                    label="Super admin"
                    color="warning"
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>
                  <Tooltip title="Editar">
                    <IconButton>
                      <EditIcon color={colors.grey[100]} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Eliminar">
                    <IconButton>
                      <DeleteIcon color={colors.grey[100]} />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>1001643426</TableCell>
                <TableCell>Diego Alejandro Velasquez Araque</TableCell>
                <TableCell>diego.velasquez.dev@gmail.com</TableCell>
                <TableCell>
                  <Chip label="Admin" color="success" variant="outlined" />
                </TableCell>
                <TableCell>
                  <Tooltip title="Editar">
                    <IconButton>
                      <EditIcon color={colors.grey[100]} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Eliminar">
                    <IconButton>
                      <DeleteIcon color={colors.grey[100]} />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>1001643426</TableCell>
                <TableCell>Diego Alejandro Velasquez Araque</TableCell>
                <TableCell>diego.velasquez.dev@gmail.com</TableCell>
                <TableCell>
                  <Chip
                    label="Nutricion"
                    color="secondary"
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>
                  <Tooltip title="Editar">
                    <IconButton>
                      <EditIcon color={colors.grey[100]} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Eliminar">
                    <IconButton>
                      <DeleteIcon color={colors.grey[100]} />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>1001643426</TableCell>
                <TableCell>Diego Alejandro Velasquez Araque</TableCell>
                <TableCell>diego.velasquez.dev@gmail.com</TableCell>
                <TableCell>
                  <Chip
                    label="Trabajo social"
                    color="secondary"
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>
                  <Tooltip title="Editar">
                    <IconButton>
                      <EditIcon color={colors.grey[100]} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Eliminar">
                    <IconButton>
                      <DeleteIcon color={colors.grey[100]} />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>1001643426</TableCell>
                <TableCell>Diego Alejandro Velasquez Araque</TableCell>
                <TableCell>diego.velasquez.dev@gmail.com</TableCell>
                <TableCell>
                  <Chip
                    label="Psicologia"
                    color="secondary"
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>
                  <Tooltip title="Editar">
                    <IconButton>
                      <EditIcon color={colors.grey[100]} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Eliminar">
                    <IconButton>
                      <DeleteIcon color={colors.grey[100]} />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={100}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Box>
  );
};

export default Users;
