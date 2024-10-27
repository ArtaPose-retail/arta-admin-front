import React, { forwardRef } from "react";
import { Box, Typography, Grid, Paper, Divider } from "@mui/material";
import { center } from "../../styles/theme";
import { persianDate, separateBy3, toPersian } from "../../utils/setting";
import { BakeryDatamatrix } from "@barcode-bakery/barcode-react/datamatrix";


const PromoCodePrint = forwardRef((props, ref) => {
    const { data } = props;

    const temp = Array.isArray(data) ? data : [data];

    return (
        <Box
            ref={ref}
            sx={{ padding: 2, width: "50%", borderRadius: "10px" }}
        >
            {temp.map((item, index) => (
                <>
                    <Grid container spacing={2} alignItems="center">
                        {/* QR Code */}
                        <Grid item xs={5}>
                            <Box sx={{ width: "100%", height: "auto", ...center }}>
                                <BakeryDatamatrix text={`${item?.code}`} scale={10} />,
                            </Box>
                        </Grid>

                        {/* Promo Code Details */}
                        <Grid item xs={7}>
                            <Box
                                sx={{
                                    ...center,
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    height: "100%",
                                    width: "100%",
                                }}
                            >
                                {/* Promo Code Number */}
                                <Typography
                                    sx={{
                                        width: "100%",
                                        border: "1px solid black",
                                        padding: "5px",
                                        borderRadius: "5px",
                                        marginTop: "10px",
                                        textAlign: "center",
                                        fontSize: "bold",
                                    }}
                                >
                                    {toPersian(item?.code ?? 0)}
                                </Typography>

                                <Box
                                    sx={{
                                        ...center,
                                        height: "100%",
                                        width: "100%",
                                        my: 1,
                                        gap: "5px",
                                    }}
                                >
                                    <Typography
                                        textAlign="center"
                                        sx={{
                                            border: "1px solid black",
                                            padding: "5px",
                                            borderRadius: "5px",
                                            width: "50%",
                                            height: "100%",
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
                                            height: "100%",
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
