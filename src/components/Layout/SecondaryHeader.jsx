"use client";
import React, { useEffect, useState } from "react";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { headerItems } from "../../utils/data";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import moment from "jalali-moment";
import persianJs from "persianjs";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { Link, useLocation } from "react-router-dom";
import reactRouts from "../../utils/reactRouts";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFullscrenn } from "../../Redux/Slices/general";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { Height } from "@mui/icons-material";
import profile from "../../Assets/images/profileImage.png";
import SearchDialog from "../Search/SearchDialog";
import { separateBy3 } from "../../utils/setting";

function SecondaryHeader() {
    const { isfullScrenn } = useSelector((state) => state.general);
    const [time, setTime] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(
                persianJs(
                    moment(new Date(), "YYYY-MM-DD")
                        .locale("fa")
                        .format("HH:mm - YYYY/MM/D")
                )
                    .englishNumber()
                    .toString()
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
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                p: 1,
                borderRadius: "18px",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    p: 2,
                    background: (theme) => theme.background.box,

                    borderRadius: "18px",
                }}
            >
                <Box sx={{ ...center, gap: "15px" }}>
                    <Avatar
                        alt="ARTA-POSE"
                        src={profile}
                        onClick={() => profilehandler()}
                        sx={{
                            bgcolor: "#41669A",
                            width: 40,
                            height: 40,

                            ...center,
                            cursor: "pointer",
                            "& .MuiAvatar-img": {
                                width: "60%",
                                height: "80%",
                            },
                        }}
                    />
                    <Typography
                        sx={{
                            fontSize: "18px",
                            fontWeight: 700,
                            color: (theme) => theme.typography.color,
                        }}
                    >
                        پرهام حسن زاده
                    </Typography>
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
                            <AccountBalanceIcon
                                fontSize="inherit"
                                sx={{
                                    fill: (theme) =>
                                        location.pathname.includes("/banking")
                                            ? theme.palette.text.primary
                                            : "",
                                }}
                            />
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
                            <NotificationsNoneOutlinedIcon
                                fontSize="inherit"
                                sx={{
                                    fill: (theme) =>
                                        location.pathname.includes("/notifications")
                                            ? theme.palette.text.primary
                                            : "",
                                }}
                            />
                        </IconButton>
                    </Link>
                    {/* <IconButton
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
                        <SearchOutlinedIcon fontSize="inherit" />
                    </IconButton> */}
                    <SearchDialog />
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
                        onClick={() => navigatehandler("wallet")}
                        sx={{
                            ...center,
                            bgcolor: (theme) => theme.palette.primary.main,
                            borderRadius: "12px",
                            gap: "5px",
                            px: 1,
                            cursor: "pointer",
                        }}
                    >
                        <AccountBalanceWalletOutlinedIcon
                            sx={{ fill: (theme) => theme.palette.text.primary }}
                        />

                        <Typography
                            sx={{
                                fontSize: "16px",
                                fontWeight: "bold",
                                color: (theme) => theme.palette.text.primary,
                                gap: "8px",
                            }}
                        >
                            {persianJs(separateBy3("5500")).englishNumber().toString()}تومان
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default SecondaryHeader;
