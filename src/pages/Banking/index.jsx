"use client";
import { useState } from "react";
import Title from "../../components/UI/Title";
import {
    Box,
    Button,
    InputAdornment,
    TextField,
    Typography,
} from "@mui/material";
import Accounts from "../../components/Banking/Accounts";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useNavigate } from "react-router-dom";
import reactRouts from "../../utils/reactRouts";
import { FullScreen } from "@chiragrupani/fullscreen-react";
import SearchIcon from "@mui/icons-material/Search";
import { center } from "../../styles/theme"
import Input from "../../components/UI/Input";
import CheckList from "../../components/Banking/CheckList";
import { NoItem } from "../../components/UI/NoItem";
function Banking() {
    const navigate = useNavigate();

    const [currentItem, setCurrentItem] = useState(0);

    const focusehandler = (curentItem) => {
        setCurrentItem(+curentItem);
    };
    const [fullScrenn, setFullScrenn] = useState(false);
    const screenHandler = (status) => {
        setFullScrenn(status);
    };

    const [age, setAge] = useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const lockBanking = () => {
        navigate(reactRouts.banking.Otp);
    };

    const [tabs, setTabs] = useState(1);

    const handleChangeTabs = (id) => {
        setTabs(+id);
    };


    return (
        <Box sx={{ p: 2, width: "100%" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Title
                    title={"بانکداری"}
                    Typoprops={{
                        fontSize: "24px!important",
                        fontWeight: 700,

                        mb: 2,
                    }}
                />
                <LockOpenIcon fontSize="large" onClick={() => lockBanking()} />
            </Box>
            <Accounts />
            <Box
                sx={{
                    width: "100%",
                    bgcolor: (theme) => theme.background.box,
                    p: 1,
                    borderRadius: "18px",
                    mt: 1,
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Box sx={{ display: "flex", gap: "10px" }}>
                    <TextField
                        value={age}
                        onChange={handleChange}
                        sx={{
                            border: "0px",

                            "& .MuiNativeSelect-select": {
                                color: "black",
                            },
                            borderRadius: "18px",
                        }}
                        select={true}
                        SelectProps={{
                            native: true,
                            style: {
                                background: "#F2F2F2",
                                color: "#000",
                                direction: "ltr",
                                border: "0px",
                            },
                        }}
                    >
                        <option value="">
                            <Typography sx={{ fontSize: "12px", color: "black" }}>
                                نوع عملیات
                            </Typography>
                        </option>
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </TextField>
                    <Input
                        type={"number"}
                        placeholder={"مبلغ را وارد کنید ..."}
                        hasIcon={true}
                        hasText={true}
                    />
                    <Input
                        type={"number"}
                        placeholder={"کد رهگیری را وارد کنید"}
                        hasIcon={false}
                        hasText={false}
                    />
                </Box>
                <Button
                    sx={{
                        bgcolor: (theme) => theme.palette.green.main,
                        color: (theme) => theme.palette.text.primary,
                        px: 4,
                        borderRadius: "15px",
                    }}
                    variant="contained"
                >
                    ثبت عملیات
                </Button>
            </Box>
            <FullScreen
                isFullScreen={fullScrenn}
                onChange={(isFull) => {
                    setFullScrenn(isFull);
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        height: fullScrenn ? "100dvh" : "400px",
                        my: 1,
                        borderRadius: "18px",
                        overflow: "hidden",
                        position: "relative",
                        bgcolor: (theme) => theme.background.box,
                    }}
                >
                    <Box sx={{ ...center, justifyContent: "start", p: 1, gap: "10px" }}>
                        {!fullScrenn ? (
                            <FullscreenIcon
                                onClick={() => screenHandler(true)}
                                fontSize="large"
                                sx={{
                                    fill: (theme) => theme.background.box,
                                    bgcolor: (theme) => theme.palette.text.secondary,
                                    borderRadius: "8px",
                                    m: 1,

                                    cursor: "pointer",
                                }}
                            />
                        ) : (
                            <FullscreenExitIcon
                                onClick={() => screenHandler(false)}
                                fontSize="large"
                                sx={{
                                    fill: (theme) => theme.background.box,
                                    bgcolor: (theme) => theme.palette.text.secondary,
                                    borderRadius: "8px",
                                    m: 1,
                                    cursor: "pointer",
                                }}
                            />
                        )}

                        <Box
                            sx={{
                                ...center,
                                border: "1px solid #DBDCDE",
                                borderRadius: "7px",
                                gap: "5px",
                                px: 1,
                                p: 0.5,
                            }}
                        >
                            <Button
                                onClick={(e) => handleChangeTabs(e.target.id)}
                                id="1"
                                variant="contained"
                                sx={{
                                    bgcolor: (theme) =>
                                        tabs === 1
                                            ? theme.palette.divider
                                            : theme.palette.text.primary,
                                    color: (theme) =>
                                        tabs === 1
                                            ? theme.palette.text.primary
                                            : theme.palette.disable.main,
                                    borderRadius: "7px",
                                }}
                            >
                                {" "}
                                صورت حساب
                            </Button>
                            <Button
                                onClick={(e) => handleChangeTabs(e.target.id)}
                                id="2"
                                variant="contained"
                                sx={{
                                    bgcolor: (theme) =>
                                        tabs === 2
                                            ? theme.palette.divider
                                            : theme.palette.text.primary,
                                    color: (theme) =>
                                        tabs === 2
                                            ? theme.palette.text.primary
                                            : theme.palette.disable.main,
                                    borderRadius: "7px",
                                }}
                            >
                                اینترنت بانک
                            </Button>
                        </Box>
                        {tabs === 1 &&
                            <>
                                {" "}
                                <TextField
                                    autoComplete={false}
                                    sx={{
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "white",
                                        },
                                    }}
                                    type="text"
                                    id="input-with-icon-textfield"
                                    placeholder="جستجو..."
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon
                                                    sx={{ fill: (theme) => theme.palette.divider }}
                                                />
                                            </InputAdornment>
                                        ),
                                        style: {
                                            background: "#F2F2F2",
                                            color: "#000",
                                            direction: "ltr",
                                            height: "40px",
                                        },
                                    }}
                                    variant="outlined"
                                />
                                <Box
                                    sx={{
                                        bgcolor: (theme) => theme.background.field,
                                        ...center,
                                        borderRadius: "7px",
                                    }}
                                >
                                    <Button
                                        id={1}
                                        onClick={(e) => focusehandler(e.target.id)}
                                        sx={{
                                            bgcolor: (theme) =>
                                                currentItem === 1
                                                    ? theme.palette.darkBlue.main
                                                    : theme.background.field,
                                            color: (theme) =>
                                                currentItem === 1
                                                    ? theme.palette.text.primary
                                                    : theme.typography.color,
                                            borderColor: "transparent",
                                            "&:hover": {
                                                bgcolor: (theme) => theme.palette.darkBlue.main,
                                                color: (theme) => theme.palette.text.primary,
                                            },
                                        }}
                                    >
                                        همه
                                    </Button>
                                    <Button
                                        id={2}
                                        onClick={(e) => focusehandler(e.target.id)}
                                        sx={{
                                            bgcolor: (theme) =>
                                                currentItem === 2
                                                    ? theme.palette.darkBlue.main
                                                    : theme.background.field,
                                            color: (theme) =>
                                                currentItem === 2
                                                    ? theme.palette.text.primary
                                                    : theme.typography.color,
                                            borderColor: "transparent",
                                            "&:hover": {
                                                bgcolor: (theme) => theme.palette.darkBlue.main,
                                                color: (theme) => theme.palette.text.primary,
                                            },
                                        }}
                                    >
                                        برداشت
                                    </Button>
                                    <Button
                                        id={3}
                                        onClick={(e) => focusehandler(e.target.id)}
                                        sx={{
                                            bgcolor: (theme) =>
                                                currentItem === 3
                                                    ? theme.palette.darkBlue.main
                                                    : theme.background.field,
                                            color: (theme) =>
                                                currentItem === 3
                                                    ? theme.palette.text.primary
                                                    : theme.typography.color,
                                            borderColor: "transparent",
                                            "&:hover": {
                                                bgcolor: (theme) => theme.palette.darkBlue.main,
                                                color: (theme) => theme.palette.text.primary,
                                            },
                                        }}
                                    >
                                        واریز
                                    </Button>
                                </Box>
                                <TextField
                                    select
                                    sx={{
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "white",
                                        },
                                    }}
                                    type="text"
                                    id="input-with-icon-textfield"
                                    InputProps={{
                                        style: {
                                            background: "#F2F2F2",
                                            color: "#000",
                                            direction: "ltr",
                                            height: "40px",
                                        },
                                    }}
                                    variant="outlined"
                                    SelectProps={{
                                        native: true,
                                    }}
                                >
                                    <option value="">
                                        <Typography
                                            sx={{
                                                fontSize: "12px",
                                                color: (theme) => theme.typography.color,
                                                fontWeight: 400,
                                            }}
                                        >
                                            فیلتر براساس
                                        </Typography>
                                    </option>
                                    <option value="customerName">
                                        <Typography
                                            sx={{
                                                fontSize: "12px",
                                                color: (theme) => theme.typography.color,
                                                fontWeight: 400,
                                            }}
                                        >
                                            نام مشتری
                                        </Typography>
                                    </option>
                                    <option value="mobile">
                                        <Typography
                                            sx={{
                                                fontSize: "12px",
                                                color: (theme) => theme.typography.color,
                                                fontWeight: 400,
                                            }}
                                        >
                                            شماره تماس
                                        </Typography>
                                    </option>
                                </TextField>{" "}
                            </>
                        }
                    </Box>

                    {tabs === 2 ? (
                        <iframe
                            src="http://www.google.com/custom?q=&btnG=Search"
                            title="Embedded Content"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    ) : (

                        false ? <CheckList /> : <NoItem />
                    )}
                </Box>
            </FullScreen>
        </Box>
    );
}

export default Banking;
