import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import AddIcon from "@mui/icons-material/Add";
import { Box, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import Title from "../UI/Title";
import { BankAccountType, peymentReason } from "../../utils/data";
import { toPersian } from "../../utils/setting";
export default function ReciveForDl({ title }) {
    // const { isfullScrenn } = useSelector(state => state.general)
    const [open, setOpen] = useState(false);
    // const [prePositionFull, setPrePositionFull] = useState(isfullScrenn)
    const dispatch = useDispatch();
    const handleClickOpen = () => {
        // dispatch(setFullscrenn(false))
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
        <div>
            <Box
                onClick={handleClickOpen}
                sx={{
                    bgcolor: (theme) => theme.palette.text.secondary,
                    height: "100%",
                    p: 1,
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
                                title={title}
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
                                title={"عنوان "}
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
                                    // placeholder="نام حساب را وارد کنید"
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
                                    عنوان
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
                                {peymentReason?.map((item, index) => (
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
                                                variant="contained"
                                                sx={{
                                                    px: 1,
                                                    color: (theme) => theme.palette.text.primary,
                                                    bgcolor: (theme) => theme.palette.text.secondary,
                                                }}
                                            >
                                                ویرایش
                                            </Button>
                                            <Button variant="contained" color="warning" sx={{
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
