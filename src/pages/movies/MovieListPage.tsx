import { Add } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import movies from "./movies.json";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Código",
  },
  {
    field: "description",
    headerName: "Título do Filme",
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
  },
  {
    field: "customerEmail",
    headerName: "E-mail do Cliente",
    width: 170,
  },
  {
    field: "startDate",
    headerName: "Data do Aluguel",
    width: 150,
  },
  {
    field: "endDate",
    headerName: "Data de Devolução",
    width: 150,
  },
];

export const MovieListPage = () => {
  return (
    <div style={{ padding: 30 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 830 }}>
        <Typography variant="h6" style={{ marginBottom: 20 }}>
          Alugueis
        </Typography>
        <Button variant="contained" style={{ width: 20, height: 40 }}>
          <Add />
        </Button>
      </div>
      <Box sx={{ height: 371, width: 830 }}>
        {/* <DataGrid
          rows={movies?.data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        /> */}
      </Box>
    </div>
  );
};

export default MovieListPage;
