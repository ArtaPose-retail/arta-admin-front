import * as React from "react";
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
import { separateBy3, toPersian, toastHandler } from "../../utils/setting";
import moment from "jalali-moment";
import ProductDetails from "./Dialogs/ProductDetails";
import { customerFactortable } from "../../utils/data";

function createData(title, amount, fee, weight, finalFee) {
    return {
        title,
        amount,
        fee,
        weight,
        finalFee,
    };
}

function Row(props) {
    const { row } = props;
    const [openCollaps, setOpenCollaps] = React.useState(false);

    const [open, setOpen] = React.useState(false);

    const showDialoghandler = () => {
        setOpen(true);
    };
    const handlerCloseDialog = () => {
        setOpen(false);
    };

    const deleteBtn = () => {
        toastHandler("ایتم مورد  نظر حذف شد", "warning");
    };

    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    return (
        <React.Fragment>
            <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell
                    align="center"
                    sx={{
                        color: (theme) => theme.typography.color,
                        fontWeight: 500,
                        ...center,
                    }}
                >
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpenCollaps(!openCollaps)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                    {row.title}
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(row.amount)}
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(separateBy3(row.fee))}
                    ریال
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(row.weight)}
                    کیلوگرم
                </TableCell>
                <TableCell
                    sx={{
                        color: (theme) => theme.palette.darkBlue.main,
                        fontWeight: 500,
                    }}
                    align="center"
                >
                    {toPersian(separateBy3(row.finalFee))}
                    ریال
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={openCollaps} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Box
                                sx={{
                                    color: (theme) => theme.palette.disable.main,
                                    ...center,
                                    justifyContent: "flex-start",
                                    gap: "15px",
                                }}
                                gutterBottom
                                component="div"
                            >
                                <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
                                    عملیات:
                                </Typography>
                                <EditIcon fontSize="small" onClick={showDialoghandler} />
                                <DeleteOutlineIcon
                                    onClick={() => deleteBtn()}
                                    fontSize="small"
                                    sx={{
                                        fill: (theme) => theme.palette.warning.main,
                                        cursor: "pointer",
                                    }}
                                />
                            </Box>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
            <ProductDetails
                iteminfo={row.details}
                status={open}
                handlerCloseDialog={handlerCloseDialog}
            />
        </React.Fragment>
    );
}

export default function CustomerFactorTable() {
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
                                نام محصول
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                تعداد
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                فی
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                وزن
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                مبلغ نهایی
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customerFactortable?.map((row, index) => (
                            <Row key={index} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}