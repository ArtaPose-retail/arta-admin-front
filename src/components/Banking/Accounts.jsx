import { Box } from "@mui/material";
import React from "react";
import Title from "../UI/Title";
import Card from "./Card";

function Accounts() {
    return (
        <Box
            sx={{
                width: "100%",
                borderRadius: "18px",
                bgcolor: (theme) => theme.background.box,
                p: 1.5,
            }}
        >
            <Title title={"حساب‌های متصل"} Typoprops={{
                fontSize: "20px!important",
                fontWeight: "medium"
            }} />
            <Card />


        </Box>
    );
}

export default Accounts;
