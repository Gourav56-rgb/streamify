import { Box } from "@mui/material";
import Header from "../../components/Header";
import Revenues from "../../components/Revenue";

const Revenue = () => {
  return (
    <Box m="20px">
      <Header title="Revenue Distribution" />
      <Box height="75vh">
        <Revenues />
      </Box>
    </Box>
  );
};

export default Revenue;
