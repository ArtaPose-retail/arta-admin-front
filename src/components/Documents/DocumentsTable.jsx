import { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
    separateBy3,
    separateBy4,
    toPersian,
    toastHandler,
} from "../../utils/setting";
import moment from "jalali-moment";
import { customerFactortable } from "../../utils/data";
import { Button, Checkbox, Divider, Fade, Popper, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import reactRouts from "../../utils/reactRouts";
import Gallery from "./Gallery";

import { ExpandMore } from "@mui/icons-material";




function createData(DocCode, title, transactionName, date, fee) {
    return {
        DocCode,
        title,
        transactionName,
        date,
        fee,
        Details: {
            productName: "سیب قرمز البرز",
            checks: "12",
            destinationAccount: "امیرحسین سلیمانی فرد",
        },
    };
}

function Row(props) {
    const [openPopper, setOpenPopper] = useState(false);
    const [PosItem, setPositem] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpenPopper((previousOpenPooper) => !previousOpenPooper);
    };

    const canBeOpen = openPopper && Boolean(anchorEl);
    const id = canBeOpen ? "transition-popper" : undefined;

    const { row, index } = props;
    const [openCollaps, setOpenCollaps] = useState(false);

    const [deleteItem, setDeleteItem] = useState(false);
    const deletehandler = () => {
        setDeleteItem(true);
        toastHandler("ایتم مورد نظر حذف شد", "warning")
    };

    const [open, setOpen] = useState(false);

    const showDialoghandler = () => {
        setOpen(true);
    };
    const handlerCloseDialog = () => {
        setOpen(false);
    };

    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    return (
        <Fragment>
            <TableRow
                sx={{
                    "& > *": { borderBottom: "unset" },
                    bgcolor: (theme) => (!deleteItem ? "" : theme.palette.warning.main),
                }}
            >
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    <Checkbox color="primary" />
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(index + 1)}
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(separateBy4(row?.DocCode))}
                </TableCell>

                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {row?.title}
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {row?.transactionName}
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(
                        moment(row?.date, "YYYY-MM-DD").locale("fa").format("YYYY/MM/D")
                    )}
                </TableCell>
                <TableCell
                    sx={{
                        color: (theme) => theme.palette.darkBlue.main,
                        fontWeight: 500,
                    }}
                    align="center"
                >
                    {toPersian(separateBy3(row?.fee))}
                    ریال
                </TableCell>
                <TableCell>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "10px",
                        }}
                    >
                        <Button
                            onClick={() => toastHandler("پیامک با موفقیت ارسال شد ")}
                            variant="outlined"
                            sx={{ color: (theme) => theme.typography.color }}
                        >
                            ارسال پیامک
                        </Button>
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
                                onClick={() => toastHandler("درخواست چاپ ارسال شد")}
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
                            <Popper id={id} open={openPopper} anchorEl={anchorEl} transition>
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
                                                    setPositem("  چاپ لیبلی");
                                                    setOpenPopper(false);
                                                }}
                                            >
                                                چاپ لیبلی
                                            </Typography>
                                            <Typography
                                                sx={{ p: 1, cursor: "pointer" }}
                                                onClick={() => {
                                                    setPositem("  چاپ لیبلی");
                                                    setOpenPopper(false);
                                                }}
                                            >

                                                چاپ حرارتی
                                            </Typography>
                                        </Box>
                                    </Fade>
                                )}
                            </Popper>
                        </Box>
                        <Gallery />
                        <Link to={reactRouts.home}>
                            <EditIcon fontSize="medium" onClick={showDialoghandler} />
                        </Link>
                        <DeleteOutlineIcon
                            onClick={() => deletehandler()}
                            fontSize="medium"
                            sx={{
                                fill: (theme) => theme.palette.warning.main,
                                cursor: "pointer",
                            }}
                        />
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => setOpenCollaps(!openCollaps)}
                        >
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </Box>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={openCollaps} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1, ...center, gap: "15px" }}>
                            <Box sx={{ ...center }}>
                                <Typography
                                    sx={{
                                        color: (theme) => theme.palette.divider,
                                        fontSize: "16px",
                                        fontWeight: 400,
                                    }}
                                >
                                    نام محصول:
                                </Typography>
                                <Typography
                                    sx={{
                                        color: (theme) => theme.typography.color,
                                        fontSize: "16px",
                                        fontWeight: 500,
                                    }}
                                >
                                    {row?.Details?.productName}
                                </Typography>
                            </Box>
                            <Divider flexItem orientation="vertical" />
                            <Box sx={{ ...center }}>
                                <Typography
                                    sx={{
                                        color: (theme) => theme.palette.divider,
                                        fontSize: "16px",
                                        fontWeight: 400,
                                    }}
                                >
                                    تعداد چک:
                                </Typography>
                                <Typography
                                    sx={{
                                        color: (theme) => theme.typography.color,
                                        fontSize: "16px",
                                        fontWeight: 500,
                                    }}
                                >
                                    {toPersian(row?.Details?.checks)}
                                </Typography>
                            </Box>
                            <Divider flexItem orientation="vertical" />
                            <Box sx={{ ...center }}>
                                <Typography
                                    sx={{
                                        color: (theme) => theme.palette.divider,
                                        fontSize: "16px",
                                        fontWeight: 400,
                                    }}
                                >
                                    {" "}
                                    به حساب:
                                </Typography>
                                <Typography
                                    sx={{
                                        color: (theme) => theme.typography.color,
                                        fontSize: "16px",
                                        fontWeight: 500,
                                    }}
                                >
                                    {row?.Details?.destinationAccount}
                                </Typography>
                            </Box>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </Fragment>
    );
}

const rows = [
    createData("98326498", "دریافتی", "امیرحسین فهمیده", new Date(), "300000"),
    createData("98326498", "دریافتی", "امیرحسین فهمیده", new Date(), "300000"),
    createData("98326498", "دریافتی", "امیرحسین فهمیده", new Date(), "300000"),
    createData("98326498", "دریافتی", "امیرحسین فهمیده", new Date(), "300000"),
];

export default function DocumentsTable() {
    return (
        <Box
            sx={{
                width: "100%",
                height: "78%",
                overflowY: "scroll",
                overflowX: "hidden",
            }}
        >
            <TableContainer>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                <Checkbox
                                    color="primary"
                                // checked={isItemSelected}
                                // inputProps={{
                                //     "aria-labelledby": labelId
                                // }}
                                />
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                ردیف
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                شناسه
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                عنوان
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                طرف معامله
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                تاریخ و زمان
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                مبلغ
                            </TableCell>

                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                واحد عملیات
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows?.map((row, index) => (
                            <Row key={index} row={row} index={index} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}