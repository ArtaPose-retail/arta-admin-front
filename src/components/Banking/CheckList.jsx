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
import { checklistbanking } from "../../utils/data";


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
    const { row, } = props;
    const [openCollaps, setOpenCollaps] = React.useState(false);

    const [open, setOpen] = React.useState(false);

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
                        onClick={() => setOpenCollaps(!openCollaps)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                    {toPersian(props.index + 1)}
                </TableCell>
                <TableCell
                    align="center"
                    sx={{
                        color: (theme) => theme.typography.color,
                        fontWeight: 500,


                    }}
                >

                    {toPersian(row?.serial)}
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {row.title}
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(
                        moment(row?.date, "YYYY-MM-DD")
                            .locale("fa")
                            .format("YYYY/MM/D")
                    )}

                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {row?.description}

                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.palette.warning.main, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(separateBy3(row?.income))}
                    ریال
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.palette.green.main, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(separateBy3(row?.outcome))}
                    ریال
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.palette.darkBlue.main, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(separateBy3(row?.remain))}
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
                                    sx={{ fill: (theme) => theme.palette.warning.main }}
                                />
                            </Box>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}



export default function CheckList() {

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
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
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
                                سریال
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
                                تاریخ و زمان
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                توضیحات
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                واریز
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                برداشت
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                مانده
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {checklistbanking?.map((row, index) => (
                            <Row key={index} row={row} index={index} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Box>
    );
}
