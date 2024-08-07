import {
    Backdrop,
    Box,
    Button,
    Dialog,
    DialogContent,
    Divider,
    Grid,
    InputLabel,
    List,
    ListItem,
    ListItemText,
    Modal,
    Switch,
    TextField,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Title from "../../UI/Title";
import { separateBy3, toPersian, toastHandler } from "../../../utils/setting";
import moment from "jalali-moment";
import { ProductItemInfoForm } from "../../../utils/data";
import UndoIcon from "@mui/icons-material/Undo";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CloseIcon from "@mui/icons-material/Close";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IosShareIcon from "@mui/icons-material/IosShare";
import PrintIcon from "@mui/icons-material/Print";
import styled from "@emotion/styled";
function Description({ status, handlerCloseDialog, iteminfo }) {
    // const [open, setOpen] = useState(false);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };

    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    return (
        <div>
            <Dialog
                fullWidth={true}
                maxWidth={"md"}
                sx={{
                    backdropFilter: "blur(10px)",
                }}
                open={status}
                onClose={handlerCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent
                    sx={{
                        bgcolor: "white",
                    }}
                >
                    <InputLabel>
                        <Typography
                            sx={{
                                fontSize: "18px",
                                my: 1,
                                fontWeight: 400,
                                color: (theme) => theme.typography.color,
                            }}
                        >
                            توضیحات خود را وارد کنید
                        </Typography>
                    </InputLabel>
                    <TextField
                        inputProps={{
                            style: {
                                color: "#000",
                                direction: "rtl",
                            },
                        }}
                        fullWidth
                        placeholder="توضیحات ..."
                        multiline
                    />

                    <Box
                        sx={{ ...center, mt: 1, gap: "15px", justifyContent: "flex-end" }}
                    >
                        <Button
                            onClick={() => {
                                toastHandler("توضیحات با موفقیت ثبت شد", "info")
                                handlerCloseDialog()
                            }}
                            variant="contained"
                            sx={{
                                bgcolor: (theme) => theme.palette.green.main,
                                color: (theme) => theme.palette.text.primary,
                                px: 4,
                                fontSize: "16px",
                                fontWeight: 500,
                            }}
                        >
                            تایید
                        </Button>

                        <Button
                            onClick={() => {

                                handlerCloseDialog()
                            }}
                            variant="contained"
                            sx={{
                                bgcolor: (theme) => theme.palette.warning.main,
                                color: (theme) => theme.palette.text.primary,
                                px: 4,
                                fontSize: "16px",
                                fontWeight: 500,
                            }}
                        >
                            انصراف
                        </Button>
                    </Box>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default Description;
