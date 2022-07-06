import { Add } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useLoadCustomers } from "./hooks/useLoadCustomers";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Código",
  },
  {
    field: "firstname",
    headerName: "Primeiro Nome",
    width: 150,
  },
  {
    field: "lastname",
    headerName: "Último Nome",
  },
  {
    field: "email",
    headerName: "E-mail",
    width: 170,
  },
];

export const CustomerListPage = () => {
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
          maxWidth: 540,
        }}
      >
        <Typography variant="h6" style={{ marginBottom: 20 }}>
          Clientes
        </Typography>
        <Button variant="contained" style={{ width: 20, height: 40 }}>
          <Add />
        </Button>
      </div>
      <Box sx={{ height: 371, width: 540 }}>
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
