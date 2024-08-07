import { Avatar, Box, Grid, Hidden, IconButton, Typography } from "@mui/material";
import moment from "jalali-moment";

import React, { useEffect, useState } from "react";
import logo from "../../Assets/images/logo.png";
import logoNM from "../../Assets/images/logoname.png";
import waiting from "../../Assets/images/waiting.jpg";
import CustomerTable from "../../components/Customer/CustomerTable";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch, useSelector } from "react-redux";
import { setFullscrenn } from "../../Redux/Slices/general";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import { toPersian } from "../../utils/setting";
function CustomerPage() {
    const [showCustomer, setShowCustomer] = useState(false);
    const [time, setTime] = useState("00:00");
    const [day, setDate] = useState("00/00/00");

    const { isfullScrenn } = useSelector((state) => state.general);
    const dispatch = useDispatch();
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(
                toPersian(
                    moment(new Date(), "YYYY-MM-DD").locale("fa").format("HH:mm ")
                )

            );
            setDate(
                toPersian(
                    moment(new Date(), "YYYY-MM-DD")
                        .locale("fa")
                        .format(" dddd-YYYY/MM/D  ")
                )

            );
        }, 500);

        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        const showCustomerinfo = setInterval(() => {
            setShowCustomer(true)
        }, 5000);

        return () => clearInterval(showCustomerinfo);
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(
                toPersian(
                    moment(new Date(), "YYYY-MM-DD").locale("fa").format("HH:mm ")
                )

            );
            setDate(
                toPersian(
                    moment(new Date(), "YYYY-MM-DD")
                        .locale("fa")
                        .format(" dddd-YYYY/MM/D  ")
                )

            );
        }, 500);

        return () => clearInterval(interval);
    }, []);

    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    return (
        <Box
            sx={{
                ...center,
                width: "100vw",
                height: "100vh",
                overflow: "Hidden",
            }}
        >
            <Grid
                container
                spacing={2}
                sx={{ ...center, p: 2, height: "100%", justifyContent: "space-around" }}
            >
                <Grid
                    xs={8}
                    sx={{
                        // p: 1,
                        overflow: "hidden",
                        height: "100%",
                        bgcolor: "white",
                        borderRadius: "18px",
                        mt: 0.5,
                        boxShadow: "0px 0px 9px 2px rgba(0, 0, 0, 0.25)",
                    }}
                >
                    <Box sx={{ width: "100%", height: "100%", p: 0 }}>
                        {!showCustomer ? (
                            <img src={waiting} height={"100%"} width={"100%"} />
                        ) : (
                            <CustomerTable />
                        )}
                    </Box>
                </Grid>
                <Grid
                    x={3}
                    sx={{
                        p: 1,
                        height: "100%",
                        bgcolor: "white",
                        borderRadius: "18px",
                        mt: 0.5,
                        boxShadow: "0px 0px 9px 2px rgba(0, 0, 0, 0.25)",
                    }}
                >
                    <Box
                        sx={{
                            ...center,
                            flexDirection: "column",
                            gap: "100px",
                        }}
                    >
                        <Box
                            sx={{
                                ...center,
                                flexDirection: "column",
                                bgcolor: (theme) => theme.palette.darkBlue.main,
                                borderRadius: "12px",
                                p: 2,
                                width: 300,
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "60px",
                                    color: (theme) => theme.palette.text.primary,
                                    fontWeight: 700,
                                }}
                            >
                                {time}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "22px",
                                    color: (theme) => theme.palette.text.primary,
                                    fontWeight: 500,
                                }}
                            >
                                {day}
                            </Typography>
                        </Box>

                        {!showCustomer ? (
                            <>
                                {" "}
                                <Box sx={{ ...center, flexDirection: "column" }}>
                                    <img src={logo} height={120} width={120} />
                                    <img src={logoNM} height={50} width={120} />
                                </Box>
                                <Typography
                                    sx={{ color: "#98A4B5", fontSize: "20px", fontWeight: 700 }}
                                >
                                    WWW.ARTA-POS.COM
                                </Typography>
                            </>
                        ) : (
                            <Box sx={{ ...center, flexDirection: "column", gap: "20px" }}>
                                <Avatar
                                    sx={{
                                        bgcolor: (theme) => theme.palette.primary.main,
                                        width: 56,
                                        height: 56,
                                    }}
                                >
                                    <PersonIcon
                                        sx={{
                                            fill: (theme) => theme.palette.text.primary,
                                            fontSize: "50px",
                                        }}
                                    />
                                </Avatar>
                                <Typography
                                    sx={{
                                        color: (theme) => theme.typography.color,
                                        fontSize: "20px",
                                        fontWeight: 700,
                                    }}
                                >
                                    امیرحسین سلیمانی فرد
                                </Typography>
                                <Typography
                                    sx={{
                                        bgcolor: (theme) => theme.palette.text.secondary,
                                        color: (theme) => theme.palette.text.primary,
                                        p: 2,
                                        borderRadius: "12px",
                                        fontSize: "18px",
                                        fontWeight: 700,
                                    }}
                                >
                                    شناسه مشتری: ۳۷۵۴۴۶
                                </Typography>
                            </Box>
                        )}

                        {!isfullScrenn ? (
                            <IconButton
                                onClick={() => {
                                    dispatch(setFullscrenn(true));
                                }}
                                aria-label="delete"
                                size="large"
                                sx={{
                                    border: "1px solid #DEDEDE",
                                    borderRadius: "8px",
                                    p: 2,
                                    "&:hover": { bgcolor: (theme) => theme.palette.text.secondary },
                                    bgcolor: (theme) => theme.background.box,
                                }}
                            >
                                <FullscreenIcon fontSize="inherit" />
                            </IconButton>
                        ) : (
                            <IconButton
                                onClick={() => {
                                    dispatch(setFullscrenn(false));
                                }}
                                aria-label="delete"
                                size="large"
                                sx={{
                                    border: "1px solid #DEDEDE",
                                    borderRadius: "8px",
                                    p: 2,
                                    "&:hover": { bgcolor: (theme) => theme.palette.text.secondary },
                                    bgcolor: (theme) => theme.background.box,
                                }}
                            >
                                <FullscreenExitIcon fontSize="inherit" />
                            </IconButton>
                        )}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default CustomerPage;
