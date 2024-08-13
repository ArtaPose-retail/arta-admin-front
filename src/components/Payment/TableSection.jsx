import {
    Box,
    Button,
    Divider,
    InputAdornment,
    Popper,
    TextField,
    Typography,
    Fade,
    Radio,
    Grid,
    FormControlLabel,
} from "@mui/material";
import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Title from "../UI/Title";
import { separateBy3, toPersian } from "../../utils/setting";
import FactorStatusTable from "./FactorStatusTable";
import CustomerStatusTable from "./CustomerStatusTable";
import PayStatus from "../HomePage/PayStatus";
import CustomerFactor from "../HomePage/CustomerFactor";
import CancelBtn from "../UI/CancelBtn";
import { ExpandMore } from "@mui/icons-material";
import theme from "../../styles/theme";
import Input from "../UI/Input";

function TableSection() {
    const [open, setOpen] = React.useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [PosItem, setPositem] = React.useState(null);
    const [RadioCheck, setRadioCheck] = React.useState(false);
    const [tabs, setTabs] = useState(1);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };

    const handleChange = (id) => {
        setTabs(+id);
    };

    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? "transition-popper" : undefined;
    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    const [openCancelBTn, setOpenCancelBTn] = useState(false);
    const handleOpenCancleModal = () => setOpenCancelBTn(true);
    const handleCloseCancleModal = () => setOpenCancelBTn(false);
    return (
        <Box
            sx={{
                width: "40%",
                borderRadius: "18px",
                bgcolor: (theme) => theme.background.box,
                p: 1.5,
                height: "100%",
            }}
        >
            <Box sx={{ ...center, flexDirection: "column", height: "100%" }}>
                <Box
                    sx={{
                        ...center,
                        border: "1px solid #DBDCDE",
                        borderRadius: "7px",
                        gap: "5px",
                        px: 1,
                        p: 0.5,
                    }}
                >
                    <Button
                        onClick={(e) => handleChange(e.target.id)}
                        id="1"
                        variant="contained"
                        sx={{
                            bgcolor: (theme) =>
                                tabs === 1 ? theme.palette.divider : theme.palette.text.primary,
                            color: (theme) =>
                                tabs === 1
                                    ? theme.palette.text.primary
                                    : theme.palette.disable.main,
                            borderRadius: "7px",
                        }}
                    >
                        {" "}
                        وضیعت پرداخت
                    </Button>
                </Box>
                <Box
                    sx={{
                        ...center,

                        bgcolor: (theme) => theme.palette.green.main,
                        width: "65%",
                        borderRadius: "8px",
                        color: (theme) => theme.palette.text.primary,
                        p: 1,
                        mt: 1,
                        gap: "15%",
                    }}
                >
                    <Typography
                        sx={{
                            color: (theme) => theme.palette.text.primary,
                            fontSize: "14px",
                            fontWeight: 700,
                        }}
                    >
                        مبلغ
                    </Typography>
                    <Box sx={{ ...center }}>
                        <Typography
                            sx={{
                                color: (theme) => theme.palette.text.primary,
                                fontSize: "20px",
                                fontWeight: 700,
                            }}
                        >
                            {toPersian(separateBy3("720000"))}
                        </Typography>
                        <Typography
                            sx={{
                                color: (theme) => theme.palette.text.primary,
                                fontSize: "10px",
                                fontWeight: 700,
                            }}
                        >
                            ریال
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ ...center, m: 0.5, gap: "10px", width: "65%" }}>
                    <Input
                        height={"auto"}
                        hasText={true}

                        type={"number"}

                    />

                </Box>
                <Box sx={{ ...center, gap: "15px", my: 1 }}>
                    <Box
                        sx={{
                            ...center,
                            bgcolor: "#3A5DF0",
                            color: "white",
                            direction: "ltr",
                            height: "40px",
                            borderRadius: "12px",
                            p: 0.5,
                            gap: "5px",
                        }}
                    >
                        <Typography
                            onClick={() => toastHandler("درخواست ارسال شد", "info")}
                            sx={{
                                color: (theme) => theme.palette.text.primary,
                                cursor: "pointer",
                            }}
                        >
                            {PosItem}
                        </Typography>
                        <Box
                            sx={{
                                borderLeft: "1px solid white",
                                ...center,
                                cursor: "pointer",
                            }}
                            aria-describedby={id}
                            type="button"
                            onClick={handleClick}
                        >
                            <Typography
                                sx={{
                                    color: (theme) => theme.palette.text.primary,
                                    fontSize: "12px",
                                    fontWeight: 700,
                                }}
                            >
                                از حساب
                            </Typography>
                            <ExpandMore sx={{ fill: "white" }} />
                        </Box>
                        <Popper id={id} open={open} anchorEl={anchorEl} transition>
                            {({ TransitionProps }) => (
                                <Fade {...TransitionProps} timeout={350}>
                                    <Box
                                        sx={{
                                            borderRadius: "12px",
                                            border: "1px solid gray",
                                            p: 1,
                                            bgcolor: "background.paper",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                borderBottom: "1px solid gray",
                                                p: 1,
                                                cursor: "pointer",
                                            }}
                                            onClick={() => {
                                                setPositem(" حساب 1");
                                                setOpen(false);
                                            }}
                                        >
                                            حساب ۱
                                        </Typography>
                                        <Typography
                                            sx={{
                                                p: 1,
                                                cursor: "pointer",
                                            }}
                                            onClick={() => {
                                                setPositem("حساب۲");
                                                setOpen(false);
                                            }}
                                        >
                                            حساب۲
                                        </Typography>
                                    </Box>
                                </Fade>
                            )}
                        </Popper>
                    </Box>
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: (theme) => theme.palette.darkBlue.main,
                            color: (theme) => theme.palette.text.primary,
                            fontSize: "14px",
                            fontWeight: 400,
                            px: 4,
                        }}
                    >
                        نقد
                    </Button>
                </Box>
                <Title
                    title={"عملیات"}
                    Typoprops={{
                        color: (theme) => theme.palette.divider,
                        fontSize: "14px",
                        fontWeight: 500,
                        textAlign: "start",
                        width: "100%",
                    }}
                />
                <Divider
                    orientation="horizontal"
                    variant="middle"
                    flexItem
                    sx={{ my: 1 }}
                />
                <Grid
                    container
                    spacing={2}
                    sx={{ alignItems: "center", justifyContent: "center" }}
                >
                    <Grid item xs={6}>
                        <Box sx={{ ...center, gap: "5px", }}>
                            <Typography sx={{ fontSize: "14px", fontWeight: 700 }}>
                                مبلغ :
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: 700,
                                    color: (theme) => theme.palette.warning.main,
                                }}
                            >
                                {toPersian(separateBy3("720000"))} ریال
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sx={{ my: 1 }}>
                        <Box sx={{ ...center, gap: "5px" }}>
                            <Typography sx={{ fontSize: "14px", fontWeight: 700 }}>
                                تخفیف:
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: 700,
                                    color: (theme) => theme.palette.warning.main,
                                }}
                            >
                                {toPersian(separateBy3("720000"))} ریال
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={2}
                    sx={{ alignItems: "center", justifyContent: "center" }}
                >
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{
                                bgcolor: theme => theme.palette.darkBlue.main,
                                color: them => theme.palette.text.primary
                            }}
                        >
                            چاپ رسید
                        </Button>
                    </Grid>
                </Grid>
                <Title
                    title={"تراکنش"}
                    Typoprops={{
                        color: (theme) => theme.palette.divider,
                        fontSize: "14px",
                        fontWeight: 500,
                        textAlign: "start",
                        width: "100%",
                        mt: 1,
                    }}
                />
                <Divider
                    orientation="horizontal"
                    variant="middle"
                    flexItem
                    sx={{ my: 1 }}
                />
                <Box sx={{ width: "100%", overflow: "hidden", height: "100%" }}>
                    <Box
                        sx={{
                            bgcolor: (theme) => theme.background.box,
                            borderRadius: "18px",
                            height: "100%",
                            p: 1,
                            overflowY: "scroll",
                        }}
                    >
                        <FactorStatusTable />
                    </Box>
                </Box>

                <Box
                    sx={{ ...center, width: "100%", gap: "5px", mt: 1, height: "10%" }}
                >
                    <Button
                        onClick={() => toastHandler("فاکتور با موفقیت ثبت شد", "success")}
                        variant="contained"
                        sx={{
                            bgcolor: (theme) => theme.palette.green.main,
                            color: (theme) => theme.palette.text.primary,
                            width: "70%",
                            fontSize: "14px",
                            fontWeight: 700,
                            py: 2,
                            borderRadius: "12px",
                        }}
                    >
                        ثبت نهایی
                    </Button>
                    <CancelBtn
                        BtnTitle={
                            <Typography sx={{
                                bgcolor: (theme) => theme.palette.warning.main,
                                color: (theme) => theme.palette.text.primary,
                                width: "100%",
                                p: 2,
                                fontSize: "14px",
                                fontWeight: 700,
                                borderRadius: "12px",
                                "&:hover": {
                                    bgcolor: (theme) => theme.palette.warning.main,
                                    color: (theme) => theme.palette.text.primary,
                                },
                            }}>
                                انصراف
                            </Typography>
                        }
                        width="30%"

                        open={openCancelBTn}
                        handleClose={handleCloseCancleModal}
                        handleOpen={handleOpenCancleModal}
                        title={"انصراف  از درخواست"}
                        question={"آیا از حذف فاکتور شماره 12345 اطمینان دارید؟"} />
                </Box>
            </Box>
        </Box>
    );
}

export default TableSection;
