import { Box } from "@mui/material";
import Header from "../../components/Header";
import Songs from "../../components/Songs";

const StreamedSongs = () => {
  return (
    <Box m="20px">
      <Header title="Streamed Songs" />
      <Box height="75vh">
        <Songs />
      </Box>
    </Box>
  );
};

export default StreamedSongs;
