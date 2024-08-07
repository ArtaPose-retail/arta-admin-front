import {
    Box,
    Button,
    Divider,
    Typography,
    Popper,
    Fade,
    Grid,
    Popover,
} from "@mui/material";
import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Title from "../UI/Title";
import { separateBy3, toPersian } from "../../utils/setting";
import FactorStatusTable from "./FactorStatusTable";
import CancelBtn from "../UI/CancelBtn";
import { ExpandMore } from "@mui/icons-material";
import Input from "../UI/Input";

function TableSection() {
    const [anchorPopover, setAnchorPopover] = React.useState(null);

    const handleClickPopover = (event) => {
        setAnchorPopover(event.currentTarget);
    };

    const handleClosePopover = () => {
        setAnchorPopover(null);
    };

    const PopoverHandler = () => {
        toastHandler("درخواست ارسال شد", "info");
        setAnchorEl(null);
    };

    const openPopover = Boolean(anchorPopover);
    const idPopover = openPopover ? "simple-popover" : undefined;

    const [open, setOpen] = React.useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [PosItem, setPositem] = React.useState(null);
    const [RadioCheck, setRadioCheck] = React.useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };

    const [tabs, setTabs] = useState(1);

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
                height: "650px",
            }}
        >
            <Box sx={{ ...center, flexDirection: "column", height: "100%" }}>
                <Box sx={{ ...center, justifyContent: "space-between", width: "100%" }}>
                    <Box
                        sx={{
                            ...center,

                            borderRadius: "7px",
                            gap: "5px",
                            px: 1,
                            p: 0.5,
                            width: "100%",
                        }}
                    >
                        <Button
                            onClick={(e) => handleChange(e.target.id)}
                            id="1"
                            variant="contained"
                            sx={{
                                bgcolor: (theme) =>
                                    tabs === 1
                                        ? theme.palette.divider
                                        : theme.palette.text.primary,
                                color: (theme) =>
                                    tabs === 1
                                        ? theme.palette.text.primary
                                        : theme.palette.disable.main,
                                borderRadius: "7px",
                            }}
                        >
                            {" "}
                            وضیعت فاکتور
                        </Button>
                    </Box>
                    <MoreVertIcon
                        sx={{ cursor: "pointer", ...center }}
                        aria-describedby={idPopover}
                        variant="contained"
                        onClick={handleClickPopover}
                    />

                    <Popover
                        id={idPopover}
                        open={openPopover}
                        anchorEl={anchorPopover}
                        onClose={handleClosePopover}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        transformOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                        }}
                    >
                        <Box sx={{ bgcolor: (theme) => theme.background.box }}>
                            <Typography
                                onClick={() => PopoverHandler()}
                                sx={{ p: 2, cursor: "pointer" }}
                            >
                                چاپ خودکار رسید{" "}
                            </Typography>
                        </Box>
                    </Popover>
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
                            fontSize: "12px",
                            fontWeight: 700,
                        }}
                    >
                        قابل پرداخت
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
                    <Input height={"auto"} hasText={true} type={"number"} />
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
                                                setPositem("دستگاه پز 1");
                                                setOpen(false);
                                            }}
                                        >
                                            دستگاه پز 1
                                        </Typography>
                                        <Typography
                                            sx={{
                                                borderBottom: "1px solid gray",
                                                p: 1,
                                                cursor: "pointer",
                                            }}
                                            onClick={() => {
                                                setPositem("دستگاه پز ملت");
                                                setOpen(false);
                                            }}
                                        >
                                            دستگاه پز ملت
                                        </Typography>
                                        <Typography
                                            sx={{ p: 1, cursor: "pointer" }}
                                            onClick={() => {
                                                setPositem("دستگاه پز 1");
                                                setOpen(false);
                                            }}
                                        >
                                            دستگاه پز ملت
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
                        مبلغ
                    </Button>
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: (theme) => theme.palette.darkBlue.main,
                            color: (theme) => theme.palette.text.primary,
                            fontSize: "14px",
                            fontWeight: 400,
                        }}
                    >
                        تخفیف
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
                        <Box sx={{ ...center, gap: "5px" }}>
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
                                bgcolor: (theme) => theme.palette.darkBlue.main,
                                color: (theme) => theme.palette.text.primary,
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

                <Box sx={{ width: "100%", overflow: "hidden", height: "100%", mt: 2 }}>
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
                        onClick={() => toastHandler("فاکتور با موفقیت ثبت شد", "info")}
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
                                width: "30%",
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
                        question={"آیا از حذف فاکتور شماره 12345 اطمینان دارید؟"}
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default TableSection;
