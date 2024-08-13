import { Box } from "@mui/material";
import React from "react";
import FormSection from "../../components/Payment/FormSection";
import TableSection from "../../components/Payment/TableSection";


function PaymentParent() {
    return (
        <Box
            sx={{
                display: "flex",
                width: "100%",
                height: "90dvh",
                px: 1,
                gap: "20px",
            }}
        >
            <FormSection />

            <TableSection />
        </Box>
    );
}

export default PaymentParent;
