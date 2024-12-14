import {
    Box,
    Button,
    Dialog,
    DialogContent,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

import Title from "../../../UI/Title";
import { BankAccountType, products } from "../../../../utils/data";
import { toPersian, toastHandler } from "../../../../utils/setting";
import AddIcon from "@mui/icons-material/Add";

function PackageType() {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    return (
        <>
            <Box
                onClick={handleClickOpen}
                sx={{
                    bgcolor: (theme) => theme.palette.text.secondary,
                    height: "100%",
                    p: 1,
                    py: 2,
                    borderRadius: "50px",
                    cursor: "pointer",
                    ...center,
                }}
            >
                <AddIcon
                    sx={{
                        fill: (theme) => theme.palette.text.primary,
                    }}
                />
            </Box>

            <Dialog
                maxWidth={"md"}
                fullWidth={true}
                sx={{
                    backdropFilter: "blur(10px)",
                }}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent sx={{ bgcolor: "white" }}>
                    <Box>
                        <Box sx={{ ...center, justifyContent: "space-between" }}>
                            <Title
                                title={"تعریف نوع بسته بندی  "}
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
                                title={"نوع بسته بندی "}
                                Typoprops={{
                                    color: (theme) => theme.typography.color,
                                    fontSize: "18px",
                                    fontWeight: 400,
                                }}
                            />
                            <Box
                                sx={{
                                    ...center,
                                    justifyContent: "flex-start",
                                    gap: "5px",
                                    my: 2,
                                }}
                            >
                                <TextField
                                    sx={{
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "white",
                                        },
                                    }}
                                    type="number"
                                    id="input-with-icon-textfield"
                                    placeholder="نام دسته بندی را وارد کنید"
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
                                    onClick={() => {
                                        toastHandler("محصول با موفقیت اضافه شد", "success")
                                    }}
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

                        <Box sx={{ mt: 1 }}>
                            <Box
                                sx={{
                                    ...center,
                                    justifyContent: "space-around",
                                    borderBottom: "2px solid #DEDEDE",
                                    p: 1,

                                    width: "100%"
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: (theme) => theme.typography.color,
                                        fontSize: "18px",
                                        fontWeight: 500,
                                        width: "10%"
                                    }}
                                >
                                    ردیف
                                </Typography>

                                <Typography
                                    sx={{
                                        color: (theme) => theme.typography.color,
                                        fontSize: "18px",
                                        fontWeight: 500,
                                        width: "40%"

                                    }}
                                >
                                    عنوان
                                </Typography>
                                <Typography
                                    sx={{
                                        color: (theme) => theme.typography.color,
                                        fontSize: "18px",
                                        fontWeight: 500,
                                        width: "10%"

                                    }}
                                >
                                    عملیات
                                </Typography>
                            </Box>

                            <Box sx={{ my: 2, maxHeight: "300px", overflow: "scroll" }}>
                                {products?.map((item, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            borderRadius: "12px",
                                            bgcolor: "#F5F6F8",
                                            ...center,
                                            justifyContent: "space-around",
                                            p: 2,
                                            my: 1,
                                            width: "100%"
                                        }}
                                    >
                                        <Typography sx={{ width: "10%" }}>{toPersian(`${index + 1}`)}</Typography>

                                        <Typography sx={{ width: "40%" }}>
                                            {item.title}
                                        </Typography>
                                        <Box sx={{ ...center, gap: "5px", width: "10%" }}>
                                            <Button
                                                onClick={() => {
                                                    handleClose();
                                                    toastHandler("افزودن با موفیت  انجام شد");
                                                }}
                                                variant="contained"
                                                sx={{
                                                    px: 1,
                                                    color: (theme) => theme.palette.text.primary,
                                                    bgcolor: (theme) => theme.palette.text.secondary,
                                                }}
                                            >
                                                ویرایش
                                            </Button>
                                            <Button variant="contained" sx={{
                                                px: 1,
                                                color: (theme) => theme.palette.text.primary,
                                                bgcolor: (theme) => theme.palette.warning.main,
                                            }}>
                                                حذف{" "}
                                            </Button>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default PackageType;
