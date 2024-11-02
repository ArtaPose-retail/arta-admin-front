import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Title from "../UI/Title";
import { persianDate, separateBy3, toPersian } from "../../utils/setting";
import ProductDetails from "./Dialogs/ProductDetails";
import { center } from "../../styles/theme";
import apiRouts from "../../utils/apiRouts";
import { useDispatch } from "react-redux";
import { singleProd } from "../../Redux/Slices/Accounting/Products/product";
import { setSingleOrderInfo } from "../../Redux/Slices/Actions/SellPage/sellPage";
function SingleProduct({ data }) {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()
    const showDialoghandler = () => {
        setOpen(true);
        dispatch(singleProd(data.prod_id))
        dispatch(setSingleOrderInfo({
            key: "product_id",
            value: +data.prod_id
        }))
    };
    const handlerCloseDialog = () => {
        setOpen(false);

    };


    return (
        <>
            <Box
                onClick={() => showDialoghandler()}
                sx={{
                    cursor: "pointer",
                    background: !data?.refrigerating ? "#fff" : "#00a7ff59",
                    textAlign: "center",
                    height: 200,
                    lineHeight: "60px",
                    position: "relative",
                    boxShadow: "0px 0px 17px 1px rgb(0 0 0 / 17%)",
                    borderRadius: "12px",
                }}
            >
                {/* header */}
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    {/* right part */}
                    <Box sx={{ p: 1, position: "relative" }}>
                        {/* colorfull part */}
                        <Box
                            sx={{
                                width: "83px",
                                height: "56px",
                                bgcolor: `${data.color}`,
                                borderRadius: "8px",
                                position: "relative",
                                bgcolor: "#FFDBDF"
                            }}
                        >
                            <img
                                src={`${apiRouts.baseUrl}${data.productpic_path}`}
                                width={35}
                                height={35}
                                style={{
                                    position: "absolute",
                                    padding: "0px",
                                    margin: "0px",
                                    left: 0,
                                    right: "75%",
                                    top: "10%",
                                    bottom: "0px",
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        p: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        justifyContent: "space-between",
                    }}
                >
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                        <Title
                            title={data.title}
                            Typoprops={{
                                fontSize: "16px",
                                fontWeight: 900,
                                textAlign: "start",
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            ...center,
                            flexDirection: "column",
                            alignItems: "start",
                            gap: "15px"
                        }}
                    >
                        <Box sx={{ ...center, justifyContent: "space-between", width: "100%" }}>
                            <Typography
                                sx={{
                                    fontSize: "12px",
                                    fontWeight: 700,
                                    color: (theme) => theme.palette.text.secondary,
                                    textAlign: "start",
                                }}
                            >
                                فی: {toPersian(separateBy3(data?.price))}ریال
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "12px",
                                    fontWeight: 700,
                                    color: (theme) => theme.palette.text.secondary,
                                    textAlign: "start",
                                }}
                            >
                                موجودی: {toPersian(separateBy3(4000))}
                            </Typography>
                        </Box>

                        <Typography
                            sx={{
                                fontSize: "12px",
                                fontWeight: 700,
                                color: (theme) =>
                                    !data?.refrigerating ? theme.palette.disable.main : "",
                                textAlign: "start",
                            }}
                        >
                            {persianDate(data?.updated_at)
                            }
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <ProductDetails
                iteminfo={data}
                status={open}
                handlerCloseDialog={handlerCloseDialog}
            />
        </>
    );
}

export default SingleProduct;
