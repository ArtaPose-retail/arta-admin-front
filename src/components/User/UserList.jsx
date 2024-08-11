import { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import moment from "jalali-moment";
import { Button, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { separateBy4, toPersian } from "../../utils/setting";
import { FactorPageTable } from "../../utils/data";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,

    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

function createData(fullName, userName, password, access, phoneNumber) {
    return { fullName, userName, password, access, phoneNumber };
}

const rows = [
    createData("Frozen yoghurt", "test1", 1, "ادمین", "09138090933"),
    createData("Frozen yoghurt", "test1", 1, "ادمین", "09138090933"),
    createData("Frozen yoghurt", "test1", 1, "ادمین", "09138090933"),
];

function Row(props) {
    const { row, index } = props;
    const [openCollaps, setOpenCollaps] = useState(false);

    const navigate = useNavigate();

    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    return (
        <Fragment>
            <StyledTableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell
                    align="center"
                    sx={{
                        color: (theme) => theme.typography.color,
                        fontWeight: 500,
                        ...center,
                    }}
                >
                    {toPersian(index + 1)}
                </TableCell>

                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {row?.fullName}
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {row?.userName}
                </TableCell>

                <TableCell
                    sx={{
                        color: (theme) => theme.typography.color,
                        fontWeight: 500,
                    }}
                    align="center"
                >
                    {row?.password}
                </TableCell>
                <TableCell
                    sx={{
                        color: (theme) => theme.typography.color,
                        fontWeight: 500,
                    }}
                    align="center"
                >
                    {row?.access}
                </TableCell>
                <TableCell
                    sx={{
                        color: (theme) => theme.typography.color,
                        fontWeight: 500,
                    }}
                    align="center"
                >
                    {toPersian(row?.phoneNumber)}
                </TableCell>
                <TableCell
                    sx={{
                        color: (theme) => theme.typography.color,
                        fontWeight: 500,
                    }}
                    align="center"
                >
                    <Box sx={{ ...center, gap: "15px" }}>
                        <EditIcon sx={{}} />
                        <DeleteOutlineIcon
                            sx={{ fill: (theme) => theme.palette.warning.main }}
                        />
                    </Box>
                </TableCell>
            </StyledTableRow>
        </Fragment>
    );
}

export default function UserList() {
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
                            <StyledTableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                ردیف
                            </StyledTableCell>
                            <StyledTableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                نام و نام خانوادگی
                            </StyledTableCell>
                            <StyledTableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                نام کاربری
                            </StyledTableCell>
                            <StyledTableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                رومز عبور
                            </StyledTableCell>
                            <StyledTableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                سطح دسترسی
                            </StyledTableCell>
                            <StyledTableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                شماره همراه
                            </StyledTableCell>

                            <StyledTableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                عملیات
                            </StyledTableCell>
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
