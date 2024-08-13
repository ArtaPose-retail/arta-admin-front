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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { separateBy3, separateBy4, toPersian } from "../../utils/setting";
import moment from "jalali-moment";
import { Button, Divider } from "@mui/material";

function createData(
    serial,
    describe,
    title,
    factorDate,
    FactorNumber,
    debtor,
    creditor,
    remain
) {
    return {
        serial,
        describe,
        title,
        factorDate,
        FactorNumber,
        debtor,
        creditor,
        remain,
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
                    {toPersian(index + 1)}
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(row?.serial)}
                </TableCell>

                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {row?.describe}
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
                    {toPersian(
                        moment(row?.factorDate, "YYYY-MM-DD")
                            .locale("fa")
                            .format("YYYY/MM/D")
                    )}
                </TableCell>
                <TableCell
                    sx={{
                        color: (theme) => theme.palette.darkBlue.main,
                        fontWeight: 500,
                    }}
                    align="center"
                >
                    {toPersian(separateBy4(row?.FactorNumber))}
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.palette.warning.main, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(separateBy4(row?.debtor))}
                    ریال
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.palette.green.main, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(separateBy4(row?.creditor))}
                    ریال
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(separateBy4(row?.remain))}
                    ریال
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpenCollaps(!openCollaps)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={openCollaps} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1, ...center, gap: "15px" }}>
                            <Box sx={{ ...center, gap: "10px" }}>
                                <Typography
                                    sx={{
                                        color: (theme) => theme.palette.divider,
                                        fontSize: "16px",
                                        fontWeight: 400,
                                    }}
                                >
                                    وضیعت:
                                </Typography>
                                <Typography
                                    sx={{
                                        color: (theme) => theme.palette.green.main,
                                        fontSize: "16px",
                                        fontWeight: 500,
                                    }}
                                >
                                    بسته شده
                                </Typography>
                            </Box>
                            <Divider flexItem orientation="vertical" />
                            <Box sx={{ ...center, gap: "10px" }}>
                                <Typography
                                    sx={{
                                        color: (theme) => theme.palette.divider,
                                        fontSize: "16px",
                                        fontWeight: 400,
                                    }}
                                >
                                    واحد عملیات:
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={{
                                        height: "30px",
                                        px: 3,
                                        bgcolor: (theme) => theme.palette.darkBlue.main,
                                        color: (theme) => theme.palette.text.primary,
                                    }}
                                >
                                    جزئیات
                                </Button>
                            </Box>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </Fragment>
    );
}

const rows = [
    createData(
        "346344",
        "سیب قرمز",
        "خرید",
        new Date(),
        "34634633",
        "0",
        "4500000",
        "9000000"
    ),
    createData(
        "346344",
        "سیب قرمز",
        "خرید",
        new Date(),
        "34634633",
        "0",
        "4500000",
        "9000000"
    ),
    createData(
        "346344",
        "سیب قرمز",
        "خرید",
        new Date(),
        "34634633",
        "0",
        "4500000",
        "9000000"
    ),
    createData(
        "346344",
        "سیب قرمز",
        "خرید",
        new Date(),
        "34634633",
        "0",
        "4500000",
        "9000000"
    ),
    createData(
        "346344",
        "سیب قرمز",
        "خرید",
        new Date(),
        "34634633",
        "0",
        "4500000",
        "9000000"
    ),
    createData(
        "346344",
        "سیب قرمز",
        "خرید",
        new Date(),
        "34634633",
        "0",
        "4500000",
        "9000000"
    ),
    createData(
        "346344",
        "سیب قرمز",
        "خرید",
        new Date(),
        "34634633",
        "0",
        "4500000",
        "9000000"
    ),
    createData(
        "346344",
        "سیب قرمز",
        "خرید",
        new Date(),
        "34634633",
        "0",
        "4500000",
        "9000000"
    ),
    createData(
        "346344",
        "سیب قرمز",
        "خرید",
        new Date(),
        "34634633",
        "0",
        "4500000",
        "9000000"
    ),
];

export default function AccountDetailsTable() {
    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    return (
        <Box
            sx={{
                width: "100%",
                height: "80%",
                overflowY: "scroll",
                overflowX: "hidden",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    height: "90%",
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
                                    شرح
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
                                    تاریخ فاکتور/بارنامه
                                </TableCell>
                                <TableCell
                                    sx={{ color: (theme) => theme.palette.disable.main }}
                                    align="center"
                                >
                                    شماره فاکتور/بارنامه
                                </TableCell>
                                <TableCell
                                    sx={{ color: (theme) => theme.palette.disable.main }}
                                    align="center"
                                >
                                    بدهکار
                                </TableCell>
                                <TableCell
                                    sx={{ color: (theme) => theme.palette.disable.main }}
                                    align="center"
                                >
                                    بستانکار
                                </TableCell>
                                <TableCell
                                    sx={{ color: (theme) => theme.palette.disable.main }}
                                    align="center"
                                >
                                    مانده
                                </TableCell>
                                <TableCell
                                    sx={{ color: (theme) => theme.palette.disable.main }}
                                    align="center"
                                ></TableCell>
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
            <Box
                sx={{
                    p: 1,
                    pl: 5,
                    ...center,
                    justifyContent: "flex-end",
                    gap: "15px",
                    borderTop: "2px  solid gray",
                    borderBottom: "2px  solid gray",
                }}
            >
                <Box sx={{ ...center, justifyContent: "flex-end", gap: "10px" }}>
                    <Typography
                        sx={{
                            color: (theme) => theme.palette.divider,
                            fontSize: "16px",
                            fontWeight: 400,
                        }}
                    >
                        جمع کل:
                    </Typography>
                    <Divider flexItem orientation="vertical" />
                    <Typography
                        sx={{
                            color: (theme) => theme.palette.green.main,
                            fontSize: "16px",
                            fontWeight: 500,
                        }}
                    >
                        {toPersian(separateBy3("3246346"))} ریال
                    </Typography>
                    <Divider flexItem orientation="vertical" />
                    <Typography
                        sx={{
                            color: (theme) => theme.palette.warning.main,
                            fontSize: "16px",
                            fontWeight: 500,
                        }}
                    >
                        {toPersian(separateBy3("3246346"))} ریال
                    </Typography>
                    <Divider flexItem orientation="vertical" />
                    <Typography
                        sx={{
                            color: (theme) => theme.typography.color,
                            fontSize: "16px",
                            fontWeight: 500,
                        }}
                    >
                        {toPersian(separateBy3("3246346"))} ریال
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
