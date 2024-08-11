import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { persianDate, separateBy3, toPersian, toastHandler } from "../../utils/setting";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import theme from "../../styles/theme";
function CheckCard() {
    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    const deleteBtn = () => {
        toastHandler("ایتم مورد  نظر حذف شد", "warning");
    };
    return (
        <>
            <Box
                sx={{
                    borderRadius: "12px",
                    bgcolor: (theme) => theme.palette.disable.main,
                    ...center,
                    justifyContent: "space-evenly",
                    p: 2,
                    width: "100%"
                }}
            >
                <Box sx={{ ...center, flexDirection: "column", alignItems: "start", width: "100%" }}>
                    <Box sx={{ ...center, p: 1 }}>
                        <Typography
                            sx={{
                                fontSize: "14px",
                                fontWeight: 500,
                                color: (theme) => theme.palette.text.lightgray,
                            }}
                        >
                            شماره چک:
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "14px",
                                fontWeight: 500,
                                color: (theme) => theme.palette.text.primary,
                            }}
                        >
                            {toPersian("350")}
                        </Typography>
                    </Box>

                    <Box sx={{ ...center, }}>
                        <Typography
                            sx={{
                                fontSize: "14px",
                                fontWeight: 500,
                                color: (theme) => theme.palette.text.lightgray,
                            }}
                        >
                            مبلغ چک:
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "14px",
                                fontWeight: 500,
                                color: (theme) => theme.palette.text.primary,
                            }}
                        >
                            {toPersian(separateBy3("35000000"))} ریال
                        </Typography>
                    </Box>
                    <Box sx={{ ...center, mt: 1 }}>
                        <Typography
                            sx={{
                                fontSize: "14px",
                                fontWeight: 500,
                                color: (theme) => theme.palette.text.lightgray,
                            }}
                        >
                            تاریخ:
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "14px",
                                fontWeight: 500,
                                color: (theme) => theme.palette.text.primary,
                            }}
                        >
                            {persianDate()}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ ...center, flexDirection: "column", gap: "15px" }}>

                    <EditIcon
                        sx={{
                            fontSize: "30px",
                            borderRadius: "6px",
                            bgcolor: (theme) => theme.background.box,
                            fill: (theme) => theme.palette.disable.main,
                        }}
                    />
                    <DeleteOutlineIcon
                        onClick={() => deleteBtn()}
                        sx={{
                            fontSize: "30px",
                            borderRadius: "6px",
                            fill: (theme) => theme.palette.warning.main,
                            bgcolor: (theme) => theme.background.box,
                            cursor: "pointer"
                        }}
                    />

                </Box>
            </Box>
        </>
    );
}

export default CheckCard;
