import { Box, Grid } from "@mui/material";
import React from "react";
import NewFactor from '../../components/HomePage/NewFactor';
import ProductsSection from '../../components/HomePage/ProductsSection';
import PurchaseInformation from '../../components/HomePage/PurchaseInformation';



function Sellpage() {
    return (
        <Box>
            <NewFactor />
            <Grid container spacing={2} sx={{ m: 1 }}>
                <Grid item xs={7.5} sx={{ height: "650px" }}>
                    <ProductsSection />
                </Grid>
                <Grid item xs={4.5} sx={{ height: "650px" }}>
                    <PurchaseInformation />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Sellpage;
