import {
    Autocomplete,
    Box,
    Divider,
    TextField,
    Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { center } from "../../styles/theme";
import apiRouts from "../../utils/apiRouts";
import { useEffect } from "react";
import { getallType } from "../../Redux/Slices/Accounting/Products/ProductType/Type";

function PtoductSFilter() {
    const dispatch = useDispatch()
    const { productList } = useSelector((state) => state.product);
    const { typeList } = useSelector((state) => state.productType);

    useEffect(() => {
        dispatch(getallType())
    }, [])

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
                {
                    typeList?.map((item, index) =>
                        <option value={item.id} key={item.id}>
                            <Typography
                                sx={{
                                    fontSize: "12px",
                                    color: (theme) => theme.typography.color,
                                    fontWeight: 400,
                                }}
                            >
                                {item?.title}
                            </Typography>
                        </option>
                    )
                }
            </TextField>

            <Divider orientation="vertical" flexItem />
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={productList}
                getOptionLabel={(option) => `${option?.title}`}
                sx={{ width: 300, color: "#000000" }}
                renderOption={(props, option) => (
                    <Box
                        // component="li"
                        sx={{ ...center, gap: "5px" }}
                        {...props}
                    >
                        <img
                            src={`${apiRouts.baseUrl}${option?.productpic_path}`}
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
