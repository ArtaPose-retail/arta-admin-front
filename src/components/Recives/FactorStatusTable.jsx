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
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { separateBy3, toPersian, toastHandler } from "../../utils/setting";
import moment from "jalali-moment";

function createData(title, TransactionNum, amount, time, date) {
    return {
        title, TransactionNum, amount, time, date

    };
}


function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    const deleteBtn = () => {
        toastHandler("ایتم مورد  نظر حذف شد", "warning");
    };

    return (
        <React.Fragment>
            <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>

                <TableCell
                    align="center"
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500, ...center }}
                >
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                    {row.title}
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(row.TransactionNum)}
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(separateBy3(row.amount))}
                </TableCell>

                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(row.time)}
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(moment(row.date, "YYYY-MM-DD")
                        .locale("fa")
                        .format("YYYY/MM/D"))}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Box
                                sx={{ color: (theme) => theme.palette.disable.main, ...center, justifyContent: "space-between", gap: "15px" }}

                                gutterBottom
                                component="div"
                            >
                                <Box sx={{ ...center }}>
                                    <Typography sx={{ fontSize: "12px", fontWeight: 400 }}>
                                        مبلغ دریافتی:
                                    </Typography>
                                    <Typography sx={{ fontSize: "12px", fontWeight: 400, color: theme => theme.palette.darkBlue.main }}>
                                        {toPersian(separateBy3("4500000"))} ریال
                                    </Typography>
                                </Box>
                                <Box>
                                    <EditIcon fontSize="small" />
                                    <DeleteOutlineIcon
                                        onClick={() => deleteBtn()}
                                        fontSize="small"
                                        sx={{ fill: (theme) => theme.palette.warning.main, cursor: "pointer" }}
                                    />
                                </Box>

                            </Box>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const rows = [
    createData("تقدی", "34235325", 400000, "13:13", new Date()),
    createData("پوز", "34235325", 400000, "13:13", new Date()),
    createData("تخفیف", "34235325", 2000, "13:13", new Date()),
    createData("تخفیف", "34235325", 2000, "13:13", new Date()),
    createData("تخفیف", "34235325", 2000, "13:13", new Date()),
    createData("تخفیف", "34235325", 2000, "13:13", new Date()),
    createData("تخفیف", "34235325", 2000, "13:13", new Date()),
    createData("تخفیف", "34235325", 2000, "13:13", new Date()),
    createData("تخفیف", "34235325", 2000, "13:13", new Date()),
    createData("تخفیف", "34235325", 2000, "13:13", new Date()),
    createData("تخفیف", "34235325", 2000, "13:13", new Date()),

];

export default function FactorStatusTable() {
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
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
                                عنوان
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                شماره تراکنش
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
                                ساعت
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                تاریخ
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <Row key={index} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
