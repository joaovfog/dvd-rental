import { Add } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { useLoadCustomers } from "./hooks/useLoadCustomers";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Código",
  },
  {
    field: "name",
    headerName: "Nome Completo",
    width: 150,
  },
  {
    field: "email",
    headerName: "E-mail",
    width: 170,
  },
  {
    field: "cpf",
    headerName: "CPF",
    width: 150,
  },
  {
    field: "address",
    headerName: "Endereço",
    width: 200,
  },
];

export const CustomerListPage = () => {
  const navigate = useNavigate();
  const {
    data: customers,
    isLoading: customersLoading,
    isFetching: customersFetching,
  } = useLoadCustomers({});

  return (
    <div style={{ padding: 30 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: 780,
        }}
      >
        <Typography variant="h6" style={{ marginBottom: 20 }}>
          Clientes
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
      <Box sx={{ height: 371, width: 780 }}>
        <DataGrid
          rows={customers || []}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          loading={customersLoading || customersFetching}
        />
      </Box>
    </div>
  );
};

export default CustomerListPage;
