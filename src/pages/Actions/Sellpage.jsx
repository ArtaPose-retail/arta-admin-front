import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import NewFactor from "../../components/HomePage/NewFactor";
import ProductsSection from "../../components/HomePage/ProductsSection";
import PurchaseInformation from "../../components/HomePage/PurchaseInformation";
import { useDispatch } from "react-redux";
import { PaymentBAList } from "../../Redux/Slices/Actions/Payment/payment";

function Sellpage() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(PaymentBAList());
    }, []);
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
