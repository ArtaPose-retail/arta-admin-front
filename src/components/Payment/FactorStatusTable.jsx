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
import { separateBy3, toPersian } from "../../utils/setting";
import moment from "jalali-moment";

function createData(title, TransactionNum, date, reciveType) {
    return {
        title, TransactionNum, date, reciveType

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
                    {toPersian(
                        moment(new Date(), "YYYY-MM-DD")
                            .locale("fa")
                            .format("HH:mm - YYYY/MM/D")
                    )

                    }
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(row.reciveType)}
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
                                        fontSize="small"
                                        sx={{ fill: (theme) => theme.palette.warning.main }}
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
    createData("دریافتی", "34235325", new Date(), "پوز۱"),
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
                                تاریخ
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                نوع دریافتی
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
