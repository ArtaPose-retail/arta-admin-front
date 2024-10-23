import { Autocomplete, Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Title from "../../UI/Title";
import { BankAccountType, bankList } from "../../../utils/data";
import { toPersian } from "../../../utils/setting";
import BankList from "./‌BankList";
import { center } from "../../../styles/theme";
import { useDispatch } from "react-redux";
import { addBankNameInfo } from "../../../Redux/Slices/Accounting/Bank/BankName/bankName";

function BankName({ handleClose }) {
    const dispatch = useDispatch();

    const onChangehandler = (e) => {
        dispatch(
            addBankNameInfo({
                key: "title",
                value: e.target.value,
            })
        );
    };
    return (
        <Box>
            <Box sx={{ ...center, justifyContent: "space-between" }}>
                <Title
                    title={"تعریف نام بانک"}
                    Typoprops={{ fontSize: "20px", fontWeight: 500 }}
                />
                <Box
                    onClick={() => handleClose()}
                    sx={{
                        bgcolor: (theme) => theme.palette.disable.main,
                        ...center,
                        borderRadius: "12px",
                        p: 1,
                        cursor: "pointer",
                    }}
                >
                    <CloseIcon fontSize="medium" sx={{ fill: "white" }} />
                </Box>
            </Box>
            <Box sx={{ mt: 2 }}>
                <Title
                    title={"نام بانک"}
                    Typoprops={{
                        color: (theme) => theme.typography.color,
                        fontSize: "18px",
                        fontWeight: 400,
                    }}
                />
                <Box
                    sx={{ ...center, justifyContent: "flex-start", gap: "5px", my: 2 }}
                >
                    <TextField
                        sx={{
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "white",
                            },
                        }}
                        onChange={(e) => {
                            onChangehandler(e);
                        }}
                        type="text"
                        id="input-with-icon-textfield"
                        placeholder="نام بانک را وارد کنید"
                        InputProps={{
                            style: {
                                borderRadius: "0px 18px 18px 0px",
                                background: "#F2F2F2",
                                color: "#000",
                                direction: "ltr",
                            },
                        }}
                        variant="outlined"
                    />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={bankList}
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
                                placeholder={"جستوجو عکس بانک"}
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
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: (theme) => theme.palette.text.secondary,
                            color: (theme) => theme.palette.text.primary,
                            p: 1.75,
                            px: 2.5,
                            borderRadius: "18px 0px 0px 18px",
                        }}
                    >
                        افزودن
                    </Button>
                </Box>
            </Box>

            <Box>
                <Box
                    sx={{
                        ...center,
                        justifyContent: "space-between",
                        borderBottom: "2px solid #DEDEDE",
                        p: 1,
                    }}
                >
                    <Typography
                        sx={{
                            color: (theme) => theme.typography.color,
                            fontSize: "18px",
                            fontWeight: 500,
                        }}
                    >
                        ردیف
                    </Typography>
                    <Typography
                        sx={{
                            color: (theme) => theme.typography.color,
                            fontSize: "18px",
                            fontWeight: 500,
                        }}
                    >
                        نام حساب
                    </Typography>
                    <Typography
                        sx={{
                            color: (theme) => theme.typography.color,
                            fontSize: "18px",
                            fontWeight: 500,
                        }}
                    >
                        عملیات
                    </Typography>
                </Box>

                <Box sx={{ my: 2, maxHeight: "300px", overflow: "scroll" }}>
                    {BankAccountType?.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                borderRadius: "12px",
                                bgcolor: "#F5F6F8",
                                ...center,
                                justifyContent: "space-between",
                                p: 2,
                                m: 1,
                            }}
                        >
                            <Typography>{toPersian(`${index + 1}`)}</Typography>
                            <Typography>{item.title}</Typography>
                            <Box sx={{ ...center, gap: "5px" }}>
                                <Button
                                    variant="outlined"
                                    sx={{ p: 0, color: "#6D6D6D", borderColor: "#6D6D6D" }}
                                >
                                    ویرایش
                                </Button>
                                <Button variant="outlined" color="warning" sx={{ p: 0 }}>
                                    حذف{" "}
                                </Button>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default BankName;
