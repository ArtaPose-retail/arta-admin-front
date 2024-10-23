import { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import AccountType from "./AccountType";
import BankName from "./BankName";
import { useDispatch } from "react-redux";
import { center } from "../../../styles/theme";
import { BankNameList } from "../../../Redux/Slices/Accounting/Bank/BankName/bankName";
export default function BnDialog({ name }) {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        dispatch(BankNameList());
    }, []);



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
                    {name === "bankName" ? (
                        <BankName handleClose={handleClose} />
                    ) : (
                        <AccountType handleClose={handleClose} />
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}
