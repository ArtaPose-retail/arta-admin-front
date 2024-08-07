import {
    Box,
    Divider,
    FormControlLabel,
    InputAdornment,
    Radio,
    Switch,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { handleShowRefrigerateitems } from "../../Redux/Slices/HomePage/product";
import Input from "../UI/Input";

function PtoductSFilter() {
    const [refrigerat, setRefrigerat] = useState(false);
    const { showRefrigrateItems } = useSelector((state) => state.product);
    const dispatch = useDispatch();

    const handleChange = (status) => {
        dispatch(handleShowRefrigerateitems(status.target.checked));
    };

    return (
        <Box sx={{ display: "flex", alignitems: "center", gap: "10px" }}>
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
                        وضیعت محصول
                    </Typography>
                </option>
            </TextField>
            <TextField
                select
                sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                    },
                }}
                type="text"
                id="input-with-icon-textfield"
                placeholder="تلفن همراه"
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
                        مقدار خرید
                    </Typography>
                </option>
            </TextField>
            <Divider orientation="vertical" flexItem />
            <Box
                sx={{
                    bgcolor: "#F2F2F2",
                    borderRadius: "7px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    px: 0.5,
                }}
            >
                <Switch checked={showRefrigrateItems} onClick={(e) => {
                    handleChange(e)
                }} />


                <Typography sx={{ color: (theme) => theme.palette.divider }}>
                    سردخانه
                </Typography>
            </Box>


            <Input
                width={"30%"}
                icon={"search"}
                hasIcon={true}

                type={"text"}
                placeholder={"جستوجو مشتری"}
            />
        </Box>
    );
}

export default PtoductSFilter;
