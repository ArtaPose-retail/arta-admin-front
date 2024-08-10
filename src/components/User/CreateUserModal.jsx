import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import Title from "../UI/Title";
import Close from "@mui/icons-material/Close";
import { center } from "../../styles/theme";
import {
    FormControlLabel,
    Grid,
    Input,
    InputLabel,
} from "@mui/material";
import { createUserForm } from "../../utils/data";
import Checkbox from "@mui/material/Checkbox";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    bgcolor: "background.paper",
    borderRadius: "15px",
    boxShadow: 24,
    p: 4,
};

export default function CreateUserModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button
                onClick={handleOpen}
                variant="contained"
                sx={{
                    bgcolor: (theme) => theme.palette.darkBlue.main,
                    color: (theme) => theme.palette.text.primary,
                }}
            >
                <AddIcon
                    fontSize="medium"
                    sx={{ fill: (theme) => theme.palette.text.primary }}
                />
            </Button>
            <Modal
                open={open}
                // onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{ ...center, justifyContent: "space-between" }}>
                        <Title
                            title={"ایجاد کاربر جدید"}
                            Typoprops={{
                                fontSize: "20px",
                                fontWeight: 700,
                                color: (theme) => theme.palette.text.card,
                            }}
                        />
                        <Close onClick={handleClose} sx={{ cursor: "pointer" }} />
                    </Box>
                    <Grid container spacing={3} sx={{ p: 1, mt: 1 }}>
                        {createUserForm?.map((item, index) => (
                            <Grid item xs={4} key={index}>
                                <InputLabel>
                                    <Typography
                                        sx={{
                                            fontSize: "18px",
                                            fontWeight: 400,
                                            color: item.color,
                                        }}
                                    >
                                        {item?.placeholder}
                                    </Typography>
                                </InputLabel>

                                <Input
                                    type={item.type}
                                    placeholder={item.placeholder}
                                    name={item.name}
                                    id={item.name}
                                // // width={"55px"}
                                // height={"55px"}
                                />
                            </Grid>
                        ))}
                    </Grid>

                    <Title
                        title={"سطح دسترسی"}
                        Typoprops={{
                            fontSize: "16px",
                            fontWeight: 700,
                            color: (theme) => theme.palette.text.card,
                            my: 2,
                        }}
                    />
                    <Box
                        sx={{
                            ...center,
                            justifyContent: "space-evenly",
                            gap: "5px",
                            mt: 1,
                        }}
                    >
                        <FormControlLabel control={<Checkbox />} label="ادمین" />
                        <FormControlLabel control={<Checkbox />} label="ادمین عملیات" />
                        <FormControlLabel control={<Checkbox />} label="عملیات" />
                        <FormControlLabel control={<Checkbox />} label="تنظیمات" />
                        <FormControlLabel control={<Checkbox />} label="مدیریت" />
                        <FormControlLabel control={<Checkbox />} label="حسابداری" />
                    </Box>
                    <Box sx={{ ...center, justifyContent: "space-between", mt: 3 }}>
                        <Button variant="contained" color="success" sx={{ width: "15%" }}>
                            تایید
                        </Button>
                        <Button variant="contained" color="warning" sx={{ width: "15%" }}>
                            انصراف
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
