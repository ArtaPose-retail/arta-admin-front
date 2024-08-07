import { Box, Grid } from "@mui/material";
import React from "react";
import Credit from "../../components/Wallet/Credit";
import Transections from "../../components/Wallet/Transections";
import TransectionsTable from "../../components/Wallet/TransectionsTable";

const Wallet = () => {
  return (
    <Box sx={{ p: 2, width: "100%" }}>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Credit />
        </Grid>
        <Grid item xs={5}>
          <Transections />
        </Grid>
      </Grid>
      <TransectionsTable />
    </Box>
  );
};

export default Wallet;
