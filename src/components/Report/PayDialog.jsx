import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import AddIcon from "@mui/icons-material/Add";
import {
    Box,
    Button,
    Checkbox,
    InputLabel,
    TextField,
    Typography,
} from "@mui/material";
import Title from "../UI/Title";
import CloseIcon from '@mui/icons-material/Close';

export default function PayDialog() {
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
        <div>
            <Typography
                onClick={() => handleClickOpen()}
                sx={{
                    cursor: "pointer",
                    fontSize: "10px",
                    fontWeight: 700,
                    color: (theme) => theme.palette.text.primary,
                    border: "1px solid gray",
                    px: 2,
                    p: 1,
                    borderRadius: "12px",
                    bgcolor: (theme) => theme.palette.darkBlue.main,
                }}
            >
                تسویه
            </Typography>
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
                    <Box sx={{ ...center, justifyContent: "space-between" }}>
                        <Title
                            title={"تسویه کارگری"}
                            Typoprops={{
                                fontSize: "20px",
                                fontWeight: 500,
                                color: (theme) => theme.palette.text.card,
                            }}
                        />
                        <Box sx={{ bgcolor: theme => theme.palette.warning.main, borderRadius: "8px" }} onClick={handleClose}>

                            <CloseIcon sx={{ fill: theme => theme.palette.text.primary, cursor: "pointer" }} />
                        </Box>
                    </Box>
                    <Box>
                        <Box sx={{ ...center, justifyContent: "space-evenly", mt: 2 }}>
                            <Box sx={{ ...center }}>
                                <Checkbox color="primary" />

                                <Typography
                                    sx={{
                                        fontSize: "18px",
                                        fontWeight: 500,
                                        color: (theme) => theme.palette.text.card,
                                    }}
                                >
                                    تسویه نقدی
                                </Typography>
                            </Box>
                            <Box sx={{ ...center }}>
                                <Checkbox color="primary" />
                                <Typography
                                    sx={{
                                        fontSize: "18px",
                                        fontWeight: 500,
                                        color: (theme) => theme.palette.text.card,
                                    }}
                                >
                                    تسویه از حساب
                                </Typography>
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
                                    <option value=""></option>
                                </TextField>
                            </Box>
                        </Box>
                        <Box sx={{ ...center, justifyContent: "space-evenly", mt: 2 }}>
                            <Box sx={{ ...center }}>
                                <InputLabel>
                                    <Typography
                                        sx={{
                                            fontSize: "18px",
                                            fontWeight: 400,
                                            color: (theme) => theme.typography.color,
                                        }}
                                    >
                                        مبلغ:
                                    </Typography>
                                </InputLabel>
                                <TextField
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
                                />
                            </Box>
                            <Box sx={{ ...center }}>
                                <InputLabel>
                                    <Typography
                                        sx={{
                                            fontSize: "18px",
                                            fontWeight: 400,
                                            color: (theme) => theme.typography.color,
                                        }}
                                    >
                                        مبلغ:
                                    </Typography>
                                </InputLabel>
                                <TextField
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
                                />
                            </Box>
                        </Box>
                        <Box sx={{ ...center, mt: 4 }}>
                            <Button
                                variant="contained"
                                sx={{ bgcolor: theme => theme.palette.darkBlue.main, fontSize: "16px", fontWeight: 500, px: 5, color: theme => theme.palette.text.primary }}
                            >
                                ثبت
                            </Button>
                        </Box>
                    </Box>
                </DialogContent>
            </Dialog>
        </div>
    );
}
