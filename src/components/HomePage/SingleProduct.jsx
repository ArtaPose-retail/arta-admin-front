import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Title from "../UI/Title";
import { separateBy3, toPersian } from "../../utils/setting";
import moment from "jalali-moment";
import ProductDetails from './Dialogs/ProductDetails';
function SingleProduct({ data }) {
    const [open, setOpen] = useState(false);

    const showDialoghandler = () => {
        setOpen(true);
        console.log("here", open);
    };
    const handlerCloseDialog = () => {
        setOpen(false);
        console.log("here", open);

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
                    borderRadius: "12px"

                }}>

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
                            }}
                        >
                            <img
                                src={data.logo}
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
                                fontSize: "14px",
                                fontWeight: 500,
                                color: (theme) => !data?.refrigerating ? theme.palette.disable.secondary : '',
                                textAlign: "start",
                            }}
                        />
                        <Typography
                            sx={{
                                fontSize: "12px",
                                fontWeight: 400,
                                color: (theme) => !data?.refrigerating ? theme.palette.disable.main : "",
                                textAlign: "start",
                            }}
                        >
                            {data.transportInfo.vehicle} - {data.transportInfo.driver}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "12px",
                                fontWeight: 400,
                                color: (theme) => !data?.refrigerating ? theme.palette.disable.main : "",
                                textAlign: "start",
                            }}
                        >
                            طرف معامله:{data.transactionParty}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-end",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "12px",
                                fontWeight: 700,
                                color: (theme) => theme.palette.text.secondary,
                                textAlign: "start",
                            }}
                        >
                            {toPersian(separateBy3(data.amount))}ریال
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "12px",
                                fontWeight: 700,
                                color: (theme) => !data?.refrigerating ? theme.palette.disable.main : "",
                                textAlign: "start",
                            }}
                        >
                            {toPersian(
                                moment(data?.date, "YYYY-MM-DD")
                                    .locale("fa")
                                    .format("YYYY/MM/D")
                            )}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <ProductDetails iteminfo={data} status={open} handlerCloseDialog={handlerCloseDialog} />
        </>
    );
}

export default SingleProduct;
