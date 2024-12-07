
import React, { forwardRef } from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import { center } from "../../styles/theme";
import { persianDate, separateBy3, toPersian } from "../../utils/setting";
import { BakeryDatamatrix } from "@barcode-bakery/barcode-react/datamatrix";

const PromoCodePrint = forwardRef((props, ref) => {
    const { data } = props;

    const temp = Array.isArray(data) ? data : [data];

    return (
        <Box
            ref={ref}
            sx={{
                padding: 1, // کاهش فاصله داخلی
                width: "45mm", // عرض ثابت
                height: "15mm", // ارتفاع ثابت
                borderRadius: "5px", // کاهش شعاع گوشه‌ها
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            {temp.map((item, index) => (
                <Box key={index} sx={{ height: "100%" }}>
                    <Grid container spacing={1} alignItems="center">
                        {/* QR Code */}
                        <Grid item xs={5}>
                            <Box
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    ...center,
                                }}
                            >
                                <BakeryDatamatrix
                                    text={`${item?.code}`}
                                    scale={5} // کوچک‌تر کردن QR Code
                                />
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
                                        padding: "2px", // کاهش فاصله داخلی
                                        borderRadius: "3px", // کاهش شعاع گوشه‌ها
                                        textAlign: "center",
                                        fontSize: "8px", // کاهش اندازه فونت
                                    }}
                                >
                                    {toPersian(item?.code ?? 0)}
                                </Typography>

                                <Box
                                    sx={{
                                        ...center,
                                        flexDirection: "column",
                                        width: "100%",
                                        my: 0.5,
                                        gap: "2px", // کاهش فاصله بین آیتم‌ها
                                    }}
                                >
                                    <Typography
                                        textAlign="center"
                                        sx={{
                                            border: "1px solid black",
                                            padding: "2px", // کاهش فاصله داخلی
                                            borderRadius: "3px",
                                            width: "100%",
                                            fontSize: "7px", // کاهش اندازه فونت
                                        }}
                                    >
                                        مدت استفاده تا{" "}
                                        {persianDate(item?.end_time ?? new Date())}
                                    </Typography>

                                    <Typography
                                        textAlign="center"
                                        sx={{
                                            backgroundColor: "black",
                                            color: "white",
                                            padding: "2px",
                                            borderRadius: "3px",
                                            width: "100%",
                                            fontSize: "7px", // کاهش اندازه فونت
                                        }}
                                    >
                                        {toPersian(item?.amount ?? 0)}{" "}
                                        {item?.type !== 0 ? "هزار تومان" : "درصد"}
                                    </Typography>
                                </Box>

                                {/* Purchase Condition */}
                                <Typography
                                    variant="body2"
                                    textAlign="center"
                                    sx={{
                                        border: "1px solid black",
                                        padding: "2px",
                                        borderRadius: "3px",
                                        fontSize: "7px", // کاهش اندازه فونت
                                        width: '100%'
                                    }}
                                >
                                    از خرید بالای{" "}
                                    {toPersian(separateBy3(item?.from_amount ?? 0))}{" "}
                                    هزار تومان
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    {index !== temp.length - 1 && <Divider sx={{ my: 0.5 }} />}
                </Box>
            ))}
        </Box>
    );
});

export default PromoCodePrint;
