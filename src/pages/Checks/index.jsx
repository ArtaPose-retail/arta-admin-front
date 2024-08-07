import { Box, Button } from "@mui/material";
import React from "react";
import Title from "../../components/UI/Title";
import { Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckTable from "../../components/Checks/CheckTable";
import { useNavigate } from "react-router-dom";
import reactRouts from "../../utils/reactRouts";
function Checks() {
    const navigate = useNavigate()
    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    return (
        <Box
            sx={{
                bgcolor: (theme) => theme.background.box,
                borderRadius: "12px",
                p: 1,
                m: 1,
            }}
        >
            <Box sx={{ ...center, justifyContent: "space-between" }}>
                <Title
                    title={"چک‌ها"}
                    Typoprops={{
                        fontSize: "20px",
                        fontWeight: 500,
                        color: (theme) => theme.typography.color,
                    }}
                />
                <Box sx={{ ...center }}>
                    <Button
                        onClick={() => navigate(reactRouts.checks.add)}
                        variant="contained"
                        sx={{
                            bgcolor: (theme) => theme.palette.darkBlue.main,
                            color: (theme) => theme.palette.text.primary,
                        }}
                    >
                        افزودن چک
                    </Button>

                </Box>
            </Box>


            <CheckTable />

        </Box>
    );
}

export default Checks;
