import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import GroupIcon from '@mui/icons-material/Group';
import Headphone from '@mui/icons-material/Headphones';
import CurrencyRupee from '@mui/icons-material/CurrencyRupee';
import EmojiEvents from "@mui/icons-material/EmojiEvents";
import Header from "../../components/Header";
import LineChart from "../../components/Users";
import StatBox from "../../components/StatBox";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Analytics Dashboard" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(15, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          sx={{ backgroundColor: colors.primary[400] }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Total Users"
            progress={0.75}
            increase="+14%"
            icon={
              <GroupIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          sx={{ backgroundColor: colors.primary[400] }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="5000"
            subtitle="Active Users"
            progress={0.50}
            increase="+21%"
            icon={
              <Headphone
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          sx={{ backgroundColor: colors.primary[400] }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="45000"
            subtitle="Total Streams"
            progress={0.30}
            increase="+5%"
            icon={
              <Headphone
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          sx={{ backgroundColor: colors.primary[400] }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="₹1,20,000"
            subtitle="Revenue"
            progress={0.80}
            increase="+43%"
            icon={
              <CurrencyRupee
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          sx={{ backgroundColor: colors.primary[400] }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Bruno Mars"
            subtitle="Top Artist"
            progress={0.95}
            increase="+10%"
            icon={
              <EmojiEvents
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 15"
          gridRow="span 4"
          sx={{ backgroundColor: colors.primary[400] }}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Users Growth
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                +12000
              </Typography>
            </Box>
          </Box>
          <Box height="580px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
