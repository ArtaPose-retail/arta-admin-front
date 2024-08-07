import {
    Box,
    Button,
    Divider,
    Fade,
    InputAdornment,
    Popover,
    Popper,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import { separateBy3, toPersian } from "../../utils/setting";
import { Close, Search } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

function SearchBox({ }) {
    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    const [openEl, setOpenEl] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const canBeOpen = openEl && Boolean(anchorEl);
    const id = canBeOpen ? "transition-popper" : undefined;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpenEl((previousOpen) => !previousOpen);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpenEl(false);
    };
    return (
        <>
            <Box
                sx={{ bgcolor: "transparent", p: 0, m: 1, cursor: "pointer" }}
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
            >
                <Search />
            </Box>
            <Popover
                id={id}
                open={openEl}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
            >
                <Box
                    sx={{
                        borderRadius: "12px",
                        border: "1px solid lightgray",
                        p: 1,
                        bgcolor: (theme) => theme.background.box,
                        width: "100%",
                    }}
                >
                    <Box
                        sx={{ ...center, justifyContent: "space-between", width: "100%" }}
                    >
                        <TextField
                            autoComplete={false}
                            sx={{
                                width: "80%",
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "white",
                                },
                            }}
                            type="text"
                            id="input-with-icon-textfield"
                            placeholder="جستوجو "
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon
                                            sx={{
                                                cursor: "pointer",
                                            }}
                                        />
                                    </InputAdornment>
                                ),
                                style: {
                                    borderRadius: "16px",
                                    background: "#F2F2F2",
                                    color: "#000",
                                    direction: "ltr",
                                },
                            }}
                            variant="outlined"
                        />
                        <CloseIcon sx={{ cursor: "pointer" }} onClick={handleClose} />
                    </Box>
                    ‌
                    <Box sx={{ height: "150px", overflow: "scroll" }}>
                        {[1, 2, 4, 5, 6].map(() => (
                            <>
                                <Box
                                    sx={{
                                        ...center,
                                        width: "100%",
                                        justifyContent: "space-between",
                                        p: 1,
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "16px",
                                            fontWeight: 500,
                                            color: (theme) => theme.typography.color,
                                        }}
                                    >
                                        محمدرضا رحمتی
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            fontSize: "12px",
                                            fontWeight: 500,
                                            color: (theme) => theme.palette.text.primary,
                                        }}
                                    >
                                        C-112233
                                    </Button>
                                </Box>

                                <Box sx={{ ...center, gap: "5px", mt: 1 }}>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            borderColor: (theme) => theme.palette.darkBlue.main,
                                            fontSize: "12px",
                                            fontWeight: 700,
                                            color: (theme) => theme.palette.darkBlue.main,
                                        }}
                                    >
                                        {toPersian("09138090933")}
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            borderColor: (theme) => theme.palette.darkBlue.main,
                                            fontSize: "12px",
                                            fontWeight: 500,
                                            color: (theme) => theme.palette.darkBlue.main,
                                        }}
                                    >
                                        مشتری
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            borderColor: (theme) => theme.palette.darkBlue.main,
                                            fontSize: "12px",
                                            fontWeight: 500,
                                            color: (theme) => theme.palette.darkBlue.main,
                                        }}
                                    >
                                        اعتبار:خوب
                                    </Button>

                                    <Button
                                        sx={{
                                            fontSize: "12px",
                                            fontWeight: 700,
                                            color: (theme) => theme.palette.darkBlue.main,
                                        }}
                                    >
                                        {toPersian(separateBy3("5600000"))}ریال
                                    </Button>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            bgcolor: (theme) => theme.palette.warning.main,
                                            fontSize: "12px",
                                            fontWeight: 500,
                                            color: (theme) => theme.palette.text.primary,
                                        }}
                                    >
                                        بدهکار
                                    </Button>
                                </Box>
                                <Divider sx={{ my: 1 }} />
                            </>
                        ))}
                    </Box>
                </Box>
            </Popover>
        </>
    );
}

export default SearchBox;
