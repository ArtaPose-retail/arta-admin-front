import { Box, Button, Divider, FormControlLabel, Popover, Radio, Typography } from "@mui/material";
import React, { useRef } from "react";
import { separateBy3, toPersian, toastHandler } from "../../utils/setting";
import CustomerFactorTable from "./CustomerFactorTable";
import { center } from "../../styles/theme";

import ReactToPrint from "react-to-print";
import { Print } from "@mui/icons-material";
import ReceiptTemplate from "../PrintTemplate/Recipt";
import { useSelector } from "react-redux";

function CustomerFactor() {
    const ReciptRef = useRef();

    const { OrderPrice } = useSelector((state) => state.Order)

    return (
        <Box sx={{ width: "100%", height: "100%" }}>
            <Box sx={{ ...center, width: "100%", gap: "10px", my: 1 }}>
                <Box
                    sx={{
                        bgcolor: (theme) => theme.palette.darkBlue.main,
                        borderRadius: "7px",
                        width: "50%",
                        ...center,
                        p: 1,
                        gap: "5px",
                    }}
                >
                    <Typography
                        sx={{
                            color: (theme) => theme.palette.text.primary,
                            fontSize: "12px",
                            fontWeight: 500,
                        }}
                    >
                        شناسه فاکتور:
                    </Typography>
                    <Typography
                        sx={{
                            color: (theme) => theme.palette.text.primary,
                            fontSize: "12px",
                            fontWeight: 500,
                        }}
                    >
                        {toPersian("۲۳۹۰۴۸۵۹۰")}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        bgcolor: (theme) => theme.palette.green.main,
                        borderRadius: "7px",
                        width: "50%",
                        ...center,
                        p: 1,
                        gap: "5px",
                    }}
                >
                    <Typography
                        sx={{
                            color: (theme) => theme.palette.text.primary,
                            fontSize: "12px",
                            fontWeight: 500,
                        }}
                    >
                        مبلغ فاکتور:
                    </Typography>
                    <Typography
                        sx={{
                            color: (theme) => theme.palette.text.primary,
                            fontSize: "12px",
                            fontWeight: 500,
                        }}
                    >
                        {toPersian(separateBy3(OrderPrice.order_price ?? 0))}
                        &nbsp; ریال
                    </Typography>
                </Box>
            </Box>
            <CustomerFactorTable />
            <Box
                sx={{
                    borderRadius: "0px  0px 18px 18px",
                    bgcolor: (theme) => theme.background.box,
                    width: "100%",
                    ...center,
                    p: 1,
                    mt: 0.5,
                    // boxShadow: "0px 0px 9px 2px rgba(0, 0, 0, 0.25)",
                    borderTop: "1px solid lightgray",
                }}
            >
                <Box sx={{ ...center, width: "100%", gap: "10px" }}>

                    <Button sx={{ cursor: "auto" }} variant="outlined">
                        <ReactToPrint
                            onAfterPrint={() => console.log("after")}
                            trigger={() => (
                                <Print
                                    sx={{
                                        fill: (theme) => theme.palette.primary.light,
                                        cursor: "pointer",
                                    }}
                                />
                            )}
                            content={() => ReciptRef.current}
                        />
                    </Button>


                    <Box sx={{ display: "none" }}>
                        <ReceiptTemplate ref={ReciptRef} />
                    </Box>
                </Box>

            </Box>
        </Box>
    );
}

export default CustomerFactor;
