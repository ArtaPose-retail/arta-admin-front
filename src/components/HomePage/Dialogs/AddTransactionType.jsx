
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import AddIcon from "@mui/icons-material/Add";
import { Box, Button, TextField, Typography } from "@mui/material";
import { transactionTypeItem } from "../../../utils/data";
import Title from "../../UI/Title";
import CloseIcon from "@mui/icons-material/Close";
import { toPersian, toastHandler } from "../../../utils/setting";

export default function AddTransactionType() {
    const [open, setOpen] = useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

    }


    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    return (
        <div>


            <Box
                onClick={handleClickOpen}

                sx={{

                    bgcolor: (theme) => theme.palette.darkBlue.main,
                    color: (theme) => theme.palette.text.primary,
                    p: 1,
                    ...center,
                    fontSize: "12px",
                    fontWeight: 500,
                    borderRadius: "50px",
                    cursor: "pointer"
                }}
            >

                <AddIcon
                    fontSize="small"
                    sx={{ fill: (theme) => theme.palette.text.primary, bgcolor: (theme) => theme.palette.darkBlue.main, }}
                />
            </Box>
            <Dialog
                fullWidth={true}
                maxWidth={"md"}
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
                                title={"نوع طرف معامله"}
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
                                title={"نوع طرف معامله"}
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
                                    placeholder=" عنوان طرف معامله را وارد کنید"
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
                                    // justifyContent: "space-around",
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
                                        width: "80%",
                                        textAlign: "center"
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
                                {transactionTypeItem?.map((item, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            borderRadius: "12px",
                                            bgcolor: "#F5F6F8",
                                            ...center,
                                            // justifyContent: "space-between",
                                            p: 2,
                                            my: 1,
                                            width: "100%"
                                        }}
                                    >
                                        <Typography sx={{ width: "10%" }}>{toPersian(`${index + 1}`)}</Typography>
                                        <Typography sx={{ width: "70%", textAlign: "center" }}>
                                            {item?.title}
                                        </Typography>

                                        <Box sx={{ ...center, gap: "5px", width: "10%" }}>
                                            <Button
                                                onClick={() => {
                                                    handleClose();
                                                    toastHandler("افزودن با موفیت  انجام شد", "success");
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
        </div>
    );
}
