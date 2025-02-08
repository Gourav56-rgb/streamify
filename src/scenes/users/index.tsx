import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/Users";

const Users = () => {
  return (
    <Box m="20px">
      <Header title="Users Growth" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Users;
