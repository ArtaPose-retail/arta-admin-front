import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { center } from "../../styles/theme";

import { useDispatch, useSelector } from "react-redux";
import logo from "../../Assets/images/logo.png";
import logoNM from "../../Assets/images/logoname.png";
import { ProdDetails } from "../../components/Setting/DigitalLable/ProdDetails";
import { getProList } from "../../Redux/Slices/Accounting/Products/product";
import { useNavigate } from "react-router-dom";
import reactRouts from "../../utils/reactRouts";
import SingleProd from "../../components/Setting/DigitalLable/SingleProd";
import { Home } from "@mui/icons-material";

function DigitalLable() {
    const { isfullScrenn } = useSelector((state) => state.general);
    const dispatch = useDispatch();
    const { productList } = useSelector((state) => state.product);

    const [fullScrenn, setFullScrenn] = useState(false);
    const screenHandler = (status) => {
        setFullScrenn(status);
    };

    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getProList());
    }, []);
    return (
        <Box
            sx={{
                ...center,
                width: "100vw",
                height: "100vh",
                overflow: "Hidden",
            }}
        >
            <Grid
                container
                spacing={2}
                sx={{ ...center, p: 2, height: "100%", justifyContent: "space-around" }}
            >
                <Grid
                    xs={8}
                    sx={{
                        // p: 1,
                        overflow: "hidden",
                        height: "100%",
                        bgcolor: "white",
                        borderRadius: "18px",
                        mt: 0.5,
                        boxShadow: "0px 0px 9px 2px rgba(0, 0, 0, 0.25)",
                    }}
                >
                    {/* <Box sx={{ width: "100%", height: "100%", p: 0 }}> */}
                    <ProdDetails />
                    {/* </Box> */}
                </Grid>
                <Grid
                    xs={3}
                    sx={{
                        p: 1,
                        height: "100%",
                        bgcolor: "white",
                        borderRadius: "18px",
                        mt: 0.5,
                        boxShadow: "0px 0px 9px 2px rgba(0, 0, 0, 0.25)",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "end",
                        }}
                    >
                        <Home onClick={() => navigate(reactRouts.home)} />
                    </Box>
                    <Box
                        sx={{
                            ...center,
                            flexDirection: "column",
                            gap: "100px",
                            height: "40%",
                        }}
                    >
                        <Box
                            onClick={() => navigate(reactRouts.home)}
                            sx={{
                                cursor: "pointer",
                                ...center,
                                flexDirection: "column",
                                borderRadius: "12px",
                                p: 2,
                                width: 300,
                                gap: "15px",
                            }}
                        >
                            <img src={logo} height={120} width={120} />
                            <img src={logoNM} height={50} width={120} />
                            <Typography
                                sx={{ color: "#98A4B5", fontSize: "20px", fontWeight: 700 }}
                            >
                                WWW.ARTA-POS.COM
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            p: 3,
                            display: "flex",
                            flexDirection: "column",
                            gap: "15px",
                            height: "60%",
                            overflowY: "scroll",
                        }}
                    >
                        {productList?.map((item, index) => (
                            <SingleProd data={item} />
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default DigitalLable;
