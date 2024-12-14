import { Box, Grid } from "@mui/material";
import React from "react";
import NewFactor from "../components/HomePage/NewFactor";
import ProductsSection from "../components/HomePage/ProductsSection";
import PurchaseInformation from "../components/HomePage/PurchaseInformation";
import { center } from "../styles/theme";
import logo from "../Assets/images/logo.png"
import name from "../Assets/images/logoname.png";

function Home() {
    return (
        <Box sx={{ ...center, height: "100dvh", width: "100dvw" }}>


            <Box sx={{ ...center, flexDirection: "column" }}>
                <img src={logo} width={150} height={110} />
                <img src={name} width={150} height={40} />
            </Box>
        </Box>
    );
}

export default Home;
