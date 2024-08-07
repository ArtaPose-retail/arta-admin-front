import {
    Box,
    Button,
    InputAdornment,
    TextField,
    Typography,
    Popper,
    Fade,
} from "@mui/material";
import { useState } from "react";
import Title from "../../components/UI/Title";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import { separateBy3, toPersian } from "../../utils/setting";
import AccountDetailsTable from "../../components/Accounts/AccountDetailsTable";
import { ExpandMore } from "@mui/icons-material";

function AccountDetails() {
    const [currentItem, setCurrentItem] = useState(0);
    const [openPopper, setOpenPopper] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const focusehandler = (curentItem) => {
        setCurrentItem(+curentItem);
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpenPopper((previousOpenPooper) => !previousOpenPooper);
    };

    const canBeOpen = openPopper && Boolean(anchorEl);
    const id = canBeOpen ? "transition-popper" : undefined;
    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    return (
        <Box
            sx={{
                width: "100%",
                bgcolor: (theme) => theme.background.box,
                borderRadius: "18px",
                height: "650px",
                p: 1,
                mx: 1,
                overflowY: "scroll",
            }}
        >
            <Box sx={{ ...center, justifyContent: "space-between" }}>
                <Title
                    title={"حساب‌ها / جزئیات حساب"}
                    Typoprops={{
                        fontSize: "20px",
                        fontWeight: 500,
                        color: (theme) => theme.palette.text.card,
                    }}
                />

                <MoreVertIcon />
            </Box>

            <Box sx={{ ...center, justifyContent: "flex-start", gap: "15px", mt: 2 }}>
                <Box
                    sx={{
                        ...center,
                        bgcolor: (theme) => theme.background.field,
                        borderRadius: "12px",
                        justifyContent: "space-between",
                        p: 1,
                    }}
                >
                    <Box sx={{ ...center, gap: "10px" }}>
                        <Typography
                            sx={{
                                borderRadius: "4px",
                                fontSize: "16px",
                                fontWeight: 500,
                                color: (theme) => theme.typography.color,
                                px: 1,
                            }}
                        >
                            محمدرضا رحمتی
                        </Typography>
                        <Typography
                            sx={{
                                borderRadius: "4px",
                                bgcolor: (theme) => theme.palette.darkBlue.main,
                                fontSize: "10px",
                                fontWeight: 700,
                                color: (theme) => theme.palette.text.primary,
                                px: 2,
                                py: 0.5,
                            }}
                        >
                            مشتری
                        </Typography>

                        <Typography
                            sx={{
                                borderRadius: "4px",
                                bgcolor: (theme) => theme.palette.warning.main,
                                fontSize: "10px",
                                fontWeight: 700,
                                color: (theme) => theme.palette.text.primary,
                                px: 2,
                                py: 0.5,
                            }}
                        >
                            بدهکار
                        </Typography>
                    </Box>
                </Box>
                <TextField
                    autoComplete={false}
                    sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "white",
                        },
                    }}
                    type="text"
                    id="input-with-icon-textfield"
                    placeholder="جستجو براساس مبلغ"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ fill: (theme) => theme.palette.divider }} />
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
                        }}
                    >
                        بدهکار
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
                        }}
                    >
                        بستانکار
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
                </TextField>
            </Box>

            <AccountDetailsTable />
            <Box sx={{ ...center, justifyContent: "flex-start", gap: "10px" }}>
                <Button
                    variant="contained"
                    sx={{
                        borderRadius: "8px",
                        bgcolor: (theme) => theme.palette.green.main,
                        color: (theme) => theme.palette.text.primary,
                        px: 3,
                    }}
                >
                    تایید
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        borderRadius: "8px",
                        bgcolor: (theme) => theme.palette.disable.main,
                        color: (theme) => theme.palette.text.primary,
                    }}
                >
                    اشتراک گذاری
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        borderRadius: "8px",
                        bgcolor: (theme) => theme.palette.disable.main,
                        color: (theme) => theme.palette.text.primary,
                        px: 3,
                    }}
                >
                    چاپ
                </Button>
                <Box
                    sx={{
                        borderLeft: "1px solid white",
                        ...center,
                        cursor: "pointer",
                        bgcolor: theme => theme.palette.darkBlue.main,
                        borderRadius: "12px"
                    }}
                    aria-describedby={id}
                    type="button"
                    onClick={handleClick}
                >
                    <Typography
                        sx={{
                            color: theme => theme.palette.text.primary,
                            p: 1,
                            cursor: "pointer",
                            fontSize: "16px",
                            fontWeight: 500,
                        }}
                        onClick={() => {
                            setOpenPopper(false);
                        }}
                    >
                        ارسال پیامک{" "}
                    </Typography>
                    <ExpandMore sx={{ fill: "white" }} />
                </Box>
                <Popper id={id} open={openPopper} anchorEl={anchorEl} transition>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Box
                                sx={{
                                    borderRadius: "12px",
                                    border: "1px solid gray",
                                    p: 1,
                                    bgcolor: "background.paper",
                                }}
                            >
                                <Typography
                                    sx={{
                                        borderBottom: "1px solid gray",
                                        p: 1,
                                        cursor: "pointer",
                                    }}
                                    onClick={() => {
                                        setOpenPopper(false);
                                    }}
                                >
                                    چاپ لیبلی
                                </Typography>
                                <Typography
                                    sx={{ p: 1, cursor: "pointer" }}
                                    onClick={() => {
                                        setOpenPopper(false);
                                    }}
                                >
                                    چاپ حرارتی
                                </Typography>
                            </Box>
                        </Fade>
                    )}
                </Popper>
                <Button
                    variant="contained"
                    sx={{
                        borderRadius: "8px",
                        bgcolor: (theme) => theme.palette.warning.main,
                        color: (theme) => theme.palette.text.primary,
                        px: 3,
                    }}
                >
                    انصراف
                </Button>
            </Box>
        </Box>
    );
}

export default AccountDetails;
