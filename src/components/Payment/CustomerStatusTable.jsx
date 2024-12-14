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
import { Divider } from "@mui/material";

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
                    sx={{
                        color: (theme) => theme.typography.color,
                        fontWeight: 500,
                        ...center,

                    }}
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
                    sx={{ color: (theme) => theme.palette.darkBlue.main, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(separateBy3(row.finalFee))}
                    ریال
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
                                        وزن خالص:
                                    </Typography>
                                    <Typography sx={{ fontSize: "12px", fontWeight: 500, color: theme => theme.palette.darkBlue.main }}>
                                        {toPersian(("40"))} کیلوگرم
                                    </Typography>
                                </Box>
                                <Divider orientation="vertical" flexItem />
                                <Box sx={{ ...center }}>
                                    <Typography sx={{ fontSize: "12px", fontWeight: 400 }}>
                                        وزن ناخالص:
                                    </Typography>
                                    <Typography sx={{ fontSize: "12px", fontWeight: 500, color: theme => theme.palette.darkBlue.main }}>
                                        {toPersian(("45"))} کیلوگرم
                                    </Typography>
                                </Box>
                                <Box>

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


const rows = [createData("سیب قرمز سبزوار", "24", "25000", "20", "300000")];


export default function CustomerStatusTable() {
    return (
        <Box
            sx={{
                width: "100%",
                height: "190px",
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
                        {rows.map((row, index) => (
                            <Row key={index} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
