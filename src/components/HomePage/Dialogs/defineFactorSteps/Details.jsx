import {
    Box,
    Button,
    Divider,
    Fade,
    Grid,
    InputAdornment,
    InputLabel,
    Popper,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import { defineFactorForm } from "../../../../utils/data";
import Title from "../../../UI/Title";
import { useDispatch } from "react-redux";
import {
    handlefactorStep,
    setdeFactorInfoStep1,
} from "../../../../Redux/Slices/HomePage/factor";
import TransactionDialog from "./TransactionDialog";
import Input from "../../../UI/Input";
import SearchBox from "../../../UI/SearchBox";
import CarDg from "./CarDg";

function Details({ handleClose }) {
    const dispatch = useDispatch();
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

    const onChangeHandler = (name, value) => {
        dispatch(
            setdeFactorInfoStep1({
                key: name,
                value: value,
            })
        );
    };
    return (
        <Box>

            <Grid container spacing={2} sx={{ p: 1, mt: 2 }}>
                {defineFactorForm?.map((item, index) => (
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
                                    onChange={onChangeHandler}
                                    type={item.type}
                                    placeholder={item.placeholder}
                                    name={item.name}
                                    height={"55px"}
                                    hasText={item.hastext}
                                    hasIcon={item.hasIcon}
                                >
                                    <TransactionDialog title={item.lable} />
                                    <SearchBox openEl={openEl} anchorEl={anchorEl} id={id} />
                                </Input>
                            </>
                        ) : (
                            <TextField
                                name={item.name}
                                id={item.name}
                                fullWidth
                                onChange={(e) => onChangeHandler(item.name, e.target.value)}
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
                                                    {item?.hastext ? (
                                                        <Typography
                                                            sx={{
                                                                fontSize: "14px",
                                                                fontWeight: 400,
                                                                color: (theme) => theme.palette.disable.main,
                                                            }}
                                                        >
                                                            ریال
                                                        </Typography>
                                                    ) : (
                                                        item.name == "carType" ? <CarDg /> : <TransactionDialog title={item.lable} />
                                                    )}
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

            <Box sx={{ ...center, justifyContent: "space-between", mt: 2 }}>
                <Box sx={{ ...center, gap: "10px" }}>
                    <Button
                        onClick={() => dispatch(handlefactorStep("increase"))}
                        variant="contained"
                        sx={{
                            color: (theme) => theme.palette.text.primary,
                            bgcolor: (theme) => theme.palette.darkBlue.main,
                            px: 4,
                        }}
                    >
                        ادامه
                    </Button>
                </Box>
                <Button
                    onClick={() => {
                        dispatch(handlefactorStep(1));
                        handleClose();
                    }}
                    variant="contained"
                    sx={{
                        color: (theme) => theme.palette.text.primary,
                        bgcolor: (theme) => theme.palette.warning.main,
                        px: 4,
                    }}
                >
                    انصراف
                </Button>
            </Box>
        </Box>
    );
}

export default Details;
