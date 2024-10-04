import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { center } from "../../../styles/theme";

export default function Lable({ title, info }) {
    return (
        <Card
            sx={{
                background: "#3A7817",
                width: "120px",
                height: "100%",
                ...center,
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            <Typography sx={{ color: "white", fontSize: "20px", fontWeight: "600" }}>
                {title}
            </Typography>
            <Box
                sx={{
                    bgcolor: "white",
                    m: 1,
                    width: "80%",
                    height: "40%",
                    borderRadius: "12px",
                    ...center,
                }}
            >
                <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
                    {info ?? "_"}
                </Typography>
            </Box>
        </Card>
    );
}
