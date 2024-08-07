import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Title from "./Title";
import { toastHandler } from "../../utils/setting";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "12px",
    boxShadow: 24,
    p: 4,
};

export default function CancelBtn({
    title,
    question,
    open,
    handleOpen,
    handleClose,
    BtnTitle,
    width
}) {


    return (
        <>
            <Button
                onClick={handleOpen}
                sx={{
                    // bgcolor: (theme) => theme.palette.warning.main,
                    // color: (theme) => theme.palette.text.primary,
                    width: width,
                    // fontSize: "14px",
                    // fontWeight: 700,
                    // py: 2,
                    // borderRadius: "12px",
                    // "&:hover": {
                    //     bgcolor: (theme) => theme.palette.warning.main,
                    //     color: (theme) => theme.palette.text.primary,
                    // },
                }}
            >
                {BtnTitle}
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Title
                        title={title}
                        Typoprops={{
                            fontSize: "24px",
                            fontWeight: 700,
                        }}
                    />
                    <Box sx={{ mt: 1 }}>
                        <Typography
                            sx={{
                                fontSize: "18px",
                                fontWeight: 700,
                            }}
                        >
                            {question}
                        </Typography>
                        <Box sx={{ mt: 3, display: "flex", gap: "10px" }}>
                            <Button
                                variant="contained"
                                onClick={() => {
                                    handleClose();
                                }}
                                sx={{
                                    bgcolor: (theme) => theme.palette.warning.main,
                                    color: (theme) => theme.palette.text.primary,
                                    width: "50%",
                                    fontSize: "14px",
                                    fontWeight: 700,
                                    p: 2,

                                    borderRadius: "12px",
                                }}
                            >
                                خیر
                            </Button>
                            <Button
                                onClick={() => {
                                    handleClose();
                                    toastHandler("درخواست شما لغو شد", "info");
                                }}
                                variant="contained"
                                sx={{
                                    bgcolor: (theme) => theme.palette.green.main,
                                    color: (theme) => theme.palette.text.primary,
                                    width: "50%",
                                    fontSize: "14px",
                                    fontWeight: 700,
                                    p: 2,

                                    borderRadius: "12px",
                                }}
                            >
                                بله{" "}
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </>
    );
}
