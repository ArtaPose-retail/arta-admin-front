import { Box, Typography } from "@mui/material";
import React from "react";
import Title from "../../components/UI/Title";
import { center } from "../../styles/theme";
import DLbg from "../../Assets/images/DLbg.png";
import fruitBasket from "../../Assets/images/Fruits/fruitBasket.png";
import ObliqueLine from "../../components/UI/ObliqueLine";
import { separateBy3, toPersian } from "../../utils/setting";
import Lable from "../../components/DigitalLable/Lable";
import logo from "../../Assets/images/logo.png"
import name from "../../Assets/images/logoname.png";
function DigitalLable() {
    return (
        <>
            <Title
                title={"دیجیتال لیبل"}
                Typoprops={{
                    fontSize: "20px",
                    fontWeight: 500,
                    color: (theme) => theme.palette.text.card,
                }}
            />

            <Box
                sx={{
                    width: "100%",
                    bgcolor: (theme) => theme.background.box,
                    borderRadius: "18px",
                    height: "90dvh",
                    p: 1,
                    mx: 1,
                    overflowY: "scroll",
                    ...center,
                }}
            >
                <Box
                    sx={{
                        height: "80%",
                        width: "80%",

                        boxShadow: 5,
                        backgroundImage: `url(${DLbg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <Box
                        sx={{
                            height: "50%",
                            width: "100%",
                            ...center,
                        }}
                    >
                        <Box
                            sx={{
                                height: "100%",
                                width: "40%",
                                ...center,
                            }}
                        >
                            <img
                                src={fruitBasket}
                                alt="fruitBasket"
                                style={{ width: "60%", height: "100%" }}
                            />
                        </Box>
                        <Box sx={{ height: "100%", width: "60%" }}>
                            <Title
                                title={"هلو دماوند"}
                                Typoprops={{
                                    fontSize: "70px",
                                    fontWeight: 700,
                                    color: (theme) => theme.palette.text.card,
                                    textAlign: "center",
                                }}
                            />
                            <Typography
                                sx={{
                                    fontSize: "80px",
                                    textAlign: "center",
                                    fontWeight: "900",
                                    color: (theme) => theme.palette.warning.main,
                                    width: "100%",
                                }}
                            >
                                {toPersian(separateBy3("380000"))}
                                تومان
                            </Typography>
                            <Box sx={{ ...center, justifyContent: "start", gap: "10px" }}>


                                <ObliqueLine title={separateBy3("400000")} />
                                <Typography sx={{
                                    fontSize: "24px",
                                    textAlign: "center",
                                    fontWeight: "500",
                                    color: (theme) => theme.palette.primary.main,

                                }}>
                                    هرکیوگرم
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ height: "50%", width: "100%", ...center, flexDirection: "column" }}>
                        <Box sx={{ height: "30%", width: "100%", ...center, alignItems: "start", gap: "10px" }}>
                            <Lable />
                            <Lable />
                            <Lable />
                            <Lable />
                            <Lable />
                            <Lable />
                        </Box>
                        <Typography sx={{ textAlign: "center", my: 2, fontSize: "24px", fontWeight: "700" }}>
                            پاکسازی کبد و تقویت سلامت قلب
                        </Typography>
                        <Box sx={{ ...center, flexDirection: "column" }}>
                            <img src={logo} width={50} height={50} />
                            <img src={name} width={80} height={40} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default DigitalLable;
