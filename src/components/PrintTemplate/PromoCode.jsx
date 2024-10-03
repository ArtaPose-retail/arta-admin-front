import React, { forwardRef } from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { QRCodeCanvas } from "qrcode.react";
import { center } from "../../styles/theme";
import { persianDate, toPersian } from "../../utils/setting";
const PromoCodePrint = forwardRef((props, ref) => {
    const { data } = props;
    console.log(data)
    return (
        <Box
            ref={ref}
            elevation={3}
            sx={{ padding: 2, width: "100%", borderRadius: "10px" }}
        >
            <Grid container spacing={2} alignItems="center">
                {/* QR Code */}
                <Grid item xs={4}>
                    <Box sx={{ width: "100%", height: "auto", ...center }}>
                        <QRCodeCanvas value={`${data?.code}`} />,
                    </Box>
                </Grid>

                {/* Promo Code Details */}
                <Grid item xs={8}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                        height="100%"
                    >
                        {/* Promo Code Number */}
                        <Typography
                            sx={{
                                border: "1px solid black",
                                padding: "5px",
                                borderRadius: "5px",
                                marginTop: "10px",
                            }}
                            textAlign="center"
                            fontWeight="bold"
                        >
                            {toPersian(data?.code)}
                        </Typography>

                        <Box sx={{ ...center, width: "100%", my: 1, gap: "5px" }}>
                            <Typography
                                textAlign="center"
                                sx={{
                                    border: "1px solid black",
                                    padding: "5px",
                                    borderRadius: "5px",
                                    width: "50%",
                                }}
                            >
                                مدت استفاده تا {persianDate(data?.end_time)}
                            </Typography>

                            <Typography
                                textAlign="center"
                                sx={{
                                    backgroundColor: "black",
                                    color: "white",
                                    padding: "5px",
                                    borderRadius: "5px",
                                    width: "50%",
                                }}
                            >
                                {toPersian(data?.amount)}{" "}
                                {data?.type != 0 ? "هزار تومان" : "درصد"}
                            </Typography>
                        </Box>

                        {/* Purchase Condition */}
                        <Typography
                            variant="body1"
                            textAlign="center"
                            sx={{
                                border: "1px solid black",
                                padding: "5px",
                                borderRadius: "5px",
                            }}
                        >
                            از خرید بالای {toPersian(data?.from_amount)} هزار تومان
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
});

export default PromoCodePrint;
