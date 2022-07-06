import { AccountCircle, LocalMovies } from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { MenuItem } from "../components/MenuItem";

export const Sidebar = () => {
  const drawerWidth = 240;

  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <MenuItem icon={<LocalMovies />} name="Locações" to="/rents" />
        <MenuItem icon={<AccountCircle />} name="Clientes" to="/customers" />
      </Drawer>
    </>
  );
};
