import { Add, Edit } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../utils/currency";
import { useLoadRents } from "./hooks/useLoadRentList";

export const MovieListPage = () => {
  const navigate = useNavigate();
  const {
    data: rents,
    isLoading: rentsLoading,
    isFetching: rentsFetching,
  } = useLoadRents({});

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
      field: "customerEmail",
      headerName: "E-mail do Cliente",
      width: 180,
    },
    {
      field: "price",
      headerName: "Preço",
      width: 110,
      renderCell: (row: any) => formatCurrency(row.value),
    },
    {
      field: "date",
      headerName: "Data da Locação",
      width: 150,
    }
  ];

  return (
    <div style={{ padding: 30 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: 700,
        }}
      >
        <Typography variant="h6" style={{ marginBottom: 20 }}>
          Locações
        </Typography>
        <Button
          variant="contained"
          style={{ width: 100, height: 35 }}
          onClick={() => navigate("create")}
        >
          <Add />
          Criar
        </Button>
      </div>
      <Box sx={{ height: 371, width: 700 }}>
        <DataGrid
          rows={rents || []}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          loading={rentsLoading || rentsFetching}
        />
      </Box>
    </div>
  );
};

export default MovieListPage;
