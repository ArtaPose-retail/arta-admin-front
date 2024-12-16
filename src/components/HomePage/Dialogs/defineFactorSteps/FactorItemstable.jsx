import { useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Box } from "@mui/material";

import { separateBy3, toPersian } from "../../../../utils/setting";
import { useDispatch, useSelector } from "react-redux";
import {
    DeleteOrderItem,
    FactorItemslist,
    setFactorItems,
} from "../../../../Redux/Slices/Accounting/Factor/FactorItems/factorItems";
import EditIcon from "@mui/icons-material/Edit";
import { PrintRounded } from "@mui/icons-material";
import ReactToPrint from "react-to-print";
import ProdCode from "../../../PrintTemplate/ProdCode";
import { singleProd } from "../../../../Redux/Slices/Accounting/Products/product";

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

export default function FactorItemstable({ height }) {
    const dispach = useDispatch();
    const prodRef = useRef();
    const { addDetailRes } = useSelector((state) => state.factorDetails);
    const { singleOrderList, update } = useSelector((state) => state.factorItems);

    useEffect(() => {
        dispach(FactorItemslist(addDetailRes?.id));
    }, [addDetailRes?.id, update]);

    const deleteBtn = (prod_id) => {
        dispach(DeleteOrderItem({ order_id: addDetailRes?.id, op_id: prod_id }));
    };

    const EditHandler = (item) => {
        console.log(item);

        for (const key in item) {
            if (Object.prototype.hasOwnProperty.call(item, key)) {
                dispach(
                    setFactorItems({
                        key: key,
                        value: item[key],
                    })
                );
            }
        }
    };
    return (
        <TableContainer sx={{ maxHeight: height }}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">ردیف</StyledTableCell>
                        <StyledTableCell align="center">نوع محصول</StyledTableCell>

                        <StyledTableCell align="center">فی خرید</StyledTableCell>
                        <StyledTableCell align="center">فی فروش</StyledTableCell>
                        <StyledTableCell align="center">فی فروش فروشگاه</StyledTableCell>

                        <StyledTableCell align="center">تعداد</StyledTableCell>
                        <StyledTableCell align="center">عملیات</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {singleOrderList?.map((item, index) => (
                        <>
                            <StyledTableRow key={index}>
                                <StyledTableCell width={"10%"} align="center">
                                    {toPersian(index + 1)}
                                </StyledTableCell>
                                <StyledTableCell align="center">{item?.Title}</StyledTableCell>

                                <StyledTableCell align="center">
                                    {toPersian(separateBy3(item?.initial_buy_price ?? 0))}ریال
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {toPersian(separateBy3(item?.original_price ?? 0))}ریال
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {toPersian(separateBy3(item?.unitprice ?? 0))}ریال
                                </StyledTableCell>

                                <StyledTableCell align="center">
                                    {item?.quantity}
                                    {item?.IsBulk == true ? "عدد" : "کیلوگرم"}
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
                                        <EditIcon
                                            sx={{
                                                cursor: "pointer",
                                            }}
                                            onClick={() => EditHandler(item)}
                                        />
                                        <DeleteOutlineIcon
                                            onClick={() => deleteBtn(item?.id)}
                                            sx={{
                                                fill: (theme) => theme.palette.warning.main,
                                                cursor: "pointer",
                                            }}
                                        />

                                        <ReactToPrint
                                            onBeforePrint={() => dispach(singleProd(item?.product_id))}
                                            trigger={() => (
                                                <PrintRounded
                                                    sx={{
                                                        fill: (theme) => theme.palette.primary.light,
                                                        cursor: "pointer",
                                                    }}
                                                />
                                            )}
                                            content={() => prodRef.current}
                                        />
                                    </Box>
                                </StyledTableCell>
                            </StyledTableRow>
                            <Box sx={{ display: "none" }}>
                                <ProdCode ref={prodRef} data={item} />
                            </Box>
                        </>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
