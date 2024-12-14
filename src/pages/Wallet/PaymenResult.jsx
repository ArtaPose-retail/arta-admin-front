import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import successful from "../../Assets/images/successful.png";
import failed from "../../Assets/images/failed.png";
import { Link, useLocation, useParams } from "react-router-dom";
import reactRouts from "../../utils/reactRouts";
import { toPersian } from "../../utils/setting";
function PaymenResult() {

    const queryParamsObject = {};
    const location = useLocation();

    let params = location.search.split("?")[1];

    for (const queryString of params.split("&")) {
        const [key, value] = queryString.split("=");
        queryParamsObject[key] = value;
    }


    console.log(queryParamsObject);



    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    return (
        <Box sx={{ ...center, height: "80vh", m: 1 }}>
            <Box
                sx={{
                    width: "60%",
                    height: "80%",
                    flexDirection: "column",
                    ...center,
                    borderRadius: "18px",
                    bgcolor: (theme) => theme.background.box,
                }}
            >
                <Box>
                    {queryParamsObject?.status === "failed" ? (
                        <img src={failed} width={150} height={150} />
                    ) : (
                        <img src={successful} width={150} height={150} />
                    )}
                </Box>
                {queryParamsObject?.status === "failed" ? (
                    <>
                        <Typography
                            sx={{
                                fontSize: "20px",
                                color: (theme) => theme.palette.warning.main,
                                fontWeight: 700,
                            }}
                        >
                            {" "}
                            پرداخت ناموفق! مجدد امتحان کنید
                        </Typography>
                        <Link to={reactRouts.wallet.main}>
                            <Typography
                                sx={{
                                    mt: 3,
                                    fontSize: "18px",
                                    color: (theme) => theme.palette.text.primary,
                                    fontWeight: 500,
                                    bgcolor: (theme) => theme.palette.darkBlue.main,
                                    p: 1,
                                    borderRadius: "12px",
                                    cursor: "pointer",
                                }}
                            >
                                {" "}
                                بازگشت به کیف پول
                            </Typography>
                        </Link>
                    </>
                ) : (
                    <>
                        <Typography
                            sx={{
                                fontSize: "20px",
                                color: (theme) => theme.palette.green.main,
                                fontWeight: 700,
                            }}
                        >
                            {" "}
                            پرداخت موفق
                        </Typography>
                        <Typography
                            sx={{
                                mt: 3,
                                fontSize: "18px",
                                color: (theme) => theme.palette.text.primary,
                                fontWeight: 500,
                                bgcolor: (theme) => theme.palette.darkBlue.main,
                                p: 1,
                                borderRadius: "12px",
                                cursor: "pointer",
                            }}
                        >
                            {" "}
                            کد پیگیری:
                            {toPersian(queryParamsObject?.transaction_id)}
                        </Typography>
                        <Link to={reactRouts.sellpage}>

                            <Typography
                                sx={{
                                    mt: 3,
                                    fontSize: "18px",
                                    color: (theme) => theme.palette.text.primary,
                                    fontWeight: 500,
                                    bgcolor: (theme) => theme.palette.darkBlue.main,
                                    p: 1,
                                    borderRadius: "12px",
                                    cursor: "pointer",
                                }}>
                                برگشت به صفحه اصلی
                            </Typography>
                        </Link>

                    </>
                )}
            </Box>
        </Box>
    );
}

export default PaymenResult;
