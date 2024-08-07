import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import AddIcon from "@mui/icons-material/Add";
import { Box, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import AccountType from "./AccountType";
import BankName from "./BankName";
import { setFullscrenn } from "../../../Redux/Slices/general";
import { useDispatch, useSelector } from "react-redux";
export default function BnDialog({ name }) {
    // const { isfullScrenn } = useSelector(state => state.general)
    const [open, setOpen] = useState(false);
    // const [prePositionFull, setPrePositionFull] = useState(isfullScrenn)
    const dispatch = useDispatch()
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

                    {name === "bankName" ? <BankName handleClose={handleClose} /> :
                        <AccountType handleClose={handleClose} />}
                </DialogContent>

            </Dialog>
        </div>
    );
}
