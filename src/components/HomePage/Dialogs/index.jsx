import { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Typography } from "@mui/material";
import CustomerFactorTable from "../CustomerFactorTable";
import CustomerFactorListTable from "./CustomerFactorListTable";
import { useDispatch, useSelector } from "react-redux";
import { handleShowNewFactorDialog } from "../../../Redux/Slices/HomePage/factor";
import FactorListDG from "./FactorListDG";
import DefineFactor from "./DefineFactor";

import EditIcon from "@mui/icons-material/Edit";

export default function NewProductParentDialog({ type }) {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const { definNewFactorDialog } = useSelector((state) => state.factor);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        dispatch(handleShowNewFactorDialog(false));
    };

    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    useEffect(() => {
        if (type !== "add") {
            dispatch(handleShowNewFactorDialog(true));
        }
    }, []);

    return (
        <div>
            {type === "add" ? (
                <Button
                    onClick={handleClickOpen}
                    variant="contained"
                    sx={{
                        bgcolor: (theme) => theme.palette.darkBlue.main,
                        color: (theme) => theme.palette.text.primary,
                        p: 1,
                        px: 3,
                        fontSize: "12px",
                        fontWeight: 500,
                    }}
                >
                    <>
                        اضافه کردن
                        <AddIcon
                            fontSize="small"
                            sx={{ fill: (theme) => theme.palette.text.primary }}
                        />
                    </>
                </Button>
            ) : (
                <Button variant="outlined" onClick={handleClickOpen} sx={{ ...center }}>
                    <Typography
                        sx={{
                            fontSize: "16px",
                            fontWeight: 500,
                            color: (theme) => theme.typography.color,
                        }}
                    >
                        تغییرات در محصول
                    </Typography>
                    <EditIcon />
                </Button>
            )}
            <Dialog
                fullWidth={true}
                maxWidth={"lg"}
                sx={{
                    backdropFilter: "blur(10px)",
                }}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent sx={{ bgcolor: "white" }}>
                    {!definNewFactorDialog.open ? (
                        <FactorListDG handleClose={handleClose} />
                    ) : (
                        <DefineFactor handleClose={handleClose} />
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}
