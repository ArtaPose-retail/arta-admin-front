import React, { forwardRef, useEffect } from "react";
import { Box, Typography, Grid, Paper, Divider } from "@mui/material";
import { QRCodeCanvas } from "qrcode.react";
import { center } from "../../styles/theme";
import { persianDate, separateBy3, toPersian } from "../../utils/setting";
const PromoCodePrint = forwardRef((props, ref) => {
    const { data } = props;

    const temp = Array.isArray(data) ? data : [data];

    return (
        <Box
            ref={ref}
            elevation={3}
            sx={{ padding: 2, width: "80%", borderRadius: "10px" }}
        >
            {temp.map((item, index) => (
                <>
                    <Grid container spacing={2} alignItems="center">
                        {/* QR Code */}
                        <Grid item xs={4}>
                            <Box sx={{ width: "100%", height: "auto", ...center }}>
                                <QRCodeCanvas value={`${item?.code}`} />,
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
                                    {toPersian(item?.code ?? 0)}
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
                                        مدت استفاده تا {persianDate(item?.end_time ?? new Date())}
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
                                        {toPersian(item?.amount ?? 0)}{" "}
                                        {item?.type != 0 ? "هزار تومان" : "درصد"}
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
                                    از خرید بالای {toPersian(separateBy3(item?.from_amount ?? 0))}{" "}
                                    هزار تومان
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Divider sx={{ my: 2 }} />
                </>
            ))}
        </Box>
    );
});

export default PromoCodePrint;
