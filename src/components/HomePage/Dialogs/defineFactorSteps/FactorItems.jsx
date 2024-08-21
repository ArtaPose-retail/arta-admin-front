import {
    Box,
    Button,
    Divider,
    Grid,
    InputAdornment,
    InputLabel,
    Switch,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import Title from "../../../UI/Title";
import { toPersian } from "../../../../utils/setting";
import AddIcon from "@mui/icons-material/Add";
import { factorItemForm } from "../../../../utils/data";
import FactorItemstable from "./FactorItemstable";
import { handlefactorStep } from "../../../../Redux/Slices/HomePage/factor";
import { useDispatch, useSelector } from "react-redux";
import ProductType from "./ProductType";
import PackageType from "./PackageType";
import Input from "../../../UI/Input";
import SearchBox from "../../../UI/SearchBox";
import { center } from "../../../../styles/theme";

function FactorItems({ handleClose }) {
    const dispatch = useDispatch();

    const { defineFactorStep1 } = useSelector(state => state.factor)

    const [openEl, setOpenEl] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const canBeOpen = openEl && Boolean(anchorEl);
    const id = canBeOpen ? "transition-popper" : undefined;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpenEl((previousOpen) => !previousOpen);
    };
    return (
        <Box>
            <Box>
                <Box sx={{ ...center, justifyContent: "space-between", p: 1 }}>
                    {/* <Typography
                        sx={{
                            fontSize: "16px",
                            fontWeight: 400,
                            color: (theme) => theme.palette.disable.main,
                            my: 0.5,
                        }}
                    >
                        شماره سند:
                        {toPersian("886677")}
                    </Typography> */}
                    <Typography
                        sx={{
                            fontSize: "16px",
                            fontWeight: 400,
                            color: (theme) => theme.palette.disable.main,
                            my: 0.5,
                        }}
                    >
                        طرف معامله: محمدامین رحمتی
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "16px",
                            fontWeight: 400,
                            color: (theme) => theme.palette.disable.main,
                            my: 0.5,
                        }}
                    >
                        شماره بارنامه / فاکتور:
                        {toPersian("3842")}
                    </Typography>
                </Box>
                <Divider
                    orientation="horizontal"
                    variant="middle"
                    flexItem
                    sx={{ my: 1 }}
                />
            </Box>
            <Grid container spacing={2} sx={{ p: 1 }}>
                {factorItemForm?.map((item, index) => (
                    <Grid item xs={4} key={index}>
                        <InputLabel>
                            <Typography
                                sx={{ fontSize: "16px", fontWeight: 500, color: item.color }}
                            >
                                {item.lable}
                            </Typography>
                        </InputLabel>
                        {item.type !== "select" ? (
                            <>
                                <Input
                                    id={id}
                                    onClickHandler={handleClick}
                                    type={item.type}
                                    placeholder={item.placeholder}
                                    name={item.name}
                                    height={"55px"}
                                    hasText={item.hastext}
                                    hasIcon={item.hasIcon}
                                    disabled={item.name == "purchaseFee" && defineFactorStep1.factorType === "kharidari" ? true : false}
                                >
                                    <ProductType />
                                    <SearchBox openEl={openEl} anchorEl={anchorEl} id={id} />
                                </Input>
                            </>
                        ) : (
                            <TextField
                                name={item.name}
                                id={item.name}
                                fullWidth
                                sx={{
                                    "& .MuiNativeSelect-select": {
                                        color: "black",
                                    },
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "white",
                                    },
                                    borderRadius: "18px",
                                }}
                                select={item?.select}
                                InputProps={{
                                    style: {
                                        background: "#F2F2F2",
                                        color: "#000",
                                        direction: "ltr",
                                        borderRadius: "18px",
                                    },
                                    startAdornment: (
                                        <>
                                            {item?.hasIcon && (
                                                <InputAdornment position="end">
                                                    <PackageType />
                                                </InputAdornment>
                                            )}
                                        </>
                                    ),
                                }}
                                SelectProps={{
                                    native: true,
                                    style: {
                                        background: "#F2F2F2",
                                        color: "#000",
                                        direction: "ltr",
                                        borderRadius: "18px",
                                    },
                                }}
                            >
                                {item?.select &&
                                    item?.options?.map((option, index) => (
                                        <option key={index} value={option?.value}>
                                            <Typography sx={{ fontSize: "12px", color: "black" }}>
                                                {option?.title}
                                            </Typography>
                                        </option>
                                    ))}
                            </TextField>
                        )}
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ ...center, justifyContent: "space-between" }}>
                <Box sx={{ ...center, mt: 1 }}>
                    <Box sx={{ ...center }}>
                        <Typography
                            sx={{
                                fontSize: "16px",
                                fontWeight: 500,
                                color: (theme) => theme.typography.color,
                            }}
                        >
                            الزام وزن
                        </Typography>
                        <Switch
                            name="pureWeight"

                        // checked={}
                        />
                    </Box>
                    <Box sx={{ ...center }}>
                        <Typography
                            sx={{
                                fontSize: "16px",
                                fontWeight: 500,
                                color: (theme) => theme.typography.color,
                            }}
                        >
                            الزام تعداد
                        </Typography>
                        <Switch
                            name="Number"
                        // checked={}
                        />
                    </Box>
                    <Box>
                        <Typography

                            sx={{
                                bgcolor: (theme) => theme.palette.green.main,
                                color: (theme) => theme.palette.text.primary,
                                borderRadius: "15px",
                                px: 3,
                            }}
                        >
                            درصد سود:  %{toPersian(23)}
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: (theme) => theme.palette.green.main,
                            color: (theme) => theme.palette.text.primary,
                            px: 3,
                        }}
                    >
                        افزودن
                    </Button>
                </Box>

            </Box>

            <FactorItemstable height={200} />

            <Box sx={{ ...center, justifyContent: "space-between", mt: 2 }}>
                <Box sx={{ ...center, gap: "5px" }}>
                    <Button
                        onClick={() => dispatch(handlefactorStep("increase"))}
                        variant="contained"
                        sx={{
                            bgcolor: (theme) => theme.palette.darkBlue.main,
                            color: (theme) => theme.palette.text.primary,
                            px: 4,
                        }}
                    >
                        ادامه
                    </Button>
                    <Button
                        onClick={() => dispatch(handlefactorStep("decrease"))}
                        variant="contained"
                        sx={{
                            color: (theme) => theme.palette.text.primary,
                            bgcolor: (theme) => theme.palette.warning.main,
                            // fontSize: "16px",
                            // fontWeight: 700,
                            px: 3,
                        }}
                    >
                        بازگشت
                    </Button>
                </Box>

                <Button
                    onClick={() => {
                        dispatch(handlefactorStep(1));
                        handleClose();
                    }}
                    variant="contained"
                    sx={{
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

export default FactorItems;
