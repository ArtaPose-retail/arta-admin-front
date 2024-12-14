import { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import AddIcon from "@mui/icons-material/Add";
import {
    Box,
    Button,
    CircularProgress,
    InputAdornment,
    TextField,
    Typography,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { separateBy3, toPersian } from "../../../utils/setting";
import Title from "../../UI/Title";
import CloseIcon from "@mui/icons-material/Close";
import {
    IncreaseCreditAction,
    setFormInfo,
} from "../../../Redux/Slices/Wallet/wallet";
export default function IncreaseCredit() {
    const { inceaseCredit, loading, closeModal } = useSelector(
        (state) => state.wallet
    );
    const [open, setOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState(0);

    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        dispatch(
            setFormInfo({
                key: "price",
                value: "",
            })
        );
        setCurrentItem(0);
    };
    useEffect(() => {
        dispatch(
            setFormInfo({
                key: "applicant",
                value: `https://${window.location.host}`,
            })
        );
    }, []);

    useEffect(() => {
        if (closeModal) {
            handleClose();
        }
    }, [closeModal]);

    const focusehandler = (curentItem) => {
        setCurrentItem(+curentItem);
        if (+curentItem === 1) {
            dispatch(
                setFormInfo({
                    key: "price",
                    value: "2000000",
                })
            );
        } else if (+curentItem === 2) {
            dispatch(
                setFormInfo({
                    key: "price",
                    value: "4000000",
                })
            );
        } else {
            dispatch(
                setFormInfo({
                    key: "price",
                    value: "5000000",
                })
            );
        }
    };

    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    return (
        <div>
            <Button
                onClick={() => handleClickOpen()}
                variant="contained"
                sx={{
                    bgcolor: (theme) => theme.palette.text.secondary,
                    color: (theme) => theme.palette.text.primary,
                    px: 5,
                    fontSize: "20px",
                    borderRadius: "18px",
                    height: "60px",
                }}
            >
                افزایش اعتبار
            </Button>
            <Dialog
                fullWidth={true}
                sx={{
                    backdropFilter: "blur(10px)",
                }}
                open={open}
                // onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent sx={{ bgcolor: "white" }}>
                    <Box sx={{ ...center, justifyContent: "space-between" }}>
                        <Title
                            title={" افزایش اعتبار"}
                            Typoprops={{
                                fontSize: "20px",
                                fontWeight: 500,
                                color: (theme) => theme.typography.color,
                            }}
                        />

                        <CloseIcon
                            onClick={() => handleClose()}
                            sx={{
                                bgcolor: (theme) => theme.palette.warning.main,
                                m: 0,
                                p: 0,
                                borderRadius: "7px",
                                fill: (theme) => theme.palette.text.primary,
                            }}
                        />
                    </Box>
                    <Box sx={{ ...center, gap: "20px", mt: 3 }}>
                        <Button
                            id={1}
                            onClick={(e) => focusehandler(e.target.id)}
                            sx={{
                                bgcolor: (theme) =>
                                    currentItem === 1
                                        ? theme.palette.darkBlue.main
                                        : theme.palette.primary.main,
                                color: (theme) =>
                                    currentItem === 1
                                        ? theme.palette.text.primary
                                        : theme.palette.text.primary,
                                borderColor: "transparent",
                                "&:hover": {
                                    bgcolor: (theme) => theme.palette.darkBlue.main,
                                    color: (theme) => theme.palette.text.primary,
                                },
                            }}
                            variant="outlined"
                        >
                            {toPersian(separateBy3("2000000"))}ریال
                        </Button>
                        <Button
                            id={2}
                            onClick={(e) => focusehandler(e.target.id)}
                            sx={{
                                bgcolor: (theme) =>
                                    currentItem === 2
                                        ? theme.palette.darkBlue.main
                                        : theme.palette.primary.main,
                                color: (theme) =>
                                    currentItem === 2
                                        ? theme.palette.text.primary
                                        : theme.palette.text.primary,
                                borderColor: "transparent",
                                "&:hover": {
                                    bgcolor: (theme) => theme.palette.darkBlue.main,

                                    color: (theme) => theme.palette.text.primary,
                                },
                            }}
                            variant="outlined"
                        >
                            {toPersian(separateBy3("4000000"))}ریال
                        </Button>
                        <Button
                            id={3}
                            onClick={(e) => focusehandler(e.target.id)}
                            sx={{
                                bgcolor: (theme) =>
                                    currentItem === 1
                                        ? theme.palette.darkBlue.main
                                        : theme.palette.primary.main,
                                color: (theme) =>
                                    currentItem === 1
                                        ? theme.palette.text.primary
                                        : theme.palette.text.primary,
                                borderColor: "transparent",
                                "&:hover": {
                                    bgcolor: (theme) => theme.palette.darkBlue.main,
                                    color: (theme) => theme.palette.text.primary,
                                },
                            }}
                            variant="outlined"
                        >
                            {toPersian(separateBy3("5000000"))}ریال
                        </Button>
                    </Box>
                    <Box sx={{ ...center, mt: 2 }}>
                        <TextField
                            onChange={(e) =>
                                dispatch(
                                    setFormInfo({
                                        key: "price",
                                        value: e.target.value,
                                    })
                                )
                            }
                            autoComplete={false}
                            sx={{
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "white",
                                },
                                width: "65%",
                            }}
                            type="text"
                            id="input-with-icon-textfield"
                            placeholder="مبلغ موردنظر را وارد کنید"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Typography>ریال</Typography>
                                    </InputAdornment>
                                ),
                                style: {
                                    background: "#F2F2F2",
                                    color: "#000",
                                    direction: "ltr",
                                    height: "40px",
                                },
                            }}
                            variant="outlined"
                        />
                    </Box>
                    <Box sx={{ ...center }}>
                        <Button
                            disabled={inceaseCredit?.price?.length <= 0 ? true : false}
                            sx={{
                                m: 2,
                                p: 1,
                                bgcolor: (theme) =>
                                    currentItem !== 0
                                        ? theme.palette.darkBlue.main
                                        : theme.background.field,
                                color: (theme) =>
                                    currentItem !== 0
                                        ? theme.palette.text.primary
                                        : theme.typography.color,
                                borderColor: "transparent",
                                width: "40%",
                            }}
                            variant="outlined"
                            onClick={() => dispatch(IncreaseCreditAction())}
                        >
                            {!loading ? (
                                "پرداخت"
                            ) : (
                                <CircularProgress
                                    size={"35px"}
                                    sx={{ color: (theme) => theme.palette.text.primary }}
                                />
                            )}
                        </Button>
                    </Box>
                </DialogContent>
            </Dialog>
        </div>
    );
}
