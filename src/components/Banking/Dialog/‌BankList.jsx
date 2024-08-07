import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { bankList } from "../../../utils/data";
import { Grid } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
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

export default function BankList() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button
                onClick={handleOpen}
                variant="contained"
                sx={{
                    bgcolor: (theme) => theme.palette.disable.main,
                    color: (theme) => theme.palette.text.primary,
                    p: 1.75,
                    px: 2.5,
                    borderRadius: "0px",
                }}
            >
                لیست بانک ها{" "}
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                            لیست بانک ها
                        </Typography>
                        <ArrowBackIcon sx={{ cursor: "pointer" }} onClick={handleClose} />

                    </Box>
                    <Typography sx={{ fontSize: "12px", fontWeight: "bold", mt: 2 }}>
                        بانک مورد نظر خود را انتخاب کنید
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                        <Grid container spacing={2}>
                            {bankList?.map((item, index) => (
                                <Grid item xs={4} key={index}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            // bgcolor: theme => theme.palette.disable.main,
                                            boxShadow: "0px 0px 9px 2px rgba(0, 0, 0, 0.25)",
                                            gap: "5px",
                                            p: 1.5,
                                            borderRadius: "12px",
                                            cursor: "pointer"
                                        }}
                                    >
                                        <img src={item.logo} width={20} height={20} />
                                        <Box sx={{ justifyContent: 'center', display: "flex", width: "100%" }}>

                                            <Typography sx={{ color: theme => theme.palette.darkBlue.main, fontSize: "12px", fontWeight: "bold" }}>{item.title}</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
