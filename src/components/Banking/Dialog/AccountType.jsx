import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Title from "../../UI/Title";
import { BankAccountType } from "../../../utils/data";
import { toPersian } from "../../../utils/setting";
import { center } from "../../../styles/theme";
import { useDispatch, useSelector } from "react-redux";
import {
    addBankTypeInfo,
    addBtype,
    BTlist,
} from "../../../Redux/Slices/Accounting/Bank/BankType/bankType";

function AccountType({ handleClose }) {
    const dispatch = useDispatch();
    const { updateType } = useSelector((state) => state.bankType);

    const addTypeHandler = (e) => {
        dispatch(
            addBankTypeInfo({
                key: "title",
                value: e.target.value,
            })
        );
    };

    const TypeSubmit = () => {
        dispatch(addBtype());
    };

    useEffect(() => {
        dispatch(BTlist());
    }, [updateType]);
    return (
        <Box>
            <Box sx={{ ...center, justifyContent: "space-between" }}>
                <Title
                    title={"تعریف نوع حساب بانکی"}
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
                    title={"نام حساب"}
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
                        onChange={(e) => addTypeHandler(e)}
                        sx={{
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "white",
                            },
                        }}
                        type="text"
                        id="input-with-icon-textfield"
                        placeholder="نوع حساب را وارد کنید"
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
                    <Button
                        onClick={TypeSubmit}
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

export default AccountType;
