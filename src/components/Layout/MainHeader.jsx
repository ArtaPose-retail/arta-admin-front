"use client";
import React, { useEffect, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { headerItems } from "../../utils/data";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import moment from "jalali-moment";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { Link, useLocation } from "react-router-dom";
import reactRouts from "../../utils/reactRouts";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFullscrenn } from "../../Redux/Slices/general";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
// import SearchDialog from '../Search/SearchDialog';
import { separateBy3, toPersian } from "../../utils/setting";
import ScaleOutlinedIcon from '@mui/icons-material/ScaleOutlined';

function MainHeader() {
    const { isfullScrenn } = useSelector((state) => state.general);
    const [time, setTime] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(
                toPersian(
                    moment(new Date(), "YYYY-MM-DD")
                        .locale("fa")
                        .format("HH:mm - YYYY/MM/D")
                )

            );
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const navigatehandler = (name) => {
        navigate(`/${name}`);
    };

    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    const { scaleData } = useSelector(state => state.sellPage)
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                p: 2,
                background: (theme) => theme.background.default,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "fit-content",
                    height: "fit-content",
                    boxSizing: "border-box",
                    overflow: "hidden",
                    // border: (theme) => `1px solid ${theme.palette.divider}`,
                    borderRadius: 1,
                    bgcolor: "background.paper",
                    // bgcolor: (theme) => location.pathname === item.path ? theme.palette.darkBlue.main : "background.paper",
                    color: "text.secondary",
                    p: 0.5,
                    "& hr": {
                        mx: 0.5,
                    },
                }}
            >
                {headerItems.map((item, index) => (
                    <>
                        <Box
                            key={index}
                            sx={{
                                Height: "100%",
                                bgcolor: (theme) =>
                                    location.pathname === item.path
                                        ? theme.palette.darkBlue.main
                                        : "background.paper",
                                borderRadius: 1,
                            }}
                        >
                            <Link key={index} to={item.path}>
                                <Typography
                                    sx={{
                                        color: (theme) =>
                                            location.pathname == item.path
                                                ? theme.palette.text.primary
                                                : theme.palette.disable.main,
                                        m: 2,
                                        fontSize: "12px",
                                    }}
                                >
                                    {item.title}
                                </Typography>
                            </Link>
                        </Box>
                        {location.pathname !== item.path && (index !== headerItems.length - 1 && (
                            <Divider orientation="vertical" variant="middle" flexItem />
                        ))}
                    </>
                ))}
            </Box>
            <Box sx={{ display: "flex", gap: "10px" }}>
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
                <Link to={reactRouts.banking.Otp}>
                    <IconButton
                        aria-label="delete"
                        size="large"
                        sx={{
                            border: "1px solid #DEDEDE",
                            borderRadius: "8px",
                            p: 2,
                            "&:hover": { bgcolor: (theme) => theme.palette.text.secondary },
                            bgcolor: (theme) =>
                                location.pathname.includes("/banking")
                                    ? theme.palette.text.secondary
                                    : theme.background.box,
                        }}
                    >
                        <AccountBalanceIcon fontSize="inherit" sx={{
                            fill: (theme) =>
                                location.pathname.includes("/banking")
                                    ? theme.palette.text.primary
                                    : "",
                        }} />
                    </IconButton>
                </Link>
                <Link to={reactRouts.notifications.main}>
                    <IconButton
                        aria-label="delete"
                        size="large"
                        sx={{
                            border: "1px solid #DEDEDE",
                            borderRadius: "8px",
                            p: 2,
                            "&:hover": { bgcolor: (theme) => theme.palette.text.secondary },
                            bgcolor: (theme) =>
                                location.pathname.includes("/notifications")
                                    ? theme.palette.text.secondary
                                    : theme.background.box,
                        }}
                    >
                        <NotificationsNoneOutlinedIcon fontSize="inherit" sx={{
                            fill: (theme) =>
                                location.pathname.includes("/notifications")
                                    ? theme.palette.text.primary
                                    : "",
                        }} />
                    </IconButton>
                </Link>

                {/* <SearchDialog /> */}
                <Box
                    sx={{
                        ...center,
                        bgcolor: (theme) => theme.palette.text.secondary,
                        // width: "",
                        px: 1,
                        borderRadius: "12px",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "14px",
                            fontWeight: "bold",
                            px: 0.5,
                            color: (theme) => theme.palette.text.primary,
                        }}
                    >
                        {time}
                    </Typography>
                </Box>

                <Box

                    sx={{
                        ...center,
                        bgcolor: (theme) => theme.palette.icon.primary,
                        borderRadius: "12px",
                        gap: "8px",
                        px: 1,
                        cursor: "pointer",
                    }}
                >

                    <Typography
                        sx={{
                            fontSize: "16px",
                            fontWeight: "bold",
                            color: (theme) => theme.palette.text.primary,
                            display: "flex",

                        }}
                    >

                        {toPersian(separateBy3(scaleData?.weight ?? 0))}
                        Kg
                    </Typography>
                    <ScaleOutlinedIcon sx={{ fill: theme => theme.palette.text.primary }} />

                </Box>
            </Box>
        </Box>
    );
}

export default MainHeader;
