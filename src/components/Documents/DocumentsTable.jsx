import { Fragment, useEffect, useState } from "react";
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
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
    persianDate,
    persianTime,
    persianTimeTehran,
    separateBy3,
    toPersian,
    toastHandler,
    translateStatusDoc,
} from "../../utils/setting";

import { Button, Checkbox, Divider, Fade, Popper } from "@mui/material";
import { Link } from "react-router-dom";
import reactRouts from "../../utils/reactRouts";
import { center } from "../../styles/theme";
import { ExpandMore } from "@mui/icons-material";
import { DocumentList } from "../../Redux/Slices/Actions/Document/document";
import { useDispatch, useSelector } from "react-redux";

import { ArrowBack, ArrowForward, } from "@mui/icons-material";


function Row(props) {
    const [openPopper, setOpenPopper] = useState(false);
    const [PosItem, setPositem] = useState("چاپ حرارتی");
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
        toastHandler("ایتم مورد نظر حذف شد", "warning");
    };

    const [open, setOpen] = useState(false);

    const showDialoghandler = () => {
        setOpen(true);
    };
    const handlerCloseDialog = () => {
        setOpen(false);
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
                    {toPersian(row?.transaction_id ?? 0)}
                </TableCell>

                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {row?.transaction_reason}
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {row?.first_name}-{row?.last_name}
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(row?.phone ?? 0)}
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {persianDate(row?.created_at)} | {persianTimeTehran(row?.created_at)}
                </TableCell>
                <TableCell
                    sx={{
                        color: (theme) => theme.palette.darkBlue.main,
                        fontWeight: 500,
                    }}
                    align="center"
                >
                    {toPersian(separateBy3(row?.amount ?? 0))}
                    ریال
                </TableCell>
                <TableCell
                    sx={{
                        color: (theme) => theme.palette.darkBlue.main,
                        fontWeight: 500,
                    }}
                    align="center"
                >
                    {/* {row?.status} */}
                    {translateStatusDoc(row?.status)}
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

                        <Box sx={{ ...center, flexDirection: "column" }}>
                            <Link to={reactRouts.sellpage}>
                                <EditIcon fontSize="small" onClick={showDialoghandler} />
                            </Link>
                            <DeleteOutlineIcon
                                onClick={() => deletehandler()}
                                fontSize="medium"
                                sx={{
                                    fill: (theme) => theme.palette.warning.main,
                                    cursor: "pointer",
                                }}
                            />
                        </Box>


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
                                        fontWeight: 400,
                                    }}
                                >
                                    {/* {toPersian(row?.Details?.checks)} */}
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


export default function DocumentsTable() {

    const { docList } = useSelector(state => state.document)
    const [page, setPage] = useState(0);
    const dispatch = useDispatch()

    const PageHandler = (pageNumber) => {
        setPage(pageNumber);
    };

    useEffect(() => {
        dispatch(DocumentList(page ?? 0))
    }, [page])

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
                                <Checkbox color="primary" />
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
                                طرف معامله/مشتری
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                شماره طرف معامله/مشتری
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
                                وضعیت
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
                        {docList && docList?.map((row, index) => (
                            <Row key={index} row={row} index={index} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{ p: 2, ...center, gap: "25px" }}>
                <Button
                    variant="outlined"
                    color="success"
                    onClick={() => PageHandler(page + 1)}
                >
                    <ArrowForward />
                    بعدی
                </Button>
                <Typography>
                    {toPersian(page + 1)}
                </Typography>
                <Button
                    variant="outlined"
                    color="success"
                    onClick={() => PageHandler(page - 1)}
                >
                    قبلی
                    <ArrowBack />
                </Button>
            </Box>
        </Box>
    );
}
