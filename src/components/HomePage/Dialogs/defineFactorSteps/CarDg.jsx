import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { Dialog, DialogContent, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import { BankAccountType, bankList } from "../../../../utils/data";
import { center } from "../../../../styles/theme";

import { toPersian } from "../../../../utils/setting";
import Title from "../../../UI/Title";
import { Close } from "@mui/icons-material";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 500,
    bgcolor: "background.paper",
    borderRadius: "18px",
    boxShadow: 24,
    p: 4,
    overflow: "scroll",
};

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];
export default function CarDg() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Box
                onClick={handleOpen}
                sx={{
                    bgcolor: (theme) => theme.palette.text.secondary,
                    height: "100%",
                    borderRadius: "50px",
                    p: 0.5,
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
                maxWidth={"md"}
                sx={{
                    backdropFilter: "blur(10px)",
                }}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent
                    sx={{
                        bgcolor: "white",
                    }}
                >
                    <Box sx={{ ...center, justifyContent: "space-between" }}>
                        <Title
                            title={"لیست خودرو"}
                            Typoprops={{
                                fontSize: "24px",
                                fontWeight: "700",
                            }}
                        />
                        <Close onClick={() => handleClose()} />
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <Title
                            title={"نام خودرو"}
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
                                placeholder="نام حساب را وارد کنید"
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
                                نام خودرو
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

                            {

                                BankAccountType?.map((item, index) => (

                                    <Box

                                        key={index}
                                        sx={{
                                            borderRadius: "12px",
                                            bgcolor: "#F5F6F8",
                                            ...center,
                                            justifyContent: "space-between",
                                            p: 2,
                                            m: 1
                                        }}
                                    >
                                        <Typography>
                                            {toPersian(`${index + 1}`)}
                                        </Typography>
                                        <Typography>{item.title}</Typography>
                                        <Box sx={{ ...center, gap: "5px" }}>
                                            <Button variant="outlined" sx={{ p: 0, color: "#6D6D6D", borderColor: "#6D6D6D" }}>ویرایش</Button>
                                            <Button variant="outlined" color="warning" sx={{ p: 0 }}>حذف </Button>
                                        </Box>
                                    </Box>

                                ))
                            }

                        </Box>
                    </Box>
                </DialogContent>
            </Dialog>
        </div>
    );
}
