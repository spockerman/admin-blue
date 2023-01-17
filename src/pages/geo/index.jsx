import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeoChart from "../../components/GeographyChart";

const Geo = () => {
  return (
    <Box m="20px">
      <Header title="Geo Chart" subtitle="Simple Geo Chart" />
      <Box height="75vh">
        <GeoChart/>
      </Box>
    </Box>
  );
};

export default Geo;
