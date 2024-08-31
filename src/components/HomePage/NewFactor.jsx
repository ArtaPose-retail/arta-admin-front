import { Box, Button, Divider, Fade, Popper, Typography } from "@mui/material";
import { useState } from "react";
import LableCard from "./LableCard";
import theme, { center } from "../../styles/theme";
import Description from "./Dialogs/Description";
import PersonIcon from "@mui/icons-material/Person";
import TransactionpartyDg from "./Dialogs/TransactionpartyDg";
import { separateBy3, toPersian } from "../../utils/setting";
import Input from "../UI/Input";

function NewFactor() {


    const [open, setOpen] = useState(false);
    const [openTransaction, setOpenTransaction] = useState(false);

    const [openEl, setOpenEl] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const canBeOpen = openEl && Boolean(anchorEl);
    const id = canBeOpen ? "transition-popper" : undefined;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpenEl((previousOpen) => !previousOpen);
    };

    const showDialoghandler = () => {
        setOpen(true);
    };
    const handlerCloseDialog = () => {
        setOpen(false);
    };
    const showTransactionDialoghandler = () => {
        setOpenTransaction(true);
    };

    const handlerCloseTransactionDialog = () => {
        setOpenTransaction(false);
    };
    return (
        <Box
            sx={{
                width: "100%",
                borderRadius: "18px",
                bgcolor: (theme) => theme.background.box,
                p: 1.5,
            }}
        >
            <LableCard />
            <Box
                sx={{
                    justifyContent: "flex-start",
                    m: 1.5,
                    ...center,
                    gap: "5px",
                    "& hr": {
                        mx: 0.5,
                    },
                }}
            >
                <Input
                    id={id}
                    onClickHandler={handleClick}
                    icon={"search"}
                    hasIcon={true}
                    type={"text"}
                    placeholder={"جستوجو مشتری"}
                />
                <Popper
                    placement="bottom-start"
                    sx={{ width: 450 }}
                    id={id}
                    open={openEl}
                    anchorEl={anchorEl}
                    transition
                >
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Box
                                sx={{
                                    borderRadius: "12px",
                                    border: "1px solid lightgray",
                                    p: 1,
                                    bgcolor: (theme) => theme.background.box,
                                }}
                            >
                                <Box sx={{ ...center, justifyContent: "space-between", p: 1 }}>
                                    <Typography
                                        sx={{
                                            fontSize: "16px",
                                            fontWeight: 500,
                                            color: (theme) => theme.typography.color,
                                        }}
                                    >
                                        محمدرضا رحمتی
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            fontSize: "12px",
                                            fontWeight: 500,
                                            color: (theme) => theme.palette.text.primary,
                                        }}
                                    >
                                        C-112233
                                    </Button>
                                </Box>

                                <Box sx={{ ...center, gap: "5px", mt: 1 }}>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            borderColor: (theme) => theme.palette.darkBlue.main,
                                            fontSize: "12px",
                                            fontWeight: 700,
                                            color: (theme) => theme.palette.darkBlue.main,
                                        }}
                                    >
                                        {toPersian("09138090933")}
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            borderColor: (theme) => theme.palette.darkBlue.main,
                                            fontSize: "12px",
                                            fontWeight: 500,
                                            color: (theme) => theme.palette.darkBlue.main,
                                        }}
                                    >
                                        مشتری
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            borderColor: (theme) => theme.palette.darkBlue.main,
                                            fontSize: "12px",
                                            fontWeight: 500,
                                            color: (theme) => theme.palette.darkBlue.main,
                                        }}
                                    >
                                        اعتبار:خوب
                                    </Button>

                                    <Button
                                        sx={{
                                            fontSize: "12px",
                                            fontWeight: 700,
                                            color: (theme) => theme.palette.darkBlue.main,
                                        }}
                                    >
                                        {toPersian(separateBy3("5600000"))}ریال
                                    </Button>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            bgcolor: (theme) => theme.palette.warning.main,
                                            fontSize: "12px",
                                            fontWeight: 500,
                                            color: (theme) => theme.palette.text.primary,
                                        }}
                                    >
                                        بدهکار
                                    </Button>
                                </Box>
                            </Box>
                        </Fade>
                    )}
                </Popper>
                <Divider orientation="vertical" flexItem />
                <Input
                    width={"20%"}
                    hasIcon={false}
                    type={"number"}
                    placeholder={"تلفن همراه"}
                />
                <Input
                    width={"15%"}
                    hasIcon={false}
                    type={"text"}
                    placeholder={"نام"}
                />
                <Input
                    width={"15%"}
                    hasIcon={false}
                    type={"text"}
                    placeholder={" نام خانوادگی"}
                />
                <Box sx={{ ...center, gap: "10px" }}>
                    <Button
                        onClick={() => showDialoghandler()}
                        variant="contained"
                        sx={{
                            bgcolor: theme.palette.darkBlue.main,
                            color: (theme) => theme.palette.text.primary,
                            p: 1,
                            px: 3,
                            fontSize: "12px",
                            fontWeight: 500,
                        }}
                    >
                        توضیحات
                    </Button>
                    <Button
                        onClick={() => showTransactionDialoghandler()}
                        variant="contained"
                        sx={{
                            bgcolor: (theme) => theme.palette.darkBlue.main,
                            color: (theme) => theme.palette.text.primary,
                        }}
                    >
                        <PersonIcon
                            fontSize="medium"
                            sx={{ fill: (theme) => theme.palette.text.primary }}
                        />
                    </Button>
                </Box>
            </Box>
            <Description status={open} handlerCloseDialog={handlerCloseDialog} />
            <TransactionpartyDg
                status={openTransaction}
                handlerCloseDialog={handlerCloseTransactionDialog}
            />
        </Box>
    );
}

export default NewFactor;
