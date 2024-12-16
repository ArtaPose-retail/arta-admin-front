import { Fragment, useEffect, useRef, useState } from "react";
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
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { persianDate, separateBy3, toPersian } from "../../../utils/setting";
import { useDispatch, useSelector } from "react-redux";
import {
    deletePC,
    getList,
} from "../../../Redux/Slices/Actions/PromoCode/Lable/lable";
import { center } from "../../../styles/theme";
import { ArrowBack, ArrowForward, Print } from "@mui/icons-material";
import ReactToPrint from "react-to-print";
import PromoCodePrint from "../../PrintTemplate/PromoCode";
import { Button } from "@mui/material";

function Row(props) {
    const { row } = props;
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const componentRef = useRef();

    const deleteBtn = (id) => {
        dispatch(deletePC(id));
    };

    return (
        <Fragment>
            <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell
                    align="center"
                    sx={{
                        color: (theme) => theme.typography.color,
                        fontWeight: 500,
                        ...center,
                        gap: "5px",
                    }}
                >
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>

                    {row?.type == 0 ? "درصدی" : "مبلغی"}
                    {`(${toPersian(row?.amount ?? 0)})`}
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(row?.code)}
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {persianDate(row?.started_time)}
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {persianDate(row?.end_time)}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
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
                                {/* <EditIcon fontSize="small" /> */}
                                <DeleteOutlineIcon
                                    fontSize="small"
                                    onClick={() => deleteBtn(row?.id)}
                                    sx={{
                                        fill: (theme) => theme.palette.warning.main,
                                        cursor: "pointer",
                                    }}
                                />

                                <ReactToPrint
                                    trigger={() => (
                                        <Print
                                            sx={{
                                                fill: (theme) => theme.palette.primary.light,
                                                cursor: "pointer",
                                            }}
                                        />
                                    )}
                                    content={() => componentRef.current}
                                />
                            </Box>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
            <Box sx={{ display: "none" }}>
                <PromoCodePrint ref={componentRef} data={row} />
            </Box>
        </Fragment>
    );
}

export default function TableSection() {
    const { update, promoList } = useSelector((state) => state.lable);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    useEffect(() => {
        dispatch(getList(page ?? 1));
    }, [update, page]);

    const PageHandler = (pageNumber) => {
        setPage(pageNumber);
    };
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
                                نوع کد تخفیف
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                کد تخفیف
                            </TableCell>

                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                تاریخ شروع
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                تاریخ پایان
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {promoList.slice().reverse().map((row, index) => (
                            <Row key={index} row={row} />
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
                    {toPersian(page)}
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
