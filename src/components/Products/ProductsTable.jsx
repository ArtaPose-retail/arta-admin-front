import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Box } from "@mui/material";
import { toPersian } from "../../utils/setting";
import { useDispatch, useSelector } from "react-redux";
import { deleteProd, getProList, setNewProduct, singleProd } from "../../Redux/Slices/Accounting/Products/product";
import AddNewProduct from "./AddNewProduct";
import ProdCode from "../PrintTemplate/ProdCode";
import { PrintRounded } from "@mui/icons-material";
import ReactToPrint from "react-to-print";
// import ProdA4 from "../PrintTemplate/ProdA4";

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

    const [openDg, setOpenDg] = useState(false);
    const [singleProdId, setSingleProdId] = useState(null);
    const openProductDg = (data) => {
        setOpenDg(true);
        setSingleProdId(data.prod_id)
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                dispatch(setNewProduct({
                    key: key,
                    value: data[key]
                }))
            }
        }
    };

    const closeProductDg = () => {
        setOpenDg(false);
    };

    const dispatch = useDispatch();
    const { productList, update } = useSelector((state) => state.product);
    useEffect(() => {
        dispatch(getProList());
    }, [update]);

    const deleteBtn = (id) => {

        dispatch(deleteProd(id))
    };
    return (

        <>
            <TableContainer sx={{ maxHeight: "85%" }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">ردیف</StyledTableCell>
                            <StyledTableCell align="center">کد محصول</StyledTableCell>
                            <StyledTableCell align="center"> نام ژنریک</StyledTableCell>
                            <StyledTableCell align="center">نام محصول</StyledTableCell>
                            <StyledTableCell align="center">دسته</StyledTableCell>
                            <StyledTableCell align="center">موجودی</StyledTableCell>
                            <StyledTableCell align="center">عملیات </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productList.map((item, index) => (
                            <>
                                <StyledTableRow key={index}>
                                    <StyledTableCell width={"10%"} align="center">
                                        {toPersian(index + 1)}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        {item?.code}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        {item?.subcategory_title}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{item?.title}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        {item?.category_title}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{item?.instock}</StyledTableCell>

                                    <StyledTableCell align="center">
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                gap: "10px",
                                            }}
                                        >
                                            <EditIcon sx={{ cursor: "pointer" }} onClick={() => openProductDg(item)} />
                                            <DeleteOutlineIcon
                                                onClick={() => deleteBtn(item?.prod_id)}
                                                sx={{
                                                    fill: (theme) => theme.palette.warning.main,
                                                    cursor: "pointer",
                                                }}
                                            />
                                            <ReactToPrint
                                                // onBeforePrint={
                                                //     () => dispatch(singleProd(item?.prod_id)) // منتظر به‌روزرسانی state
                                                // }
                                                // onAfterPrint={() => {
                                                // dispach(resetSingleProd());
                                                // }}
                                                trigger={() => (
                                                    <PrintRounded
                                                        sx={{
                                                            fill: (theme) => theme.palette.primary.light,
                                                            cursor: "pointer",
                                                        }}
                                                    />
                                                )}
                                                content={() =>
                                                    document.getElementById(`prodCode-${item?.prod_id}`)
                                                }

                                            // content={() => prodRef.current}
                                            />
                                            {/* <ReactToPrint
                                                // onBeforePrint={
                                                //     () => dispatch(singleProd(item?.prod_id)) // منتظر به‌روزرسانی state
                                                // }
                                                // onAfterPrint={() => {
                                                // dispach(resetSingleProd());
                                                // }}
                                                trigger={() => (
                                                    <PrintRounded
                                                        sx={{
                                                            fill: (theme) => theme.palette.error.main,
                                                            cursor: "pointer",
                                                        }}
                                                    />
                                                )}
                                                content={() =>
                                                    document.getElementById(`prodA4-${item?.prod_id}`)
                                                }

                                            // content={() => prodRef.current}
                                            /> */}
                                        </Box>
                                    </StyledTableCell>
                                </StyledTableRow>
                                <Box sx={{ display: "none" }}>
                                    <ProdCode
                                        id={`prodCode-${item?.prod_id}`}
                                        data={item}

                                    />
                                </Box>
                                {/* <Box sx={{ display: "none" }}>
                                    <ProdA4
                                        id={`prodA4-${item?.prod_id}`}
                                        data={item}

                                    />
                                </Box> */}
                            </>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <AddNewProduct status={openDg} handlerCloseDialog={closeProductDg} type={"edit"} id={singleProdId} />

        </>
    );
}
