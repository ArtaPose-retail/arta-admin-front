import { Box, Grid } from "@mui/material";
import React from "react";
import FormSection from "./FormSection";
import TableSection from "./TableSection";

export const LableDiscount = () => {
    return (
        <Box sx={{ height: "100%", width: "100%", overflow: "scroll" }}>
            <Grid container sx={{ height: "100%", width: "100%", gap: "5px" }}>
                <Grid
                    xs={6.5}
                    sx={{
                        bgcolor: (theme) => theme.background.box,
                        height: "100%",

                        borderRadius: "15px"
                    }}
                >
                    <FormSection />
                </Grid>
                <Grid
                    xs={5}
                    sx={{
                        bgcolor: (theme) => theme.background.box,
                        height: "100%",

                        borderRadius: "15px"

                    }}
                >
                    {/* <TableSection /> */}
                </Grid>
            </Grid>
        </Box>
    );
};
