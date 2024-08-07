import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { account } from "../../utils/data";

import { separateBy4, toPersian } from "../../utils/setting";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useNavigate } from "react-router-dom";
import reactRouts from "../../utils/reactRouts";
import EditIcon from "@mui/icons-material/Edit";

const center = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

function Card() {
    const navigate = useNavigate();

    const addAcount = () => {
        navigate(reactRouts.banking.addcart);
    };
    return (
        <Box sx={{ width: "100wh", display: "flex", overflowX: "scroll" }}>
            <Box
                sx={{
                    display: "flex",
                    gap: "15px",
                    p: 2,
                }}
            >
                {account?.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            background: `url(${item.bg}) center / auto no-repeat  `,
                            objectFit: "fill",
                            position: "relative",
                            borderRadius: "18px",
                            width: "290px",
                            height: "183px",
                            p: 1,
                        }}
                    >
                        <Box sx={{ ...center, justifyContent: "space-between" }}>
                            <Box sx={{ ...center, gap: "5px" }}>
                                <img src={item.logo} />
                                <Typography sx={{ fontSize: "12px", fontWeight: "regular" }}>
                                    {item.bankName}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    bgcolor: item.color,
                                    ...center,
                                    p: 1,
                                    borderRadius: "18px 0px 18px 0px",
                                    gap: "5px",
                                }}
                            >
                                <Typography
                                    sx={{
                                        ...center,
                                        fontSize: "10px",
                                        fontWeight: "regular",
                                        color: "white",
                                    }}
                                >
                                    موجودی &nbsp;
                                    {toPersian(item.amount)}
                                    &nbsp; ریال
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                height: "80%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                p: 2,
                            }}
                        >
                            <Typography
                                sx={{
                                    ...center,
                                    fontSize: "12px",
                                    fontWeight: "regular",
                                    color: (theme) => theme.palette.text.card,
                                    justifyContent: "flex-start",
                                }}
                            >
                                شماره حساب:&nbsp;
                                {item.accountNumber}
                            </Typography>

                            <Box sx={{ ...center, flexDirection: "row-reverse", gap: "15%" }}>
                                {separateBy4(item.cardNumber).map((num) => (
                                    <Typography
                                        sx={{
                                            ...center,
                                            fontSize: "16px",
                                            fontWeight: "bold",
                                            color: (theme) => theme.palette.text.card,
                                        }}
                                    >
                                        {toPersian(num)}
                                    </Typography>
                                ))}
                            </Box>

                            {/* })} */}
                            <Box sx={{ ...center, justifyContent: "space-between" }}>
                                <Typography
                                    sx={{
                                        ...center,
                                        fontSize: "12px",
                                        fontWeight: "regular",
                                        color: (theme) => theme.palette.text.card,
                                        justifyContent: "flex-start",
                                    }}
                                >
                                    شماره شبا:&nbsp;
                                    {item.sheba}
                                </Typography>
                                <EditIcon
                                    fontSize="small"
                                    sx={{
                                        bgcolor: (theme) => theme.palette.darkBlue.main,
                                        fill: (theme) => theme.palette.text.primary,
                                        borderRadius: "8px",
                                        p: 0.2,
                                    }}
                                />
                            </Box>
                        </Box>
                    </Box>
                ))}

                <Box
                    sx={{
                        bgcolor: (theme) => theme.palette.text.secondary,
                        borderRadius: "18px",
                        width: "290px",
                        height: "183px",
                        ...center,
                        flexDirection: "column",
                        gap: "10px",
                        cursor: "pointer",
                    }}
                    onClick={() => addAcount()}
                >
                    <AddCircleOutlineIcon
                        sx={{ fontSize: 64, fill: (theme) => theme.palette.text.primary }}
                    />
                    <Typography
                        sx={{
                            color: (theme) => theme.palette.text.primary,
                            fontSize: "16px",
                        }}
                    >
                        حساب خود را اضافه کنید
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Card;
