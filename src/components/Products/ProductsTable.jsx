import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import moment from "jalali-moment";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Box } from "@mui/material";
import { products } from "../../utils/data";
import { toPersian, toastHandler } from "../../utils/setting";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        color: theme.palette.common.black,
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

export default function ProductsTable() {
    const deleteBtn = () => {
        toastHandler("ایتم مورد  نظر حذف شد", "warning");
    };
    return (
        <TableContainer sx={{ maxHeight: 450 }}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">ردیف</StyledTableCell>
                        <StyledTableCell align="center"> نام ژنریک محصول</StyledTableCell>
                        <StyledTableCell align="center">نام منتسب</StyledTableCell>
                        <StyledTableCell align="center">عملیات </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((item, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell width={"10%"} align="center">
                                {toPersian(index + 1)}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {item?.genericName}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {item?.title}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        gap: "10px",
                                    }}
                                >
                                    <EditIcon />
                                    <DeleteOutlineIcon
                                        onClick={() => deleteBtn()}
                                        sx={{ fill: (theme) => theme.palette.warning.main, cursor: "pointer" }}
                                    />
                                </Box>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
