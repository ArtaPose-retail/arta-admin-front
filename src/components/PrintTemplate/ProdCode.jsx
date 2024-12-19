import React, { forwardRef, useEffect, useImperativeHandle } from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import { center } from "../../styles/theme";
import { persianDate, separateBy3, toPersian } from "../../utils/setting";
import { BakeryDatamatrix } from "@barcode-bakery/barcode-react/datamatrix";
import { useDispatch, useSelector } from "react-redux";
import { singleProd } from "../../Redux/Slices/Accounting/Products/product";

const ProdCode = (props) => {
    const { data, id, code } = props;
    return (
        <>
            <Box
                // ref={ref}
                id={id}
                sx={{
                    padding: 0, // کاهش فاصله داخلی
                    width: "45mm", // عرض ثابت
                    height: "12mm", // ارتفاع ثابت

                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <Box sx={{ height: "100dvh", width: "100dvw", p: 1 }}>
                    <Grid
                        sx={{
                            width: "100%",
                            height: "100%",
                            ...center,
                        }}
                    // spacing={1}
                    // alignItems="center"
                    >
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
                                    text={`${data?.code ?? 0}`}
                                    scale={3.75} // کوچک‌تر کردن QR Code
                                />
                            </Box>
                        </Grid>
                        {/* Promo Code Details */}
                        <Grid
                            item
                            xs={6}
                            sx={{
                                height: "90dvh",
                                width: "100dvw",
                            }}
                        >
                            <Box
                                sx={{
                                    ...center,
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography
                                    textAlign="center"
                                    sx={{
                                        // border: "1px solid black",
                                        padding: "2px", // کاهش فاصله داخلی
                                        borderRadius: "3px",
                                        width: "100%",
                                        fontSize: "8px", // کاهش اندازه فونت
                                        fontWeight: "bold",
                                    }}
                                >
                                    {data?.title}
                                </Typography>

                                <Typography
                                    textAlign="center"
                                    sx={{
                                        border: "1px solid black",
                                        padding: "2px",
                                        borderRadius: "3px",
                                        width: "100%",
                                        fontSize: "8px", // کاهش اندازه فونت
                                        fontWeight: "900",
                                    }}
                                >
                                    {toPersian(data?.code ?? 0)}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    textAlign="center"
                                    sx={{
                                        padding: "2px",

                                        fontSize: "10px", // کاهش اندازه فونت
                                        width: "100%",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {toPersian(separateBy3(data?.price ?? 0))} ریال
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};

export default ProdCode;
