import {
    Box,
    Button,
    InputAdornment,
    TextField,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import Title from "../../components/UI/Title";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import AccountTable from "../../components/Accounts/AccountTable";
import DocumentsTable from "../../components/Documents/DocumentsTable";
import { center } from "../../styles/theme";
import { useDispatch, useSelector } from "react-redux";
import { DocumentList } from "../../Redux/Slices/Actions/Document/document";

function Documents() {
    const [currentItem, setCurrentItem] = useState(0);
    const dispatch = useDispatch()
    const focusehandler = (curentItem) => {
        setCurrentItem(+curentItem);
    };





    return (
        <Box
            sx={{
                width: "100%",
                bgcolor: (theme) => theme.background.box,
                borderRadius: "18px",
                height: "90dvh",
                p: 1,
                mx: 1,
                overflowY: "scroll",
            }}
        >
            <Box sx={{ ...center, justifyContent: "space-between" }}>
                <Title
                    title={"اسناد گذشته"}
                    Typoprops={{
                        fontSize: "20px",
                        fontWeight: 500,
                        color: (theme) => theme.palette.text.card,
                    }}
                />
                <MoreVertIcon />
            </Box>
            <Box sx={{ ...center, justifyContent: "flex-start", gap: "15px", mt: 2 }}>
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
                            "&:hover": {
                                bgcolor: (theme) => theme.palette.darkBlue.main,
                                color: (theme) => theme.palette.text.primary,
                            },
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
                <Box sx={{ ...center, gap: "15px" }}>
                    <Button
                        variant="contained"


                        sx={{
                            bgcolor: (theme) => theme.palette.darkBlue.main,

                            color: (theme) => theme.palette.text.primary,

                            borderColor: "transparent",
                            "&:hover": {
                                bgcolor: (theme) => theme.palette.darkBlue.main,
                                color: (theme) => theme.palette.text.primary,
                            },
                        }}
                    >
                        خروجی اکسل
                    </Button>
                    <Button

                        sx={{
                            bgcolor: (theme) => theme.palette.darkBlue.main,

                            color: (theme) => theme.palette.text.primary,

                            borderColor: "transparent",
                            "&:hover": {
                                bgcolor: (theme) => theme.palette.darkBlue.main,
                                color: (theme) => theme.palette.text.primary,
                            },
                        }}
                    >
                        چاپ
                    </Button>
                </Box>
            </Box>
            <Box sx={{ mt: 2 }}>
                <DocumentsTable />
            </Box>
        </Box>
    );
}

export default Documents;
