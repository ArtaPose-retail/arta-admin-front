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

import { separateBy3, toPersian } from "../../utils/setting";

function createData(
    user,
    melipos,
    sepahpos,
    tankhah,
    discount,
    recive,
    pay,
    mostare,
    check,
    worker,
    totall
) {
    return {
        user,
        melipos,
        sepahpos,
        tankhah,
        discount,
        recive,
        pay,
        mostare,
        check,
        worker,
        totall,
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
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpenCollaps(!openCollaps)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                    {toPersian(row?.user)}
                </TableCell>

                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(separateBy3(row?.melipos))}
                    ریال
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(separateBy3(row?.sepahpos))}
                    ریال
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(separateBy3(row?.tankhah))}
                    ریال
                </TableCell>
                <TableCell
                    sx={{
                        color: (theme) => theme.typography.color,
                        fontWeight: 500,
                    }}
                    align="center"
                >
                    {toPersian(separateBy3(row?.discount))}
                    ریال
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(separateBy3(row?.recive))}
                    ریال
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(separateBy3(row?.pay))}
                    ریال
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(separateBy3(row?.mostare))}
                    ریال
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(separateBy3(row?.check))}
                    ریال
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(separateBy3(row?.worker))}
                    ریال
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={openCollaps} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1, ...center, gap: "15px" }}>
                            <Box sx={{ ...center, gap: "10px" }}>
                                <Typography
                                    sx={{
                                        fontSize: "18px",
                                        fontWeight: 500,
                                    }}
                                >
                                    موجودي
                                </Typography>
                                <Typography
                                    sx={{
                                        color: (theme) => theme.palette.darkBlue.main,
                                        fontSize: "16px",
                                        fontWeight: 600,
                                    }}
                                >
                                    {toPersian(separateBy3(row?.totall))}
                                    ریال
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
    createData(
        "پرهام حسن زاده",
        "4500000",
        "4500000",
        "4500000",
        "4500000",
        "4500000",
        "4500000",
        "9000000",
        "9000000",
        "9000000",
        "19000000"
    ),
    createData(
        "پرهام حسن زاده",
        "4500000",
        "4500000",
        "4500000",
        "4500000",
        "4500000",
        "4500000",
        "9000000",
        "9000000",
        "9000000",
        "19000000"
    ),
    createData(
        "پرهام حسن زاده",
        "4500000",
        "4500000",
        "4500000",
        "4500000",
        "4500000",
        "4500000",
        "9000000",
        "9000000",
        "9000000",
        "19000000"
    ),
    createData(
        "پرهام حسن زاده",
        "4500000",
        "4500000",
        "4500000",
        "4500000",
        "4500000",
        "4500000",
        "9000000",
        "9000000",
        "9000000",
        "19000000"
    ),
    createData(
        "پرهام حسن زاده",
        "4500000",
        "4500000",
        "4500000",
        "4500000",
        "4500000",
        "4500000",
        "9000000",
        "9000000",
        "9000000",
        "19000000"
    ),
    createData(
        "پرهام حسن زاده",
        "4500000",
        "4500000",
        "4500000",
        "4500000",
        "4500000",
        "4500000",
        "9000000",
        "9000000",
        "9000000",
        "19000000"
    ),
    createData(
        "پرهام حسن زاده",
        "4500000",
        "4500000",
        "4500000",
        "4500000",
        "4500000",
        "4500000",
        "9000000",
        "9000000",
        "9000000",
        "19000000"
    ),
    createData(
        "پرهام حسن زاده",
        "4500000",
        "4500000",
        "4500000",
        "4500000",
        "4500000",
        "4500000",
        "9000000",
        "9000000",
        "9000000",
        "19000000"
    ),
    createData(
        "پرهام حسن زاده",
        "4500000",
        "4500000",
        "4500000",
        "4500000",
        "4500000",
        "4500000",
        "9000000",
        "9000000",
        "9000000",
        "19000000"
    ),
];

export default function AccountManagingTable() {
    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    return (
        <TableContainer
            sx={{
                maxHeight: 400,
            }}
        >
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell
                            sx={{ color: (theme) => theme.typography.color }}
                            align="center"
                        >
                            کاربر{" "}
                        </TableCell>
                        <TableCell
                            sx={{ color: (theme) => theme.typography.color }}
                            align="center"
                        >
                            پوزملي{" "}
                        </TableCell>
                        <TableCell
                            sx={{ color: (theme) => theme.typography.color }}
                            align="center"
                        >
                            پوز سپه
                        </TableCell>
                        <TableCell
                            sx={{ color: (theme) => theme.typography.color }}
                            align="center"
                        >
                            تنخواه{" "}
                        </TableCell>
                        <TableCell
                            sx={{ color: (theme) => theme.typography.color }}
                            align="center"
                        >
                            تخفيف{" "}
                        </TableCell>
                        <TableCell
                            sx={{ color: (theme) => theme.typography.color }}
                            align="center"
                        >
                            دريافتي{" "}
                        </TableCell>
                        <TableCell
                            sx={{ color: (theme) => theme.typography.color }}
                            align="center"
                        >
                            پرداختي{" "}
                        </TableCell>
                        <TableCell
                            sx={{ color: (theme) => theme.typography.color }}
                            align="center"
                        >
                            مستردي{" "}
                        </TableCell>
                        <TableCell
                            sx={{ color: (theme) => theme.typography.color }}
                            align="center"
                        >
                            چك{" "}
                        </TableCell>
                        <TableCell
                            sx={{ color: (theme) => theme.typography.color }}
                            align="center"
                        >
                            كارگري{" "}
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
    );
}
