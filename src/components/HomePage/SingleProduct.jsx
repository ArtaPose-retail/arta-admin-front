import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Title from "../UI/Title";
import { persianDate, separateBy3, toPersian } from "../../utils/setting";
import moment from "jalali-moment";
import ProductDetails from "./Dialogs/ProductDetails";
import { center } from "../../styles/theme";
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
                                فی: {toPersian(separateBy3(data.amount))}ریال
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
                            {persianDate(data?.date)
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
