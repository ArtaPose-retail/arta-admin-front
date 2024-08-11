import {
    Autocomplete,
    Box,
    Divider,
    Switch,
    TextField,
    Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { handleShowRefrigerateitems } from "../../Redux/Slices/HomePage/product";
import Input from "../UI/Input";
import { center } from "../../styles/theme";
import { products } from "../../utils/data";

function PtoductSFilter() {
    const { showRefrigrateItems } = useSelector((state) => state.product);
    const dispatch = useDispatch();

    const handleChange = (status) => {
        dispatch(handleShowRefrigerateitems(status.target.checked));
    };

    return (
        <Box sx={{ ...center, justifyContent: "end", gap: "10px" }}>
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
                        height: "auto",
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
                <option value="fruit">
                    <Typography
                        sx={{
                            fontSize: "12px",
                            color: (theme) => theme.typography.color,
                            fontWeight: 400,
                        }}
                    >
                        میوه
                    </Typography>
                </option>
                <option value="vegteable">
                    <Typography
                        sx={{
                            fontSize: "12px",
                            color: (theme) => theme.typography.color,
                            fontWeight: 400,
                        }}
                    >
                        سبزیجات
                    </Typography>
                </option>
            </TextField>

            <Divider orientation="vertical" flexItem />
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={products}
                getOptionLabel={(option) => `${option?.title}`}
                sx={{ width: 300, color: "#000000" }}
                renderOption={(props, option) => (
                    <Box
                        // component="li"
                        sx={{ ...center, gap: "5px" }}
                        {...props}
                    >
                        <img
                            src={option.logo}
                            alt="goods"
                            style={{ width: 20, height: 20 }}
                        />
                        <Typography
                            sx={{
                                fontSize: "14px",
                                fontWeight: 500,
                                color: (theme) => theme.palette.text.primary,
                            }}
                        >{`${option?.title} `}</Typography>
                    </Box>
                )}
                renderInput={(params) => (
                    <TextField
                        sx={{ color: "#000", background: "#F2F2F2", borderRadius: "12px" }}
                        autoComplete="none"
                        {...params}
                        placeholder={"جستوجو محصول"}
                        inputProps={{
                            ...params.inputProps,
                            autoComplete: "none", // disable autocomplete and autofill
                        }}
                        InputProps={{
                            ...params.InputProps,
                            sx: {
                                "& .MuiInputBase-input": {
                                    color: "#000000",
                                },
                            },
                        }}
                    />
                )}
            />
        </Box>
    );
}

export default PtoductSFilter;
